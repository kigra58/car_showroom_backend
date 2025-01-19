import { Request, Response } from "express";
import OrgnizationService from "./orgnizationService";

/**
 *  orgnzation list
 * @param req
 * @param res
 * @returns
 */
export const orgnizationList = async (req: Request, res: Response) => {
  const response = await OrgnizationService.orgnizationList(req.body);
  return res.status(response?.statusCode??200).send(response);

};


/**
 *  Add New  Orgnization 
 * @param req
 * @param res
 * @returns
 */
export const addNewOrgnization = async (req: Request, res: Response) => {
  const response = await OrgnizationService.addNewOrgnization(req.body);
  return res.status(response?.statusCode??200).send(response);

};


/**
 *  Update Orgnization
 * @param req
 * @param res
 * @returns
 */

export const updateOrgnization = async (req: Request, res: Response) => {
  const response = await OrgnizationService.updateOrgnization(req.body);
  return res.status(response?.statusCode??200).send(response);
};