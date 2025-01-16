import { Request, Response } from "express";
import AuthService from "./authService";

/**
 * LOGIN
 * @param req
 * @param res
 * @returns
 */
export const login = async (req: Request, res: Response) => {
  const response = await AuthService.login(req.body);
  return res.status(200).send(response);
};

/**
 * SIGNUP
 * @param req
 * @param res
 * @returns
 */
export const signup = async (req: Request, res: Response) => {
  const response = await AuthService.signup(req.body);
  return res.status(200).send(response);
};

/**
 * FORGOT PASSWORD
 * @param req
 * @param res
 * @returns
 */
export const forgotPassword = async (req: Request, res: Response) => {
  const response = await AuthService.forgotPassword(req.body);
  return res.status(200).send(response);
};

/**
 * CHANGE PASSOWRD
 * @param req
 * @param res
 * @returns
 */
export const changePassword = async (req: Request, res: Response) => {
  const response = await AuthService.changePassword(req.body);
  return res.status(200).send(response);
};
