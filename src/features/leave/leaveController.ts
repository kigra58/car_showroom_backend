import { Request, Response } from "express";
import LeaveService from "./leaveService";

/**
 *  get leave balance
 * @param req
 * @param res
 * @returns
 */
export const getLeaveBalance = async (req: Request, res: Response) => {
  const response = await LeaveService.getLeaveBalance(req.body);
  return res.status(200).send(response);
};


/**
 *  Request New Leave
 * @param req
 * @param res
 * @returns
 */
export const requestNewLeave = async (req: Request, res: Response) => {
  const response = await LeaveService.getLeaveBalance(req.body);
  return res.status(response?.statusCode??200).send(response);
};


/**
 *  Get Leave by EmployeeId
 * @param req
 * @param res
 * @returns
 */
export const getLeaveByEmployeeId = async (req: Request, res: Response) => {
  const response = await LeaveService.getLeaveBalance(req.body);
  return res.status(response?.statusCode??200).send(response);
};


/**
 *  Get Leave by EmployeeId
 * @param req
 * @param res
 * @returns
 */
export const getRequestedLeave = async (req: Request, res: Response) => {
  const response = await LeaveService.getLeaveRequested(req.body);
  return res.status(response?.statusCode??200).send(response);
};








