import { IAPIResponse,  } from "../../interface";
import { Car } from "../../Schema/carSchema";
import { Department } from "../../Schema/departmentSchema";

class departmentService {
  private response: IAPIResponse | undefined;

 
  
  async departmentList({filter,search,offset}:{filter:string,search:string,offset:number}){
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

  async addNewDepartment({name,description}:{name:string,description:string}){  {
    try {
       if(!name || !description){
         return this.response = {
           success: false,
           statusCode: 400,
           message: "Please provide all the required fields",
         }
       }
      

    } catch (error) {
      console.error(error);
    }
  }
}

  async updateDepartment({name,description,_id}:{_id:string;name:string,description:string}){
    if(!_id|| !name || !description){
      return this.response = {
        success: false,
        statusCode: 400,
        message: "Please provide all the required fields",
      }
    }

    try {
       
     const result = await Department.updateOne({_id},{description:description});  
     if(result){
      return this.response = {
        success: true,
        statusCode: 200,
        message: "Department updated successfully",
      }
    }
      else{
        return this.response = {
          success: false,
          statusCode: 400,
          message: "Department not found",
      }
    }
     

    } catch (error) {
      console.error(error);
    }
  }
 
}

export default new departmentService();
