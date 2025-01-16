import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const Auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let userToken = req.headers["auth"] || req.headers["authorization"];
    userToken = `${userToken}`.split(" ")[1];
    const isVerify =  jwt.verify(
      userToken,
      process.env.JWT_SCRET_KEY as string
    );
    if (userToken !== "") {
      if (isVerify) {
        const userId = isVerify;
        console.log("================userid", userId);
      } else {
        res.status(401).send({
          success: false,
          message: "Pleasr correct Token",
        });
      }
    } else {
      res.status(401).send({
        success: false,
        message: "Please provide Token",
      });
    }
  } catch (error) {
    error = {
      success: false,
      message: "Token Expired",
    };
    res.send(error);
  }
};

export default Auth;
