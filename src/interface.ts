
export interface IAPIResponse{
    data?:unknown|[],
    message:string,
    success:boolean,
    error?:Error|null,
    statusCode?:number
}



export interface IPersonalInfo {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  role: string;
}

export interface IAddres{
    address_line1:string,
    landmark:string,
    city:string,
    street:string,
    zip_code:string
}

export interface IAdditionalInfo{
    agent_id:number, // user id whos account type is agent
    car_model:string,
    manufacture_year:string,
    color:string,
    down_payment:number,
    payment_mode:string,
}

export interface ICarDetails{
    id:number, // car id
    model:string,
    color:string,
    manufacture_year:string,
}




export interface IBooking{
    user_id:number,
    car_id:number,
    agent_id:number,
    address:{
        line1:string,
        landmark:string,
        city:string,
        street:string,
        zip_code:string
        state:string
    }
    down_payment:number,
    payment_mode:string,
    status:string,
    booking_date:Date,
}


