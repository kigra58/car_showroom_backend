import { PrismaClient } from "@prisma/client";
import {hash,genSalt, compare} from 'bcryptjs'
import { generateToken } from "../../middleware/generateToken";
import { IAPIResponse } from "../../interface";
const prisma = new PrismaClient();
class AuthService {
  private response: IAPIResponse | undefined;
  /**
   * SIGNUP
   */
  async signup({firstName,lastName,email,password}:{firstName:string;lastName:string;email:string,password:string}) {
    try {
       if(firstName && lastName && email && password){
         const newUser=await prisma.user.create({
           data:{
             first_name:firstName,
             last_name:lastName,
             email,
             password:await hash(password,await genSalt(10))
            }
          });
          if(newUser){
          this.response={
          success:true,
          message:"User Register Successfully",
          data:[newUser]
        };
      }else{
        this.response={
          success:false,
          message:"Unable to register new user",
        }
      };
       }else{
        this.response={
       success:false,
       message:"Unable to get payload",
       statusCode:400,
        data:[]
       }
     };
    } catch (error) {
      console.error(error);
    };
    return this.response;
  };

  /**
   * LOGIN
   */
  async login({email,password}:{email:string;password:string}) {
    try {
      
      if(email && password){
        const existUser=await prisma.user.findUnique({
          where:{email},
        });
        
        if(existUser){   
          const allData=await prisma.user.findFirst({
            where:{id:existUser.id},
            relationLoadStrategy: "join",
            include: {
              address: true,
            },
          })
          console.log("allDataallDataallData",allData);
          
          const isVarify=await compare(password,await hash(password,await genSalt(10)));
          if(isVarify){
            const token=generateToken(`${existUser.id}`,existUser.email);
            if(token &&token!==""){
              this.response={
                success:true,
                message:"User login successfully",
                data:[{...allData,token}]
              };
            }else{
              this.response={
                success:false,
                message:"Token not generated"
              }
            }
          }else{
            this.response={
              success:false,
              message:"Credentials not match"
            }
          };
        }else{
          this.response={
            success:false,
            message:"User not register"
          };
        };
      }else{
        this.response={
          success:false,
          message:"Unable to get payload"
        }
      };
    } catch (error) {
      console.error(error);
    };
    return this.response;
  };

  /**
   * FORGOT PASSWORD
   */
  async forgotPassword({email}:{email:string}) {
    try {
      const existUser=await prisma.user.findUnique({
        where:{email}
      });

      if(existUser){

      }else{
        
      }

    } catch (error) {
      console.error(error);
    };
    return this.response;
  };

  /**
   * CHANGE PASSWORD
   */
  async changePassword({newPassword,userId,oldPassword}:{newPassword:string;oldPassword:string,userId:number}) {
    try {
      const existUser=await prisma.user.findUnique({
        where:{id:Number(userId)}
      });
      if(existUser){
        const isVarify=await compare(oldPassword,await hash(existUser.password,await genSalt(10)));
        if(isVarify){
          const updatePassword=await prisma.user.update({
            where:{id:Number(userId)},
            data:{
              password:await hash(newPassword,await genSalt(10))
            }
          });
          if(updatePassword){
            this.response={
              success:true,
              message:"password changed successfully"
            };
          }else{
            this.response={
              success:false,
              message:"unable to change password"
            }
          }
        }else{
          this.response={
            success:false,
            message:"Credentials not match"
          }
        };
      }
    } catch (error) {
      console.error(error);
    };
    return this.response;

  };
}

export default new AuthService();
