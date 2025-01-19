import { Request, Response } from "express";
import DepartmentService from "./departmentService";

/**
 *  Get all Department
 * @param req
 * @param res
 * @returns
 */
export const departmentList = async (req: Request, res: Response) => {
  const response = await DepartmentService.departmentList(req.body);
  return res.status(response?.statusCode??200).send(response);
};



/**
 *  Add new Department
 * @param req
 * @param res
 * @returns
 */

export const addDepartment = async (req: Request, res: Response) => {
  const response = await DepartmentService.addNewDepartment(req.body);
  return res.status(response?.statusCode??200).send(response);

};

/**
 *  Update Department
 * @param req
 * @param res
 * @returns
 */

export const updateDepartment = async (req: Request, res: Response) => {
  const response = await DepartmentService.updateDepartment(req.body);
  return res.status(response?.statusCode??200).send(response);
  
};