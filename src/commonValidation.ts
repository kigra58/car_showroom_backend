import {ZodTypeAny, z} from "zod";



export const passwordValidation=(key:string,errorMsg:string):ZodTypeAny=>{
 return z.object({
   [key]: z.string({required_error: errorMsg}).min(8).max(16)
});
};

export const emailValidation=():ZodTypeAny=>{
 return z.object({
   email: z.string({required_error: "Email is required"}).email("Not a valid email")
});
};


export const emptyStringValidation=(key:string,errorMsg:string):ZodTypeAny=>{
  return z.object({
    [key]: z.string({required_error: errorMsg}).min(3).max(20)
 });
 };


export const paramsIdValidation=(key:string,errorMsg:string):ZodTypeAny=>{
  return z.object({
    [key]: z.number({required_error: errorMsg})
  });
};


export const listValidation=(filterEnum:any):ZodTypeAny=>{
 return z.object({
   offset:z.number({required_error: "Offset is required"}), 
   filter:z.nativeEnum(filterEnum), 
   search:z.string().optional(), 
  });
};


