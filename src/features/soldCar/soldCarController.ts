import { Request, Response } from "express";
import SoldCarService from "./soldCarService";

/**
 *  Add new sold car
 * @param req
 * @param res
 * @returns
 */
export const addNew = async (req: Request, res: Response) => {
  const response = await SoldCarService.addNew(req.body);
  return res.status(response?.statusCode??200).send(response);
};

/**
 * Get all sold cars
 * @param req
 * @param res
 * @returns
 */
export const getAllSoldCars = async (req: Request, res: Response) => {
  const response = await SoldCarService.getAllSelledCars();
  return res.status(200).send(response);
};

/**
 * Get sold car by id
 * @param req
 * @param res
 * @returns
 */

export const getSoldCarById = async (req: Request, res: Response) => {
  const response = await SoldCarService.getSelledCarById(req.params.id);
  return res.status(response?.statusCode??200).send(response);
};

/**
 * sold car by agent
 * @param req
 * @param res
 * @returns
 */
export const getSoldCarByAgent = async (req: Request, res: Response) => {
  const response = await SoldCarService.getCarByAgentId(req.params.id);
  return res.status(response?.statusCode??200).send(response);

};