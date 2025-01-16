import {z} from "zod";
import { emailValidation, emptyStringValidation, passwordValidation } from "../../commonValidation";


export const loginValidation = z.object({
 password:passwordValidation("password","Password is required"),
 email:emailValidation(),
});

export const singupValidation = z.object({
    firstName: emptyStringValidation("firstName","First Name is required"),
    lastName: emptyStringValidation("lastName","Last Name is required"),
    password: passwordValidation("password","Password is required"),
    phone: z.string().min(10).max(14).optional(),
    email: emailValidation(),
    // url: z.string().url().optional(),
  });

export const changePasswordValidation = z.object({
    oldPassword: passwordValidation("password","Password is required"),
    newPassword: passwordValidation("newPassword","New Password is required"),
    confirmPassword: passwordValidation("confirmPassword","Confirm Password is required"),
});


export const forgotPasswordValidation = z.object({
    email: z.string({required_error: "Email is required"}).email("Not a valid email"),
});