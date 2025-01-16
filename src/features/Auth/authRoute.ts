import { Router } from "express";

import { validate } from "../../middleware/requestValidation";
import { login,signup,forgotPassword,changePassword } from "./authController";

export const authRoute = Router();

/**
 * @swagger
 *  /api/auth/login:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/login",
// validate(loginValidation),
 login);
/**
 * @swagger
 *  /api/auth/signup:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/signup",
// validate(singupValidation),
 signup);
/**
 * @swagger
 *  /api/auth/forgot-password:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/forgot-password",
// validate(forgotPasswordValidation),
forgotPassword);
/**
 * @swagger
 *  /api/auth/change-password:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/change-password",
// validate(changePasswordValidation) ,
changePassword);
