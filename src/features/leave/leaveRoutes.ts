import {Router} from "express";

export const leaveRoute=Router()


leaveRoute.post("/list");
leaveRoute.get("/request/:id");
leaveRoute.post("/request");
leaveRoute.put("/cancel");
leaveRoute.get("/balance/:id");




