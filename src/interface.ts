
export interface IResponse{
    data:unknown,
    message:string,
    success:boolean,
    error?:Error,
    statusCode?:number
}