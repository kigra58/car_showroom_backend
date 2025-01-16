import { IAPIResponse, IBooking } from "../../interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class AuthService {
  private response: IAPIResponse | undefined;

  async newBooking({ user_id, car_id, agent_id, address }: IBooking) {
    if (!user_id || !car_id || !agent_id || !address) {
      return (this.response = {
        message: "Please provide all required fields",
        success: false,
      });
    }

    try {
      const existAddress = await prisma.userAddress.findFirst({
        where: {
          user_id,
          ...address,
        },
      });

      if (!existAddress) {
        await prisma.userAddress.create({
          data: {
            user_id,
            landmark: address.landmark,
            city: address.city,
            street: address.street,
            zip_code: address.zip_code,
            line1: address.line1,
            state: address.state,
          },
        });
      }

      const newBooking = await prisma.booking.create({
        data: {
          user_id,
          car_id,
          agent_id,
          address_id: 1,
          down_payment: 1000,
          payment_id: 101,
          created_at: new Date(),
          status: "pending",
        },
      });

      if (newBooking) {
         this.response = {
          message: "Booking created successfully",
          success: true,
          data: newBooking,
        };
      } else {
         this.response = {
          message: "Booking creation failed",
          success: false,
        };
      }

      // send notification and email to agent and user for creating new booking
    } catch (error) {
      console.error(error);
      return (this.response = {
        message: "Booking creation failed",
        success: false,
      });
    }

    return this.response;
  }
}

export default new AuthService();
