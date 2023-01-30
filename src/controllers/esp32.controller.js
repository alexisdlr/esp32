import Alarma from "../models/Alarma.js";
export const esp32Controller = async (req, res) => {
  const alarmaI = new Alarma(req.body);

  try {
    const alarma = await alarmaI.save();
    return res.json(alarma);
  } catch (error) {
    console.log(error);
  }
}