import {Router} from "express";

export const selledCarRoute=Router()


selledCarRoute.post("/list");
selledCarRoute.post("/add");
selledCarRoute.get("/get/:id");
selledCarRoute.get("/agent/:id");




