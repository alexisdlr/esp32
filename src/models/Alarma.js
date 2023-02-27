import mongoose from "mongoose";
import moment from 'moment'
const alarmaSchema = mongoose.Schema({
  fecha: {
    type: String,
    required: true,
    default: moment().calendar()
  },
  estado: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const Alarma = mongoose.model('Alarma', alarmaSchema)

export default Alarma