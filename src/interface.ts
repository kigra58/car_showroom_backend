
export interface IAPIResponse{
    data?:unknown|[],
    message:string,
    success:boolean,
    error?:Error,
    statusCode?:number
}



interface IPersonalInfo {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  role: string;
}

interface IAddres{
    address_line1:string,
    landmark:string,
    city:string,
    street:string,
    zip_code:string
}

interface IAdditionalInfo{
    agent_id:number, // user id whos account type is agent
    car_model:string,
    manufacture_year:string,
    color:string,
    down_payment:number,
    payment_mode:string,
}

interface ICarDetails{
    id:number, // car id
    model:string,
    color:string,
    manufacture_year:string,
}