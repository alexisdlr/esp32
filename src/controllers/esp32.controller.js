import Alarma from "../models/Alarma.js";
export const esp32Controller = async (req, res) => {
  const alarmaI = new Alarma();
  const {estado} = req.params;
  console.log(estado);
  try {
    alarmaI.estado = estado;
    const alarma = await alarmaI.save();
    return res.json(alarma);
  } catch (error) {
    console.log(error);
  }
}