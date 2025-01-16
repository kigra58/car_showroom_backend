import  { Request, Response, NextFunction } from "express";
import {  AnyZodObject, ZodError, ZodOptional, } from "zod";



export const validate =
  (schema: AnyZodObject | ZodOptional<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      let err = error;
      if (err instanceof ZodError) {
        err = err.issues.map((e) => ({ path: e.path[0], message: e.message }));
      }
      return res.status(409).json({
        status: 'failed',
        error: err,
      });
    }
  };