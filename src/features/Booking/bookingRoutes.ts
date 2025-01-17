import {Router} from "express";

export const bookingRoute=Router();

bookingRoute.post("/new-booking");

bookingRoute.put("/update-booking");


