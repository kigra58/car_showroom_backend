import { Request, Response } from "express";
import CarServce from "./carService";

/**
 *  Create a new Inquiry
 * @param req
 * @param res
 * @returns
 */
export const carList = async (req: Request, res: Response) => {
  const response = await CarServce.carList(req.body);
  return res.status(200).send(response);
};



