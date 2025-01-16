import { Request, Response } from "express";
import BookingService from "./bookingService";

/**
 * LOGIN
 * @param req
 * @param res
 * @returns
 */
export const newBooking = async (req: Request, res: Response) => {
  const response = await BookingService.newBooking(req.body);
  return res.status(200).send(response);
};
