import { Router } from "express";
const router = Router();

//public routes
router.get('/', (req, res) => {
  res.send('HOLA, API DE ARDUINO')
})
// private routes


export default router