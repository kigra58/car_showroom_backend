import {Router} from "express";
import { addNewOrgnization, orgnizationList } from "./orgnizationController";

export const orgnizationRoute=Router()


orgnizationRoute.post("/add",addNewOrgnization);
orgnizationRoute.get("/update",orgnizationList);
orgnizationRoute.get("/list",orgnizationList);




