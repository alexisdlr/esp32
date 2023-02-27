import express from 'express'
import espRoutes from './routes/esp.routes.js'
import indexRoutes from './routes/index.routes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
const app = express()
const PORT = process.env.PORT || 8800
dotenv.config()

connectDB();

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/api', espRoutes)
app.use('/', indexRoutes)

app.listen(PORT, () => {
  console.log('I been bollin up boy but aint nun major')
})