import { PAYMENT_STATUS } from "../../constant";
import { IAPIResponse, IBooking } from "../../interface";
import { Address } from "../../Schema/addressSchema";
import { Booking } from "../../Schema/bookingSchema";

class InquiryService {
  private response: IAPIResponse | undefined;

  async newInquiry({ user_id, car_id, agent_id, address }: IBooking) {
    if (!user_id || !car_id || !agent_id || !address) {
      return (this.response = {
        message: "Please provide all required fields",
        success: false,
      });
    };

    try {
      const existAddress =await Booking.find({ user_id, ...address });

      if (!existAddress || !existAddress.length) {
        await Address.create({
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

      const data = await Booking.create({
        data: {
          user_id,
          car_id,
          agent_id,
          address_id: 1,
          down_payment: 1000,
          payment_id: 101,
          status: PAYMENT_STATUS.SUCCESS,
        },
      });

      if (data && data._id) {
         this.response = {
          message: "Booking created successfully",
          success: true,
          data
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

export default new InquiryService();
