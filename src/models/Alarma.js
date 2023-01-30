import mongoose from "mongoose";

const alarmaSchema = mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
    default: Date.now()
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