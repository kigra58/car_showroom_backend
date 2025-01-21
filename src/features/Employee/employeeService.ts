import { IAPIResponse,  } from "../../interface";
import { Employee } from "../../Schema/employee";

class EmployeeService {
  private response: IAPIResponse | undefined;

 
  
  async employeeList({filter,search,offset}:{filter:string,search:string,offset:number}){
     try {
      const result =await Employee.aggregate([
        {$match:{}},
        

        {$limit:10}
      ]);
     } catch (error) {
        console.log(error);      
     }
     return this.response;
  };

  async addNewEmployee({
    name,
    email,
    password,
    phone,
    address,
  }:{
    name:string,
    email:string,
    password:string,
    phone:string,
    address:string
  }){
    try {
      
      if(!name || !email || !password || !phone || !address){
        this.response = {
          success: false,
          statusCode: 400,
          message: "Please provide all the required fields",
        };
        return this.response;
      }

      const result = await Employee.create({});
    } catch (error) {
      console.log(error);
    }
    return this.response;
  };

  async updateEmployee({_id}:{_id:string}){
      if(!_id){
        return this.response = {
          success: false,
          statusCode: 400,
          message: "Please provide all the required fields",
        };

      };



      try {
        const result = await Employee.updateOne({});
      } catch (error) {
        console.log(error);
        
      }
      return this.response;
  }
 
}

export default new EmployeeService();
