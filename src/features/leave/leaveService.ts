import { IAPIResponse,  } from "../../interface";
import { Leave } from "../../Schema/leaveSchema";

class LeaveService {
  private response: IAPIResponse | undefined;

 
  async requestNewLeave(){
    try {
      // code here
       
      const result =await Leave.create({
        
      });

    } catch (error) {
      console.error(error);
    }
    return this.response;

  }

  async getLeaveRequested({
    employee_id,
    status,
   }:{
    employee_id:string,
    status:string
   }){
    try {
     
      const leave = await Leave.find({employee_id,status});
      if(leave){
        this.response = {
          data:leave,
          success:true,
          message:"leave fetched successfully",
          statusCode:200
        }
      }
      else{
        this.response = {
          data:[],
          success:false,
          message:"leave not found",
          statusCode:404
        }
      }

    } catch (error) {
      console.error(error);
    }
    return this.response;

  };

 async getLeaveByEmployeeId(employee_id:string){
    try {
      const leave = await Leave.find({employee_id});
      if(leave){
        this.response = {
          data:leave,
          success:true,
          message:"leave fetched successfully",
          statusCode:200
        }
      }
      else{
        this.response = {
          data:[],
          success:false,
          message:"leave not found",
          statusCode:404
        }
      }

    } catch (error) {
      console.error(error);
    }
    return this.response;

  }

 async getLeaveBalance(employee_id:string){
    try {
      const leaveBalance = await Leave.find({employee_id});
      if(leaveBalance){
        this.response = {
          data:leaveBalance,
          success:true,
          message:"balance leave  fetched successfully",
          statusCode:200
        }
      }
      else{
        this.response = {
          data:[],
          success:false,
          message:"balance leave not found",
          statusCode:404
        }
      }

    } catch (error) {
      console.error(error);
    }

    return this.response;
  }

 
}

export default new LeaveService();
