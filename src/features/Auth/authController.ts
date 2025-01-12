import {Request,Response} from "express"
import authService from "./authService"


export const login=(req:Request,res:Response)=>{
    const response= authService.login(req.body);
    return res.status(200).send(response)
}

export const signup=(req:Request,res:Response)=>{
    const response= authService.login(req.body);
    return res.status(200).send(response)
}

export const forgotPassword=(req:Request,res:Response)=>{
    const response= authService.login(req.body);
    return res.status(200).send(response)
}


export const resetPassword=(req:Request,res:Response)=>{
    const response= authService.login(req.body);
    return res.status(200).send(response)
}