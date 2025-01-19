import { IAPIResponse,  } from "../../interface";
import { Car } from "../../Schema/carSchema";

class CarService {
  private response: IAPIResponse | undefined;

 
  
  async carList({filter,search,offset}:{filter:string,search:string,offset:number}){
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

  async uploadCarList()  {
    try {
       
      

    } catch (error) {
      console.error(error);
    }
  }
 
}

export default new CarService();
