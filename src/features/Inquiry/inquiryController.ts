import { Request, Response } from "express";
import BookingService from "./inquiryService";

/**
 *  Create a new Inquiry
 * @param req
 * @param res
 * @returns
 */
export const newInquiry = async (req: Request, res: Response) => {
  const response = await BookingService.newInquiry(req.body);
  return res.status(response?.statusCode??200).send(response);

};



