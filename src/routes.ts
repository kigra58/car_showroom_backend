import {Router} from "express";
import { authRoutes } from "./features/Auth/authRoutes";

export const router= Router();

router.use("/auth",authRoutes);
router.use("/booking",authRoutes);