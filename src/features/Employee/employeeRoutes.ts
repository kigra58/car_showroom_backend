import {Router} from "express";

export const employeeRoute=Router()


employeeRoute.get("/list");
employeeRoute.post("/add");
employeeRoute.put("/update");




