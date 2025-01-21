import { Request, Response } from "express";
import EmployeeService from "./employeeService";

/**
 *  Employee List
 * @param req
 * @param res
 * @returns
 */
export const employeeList = async (req: Request, res: Response) => {
  const response = await EmployeeService.employeeList(req.body);
  return res.status(response?.statusCode??200).send(response);
};

/**
 * Add Employee
 * @param req
 * @param res
 * @returns
 */

export const addEmployee = async (req: Request, res: Response) => {
  const response = await EmployeeService.addNewEmployee(req.body);
  return res.status(response?.statusCode??200).send(response);
};


/**
 * Update Employee
 * @param req
 * @param res
 * @returns
 */

export const updateEmployee = async (req: Request, res: Response) => {
  const response = await EmployeeService.updateEmployee(req.body);
  return res.status(response?.statusCode??200).send(response);
};