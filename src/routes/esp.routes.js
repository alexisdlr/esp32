import { Router } from "express";
import { alarmasController, esp32Controller } from "../controllers/esp32.controller.js";
const router = Router();

//public routes
router.get('/estado/:estado', esp32Controller)
router.get('/alarmas/', alarmasController)

// private routes


export default router