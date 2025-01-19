import { IAPIResponse,  } from "../../interface";
import { Car } from "../../Schema/carSchema";
import { Orgnization } from "../../Schema/orgnization";

class OrgnizationService {
  private response: IAPIResponse | undefined;

 
  
  async orgnizationList({filter,search,offset}:{filter:string,search:string,offset:number}){
     try {
      const result =await Car.aggregate([
        {$match:{}},
        

        {$limit:10}
      ]);
     } catch (error) {
        console.log(error);      
     }
     return this.response;
  };

 async addNewOrgnization(data:{
  name: string;
 }){
      try {
        const orgnization = await Orgnization.create(data);
        if(!orgnization){
         return this.response = {
            success: false,
            message: "Orgnization not added",
            statusCode: 400,
            data: orgnization,
          };
        }
        this.response = {
          success: true,
          message: "Orgnization added successfully",
          statusCode: 201,
          data: orgnization,
        };

      } catch (error) {
          console.error(error);      
      }
      return this.response;

 }

 async updateOrgnization({_id ,name}:{
  name: string;
  _id: string;
 }){

    if(!_id|| !name){
      return this.response = {
        success: false,
        statusCode: 400,
        message: "Please provide all the required fields",
      }
    }
      try {
        const orgnization = await Orgnization.updateOne({},{});
        if(!orgnization){
         return this.response = {
            success: false,
            message: "Orgnization not updated",
            statusCode: 400,
            data: orgnization,
          };
        }
        this.response = {
          success: true,
          message: "Orgnization added successfully",
          statusCode: 201,
          data: orgnization,
        };

      } catch (error) {
          console.error(error);      
      }
      return this.response;

 }
 
}

export default new OrgnizationService();
