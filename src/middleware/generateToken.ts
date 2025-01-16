import jwt from "jsonwebtoken";

export const generateToken = (id: string, email: string): string => {
  const userData = { id, email };
  const expireTime = {
    expiresIn: 60,
  };
  const getToken = jwt.sign(
    userData,
    `${process.env.JWT_SCRET_KEY}`,
    expireTime
  );
  return getToken;
};
