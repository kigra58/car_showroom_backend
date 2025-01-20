import { Request, Response } from "express";
import CarServce from "./leaveService";

/**
 *  Create a new Inquiry
 * @param req
 * @param res
 * @returns
 */
export const getLeaveBalance = async (req: Request, res: Response) => {
  const response = await CarServce.getLeaveBalance(req.body);
  return res.status(200).send(response);
};



