import { Request, Response } from "express";
import BookingService from "./bookingService";

/**
 *  Create a new booking
 * @param req
 * @param res
 * @returns
 */
export const newBooking = async (req: Request, res: Response) => {
  const response = await BookingService.newBooking(req.body);
  return res.status(200).send(response);
};


/**
 * Update booking status
 * @param req
 * @param res
 * @returns
 */
export const updateBooking = async (req: Request, res: Response) => {
  const response = await BookingService.updateBooking(req.body);
  return res.status(200).send(response);
};
