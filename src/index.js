import express from 'express'
import env from 'dotenv'
import siswa_routes from './routes/siswa_routes'
env.config()

const app = express()
const PORT = process.env.PORT

//middleware
app.use(express.json())

//route
app.use(siswa_routes)
// app.get("/", (req, res)=>{
//     res.status(200).json({
//         success :true,
//         message : "Berhasil terhubung ke beckend"
//     })
// })

app.listen(PORT, ()=>{
    console.info("Server berhasil berjalan...")
})