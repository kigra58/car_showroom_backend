import {Router} from "express";

export const departmentRoute=Router()


departmentRoute.get("/list");
departmentRoute.post("/add");
departmentRoute.put("/update");




