import {Router} from "express";
import {authRoute} from "./features/Auth/authRoute"
import { bookingRoute } from "./features/Booking/bookingRoutes";

export const router= Router();

router.use("/auth",authRoute);
router.use("/new-booking",bookingRoute);