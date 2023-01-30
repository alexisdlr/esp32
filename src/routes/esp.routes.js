import { Router } from "express";
import { esp32Controller } from "../controllers/esp32.controller.js";
const router = Router();

//public routes
router.post('/', esp32Controller)
// private routes


export default router