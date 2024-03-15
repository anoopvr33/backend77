import express from "express";
import doctorRoutes from "./doctorRoutes/index.js";
import imageRoutes from "./imageRoutes/index.js";
import departmentRoutes from "./departmentRoutes/index.js";
import userRoutes from "./userRoutes/index.js";
import slotRoutes from "./slotRoutes/index.js";
import appointmentRoutes from "./appointmentRoutes/index.js";
import prescriptionRoutes from "./prescriptionRoutes/index.js";
import pharmacyRoutes from "./pharmacyRoutes/index.js";
import orderRouter from "./orderRoutes/index.js";

const router = express.Router();

router.use("/upload", imageRoutes);
router.use("/doctor", doctorRoutes);
router.use("/department", departmentRoutes);
router.use("/user", userRoutes);
router.use("/slot", slotRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/pharmacy", pharmacyRoutes);
router.use("/prescription", prescriptionRoutes);
router.use("/order", orderRouter);

export default router;
