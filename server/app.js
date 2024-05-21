import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
import routes from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors({ origin: true }))
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use("/api", routes)

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`DB connected and server started on port ${PORT}`)
    })
}).catch((err) => {
    console.log("failed to connect DB")
})
