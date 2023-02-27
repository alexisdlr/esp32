import moment from "moment";
import Alarma from "../models/Alarma.js";
export const esp32Controller = async (req, res) => {
  const alarmaI = new Alarma();
  const {estado} = req.params;
  console.log(estado);
  try {
    alarmaI.estado = estado;
    alarmaI.fecha = moment().locale('es-mx').format('MMMM Do YYYY, h:mm:ss a')
    await alarmaI.save();
    return res.status(200).json({
      msg: 'guardado',
      fecha: alarmaI.fecha
    });
  } catch (error) {
    console.log(error);
  }
}
export const alarmasController = async (req, res) => {
  try {
    const alarmas = await Alarma.find();
    return res.json(alarmas)
  } catch (error) {
    return res.status(400).json(error)
  }
}