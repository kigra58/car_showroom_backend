import { IAPIResponse, IBooking } from "../../interface";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
class AuthService {
  private response: IAPIResponse | undefined;

 async newBooking({user_id,car_id,agent_id}:IBooking)  {
    try {
            const newBooking=await prisma.booking.create({
                   data:{
                        user_id,
                        car_id,
                        agent_id,
                        address_id:1,
                        down_payment:1000,
                        payment_id:101,
                        created_at:new Date(),
                        status:"pending",
                    }
                  });
           
             if(newBooking)  {
                return this.response = {
                    message: "Booking created successfully",
                    success: true,
                    data: newBooking,
                }
             }   

     // send notification and email to agent and user for creating new booking
    } catch (error) {
        console.error(error);
    }

    return this.response;
 }

}

export default new AuthService();