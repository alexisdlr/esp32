import express from 'express'
import espRoutes from './routes/esp.routes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
const app = express()
const PORT = process.env.PORT || 8800
dotenv.config()

connectDB();

app.use(express.json())
app.use('/api/esp32', espRoutes)

app.listen(PORT, () => {
  console.log('I been bollin up boy but aint nun major')
})