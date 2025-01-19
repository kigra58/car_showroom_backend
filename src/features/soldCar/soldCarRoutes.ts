import {Router} from "express";

export const soldCarRoute=Router()


soldCarRoute.post("/list");
soldCarRoute.post("/add");
soldCarRoute.get("/get/:id");
soldCarRoute.get("/agent/:id");




