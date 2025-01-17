import { Request, Response, NextFunction } from 'express';
import { USER_ROLE } from '../constant';

export const checkUserRole = (allowedRoles: USER_ROLE[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.body?.role; // Assuming req.user is populated with the user's details

    if (!userRole) {
      return res.status(403).json({ message: 'Access denied. No role found.' });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }

    next();
  };
};