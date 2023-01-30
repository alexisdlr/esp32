import Alarma from "../models/Alarma.js";
export const esp32Controller = async (req, res) => {
  const alarmaI = new Alarma();
  const {estado} = req.params;
  console.log(estado);
  try {
    alarmaI.estado = estado;
    await alarmaI.save();
    return res.status(200).json({
      msg: 'guardado'
    });
  } catch (error) {
    console.log(error);
  }
}