import express from 'express';
import gamesRoutes from "./routes/games.routes";
import cors from 'cors'

const app = express();
app.use(express.json())


app.use(cors()) // Use this after the variable declaration

app.use('/src', gamesRoutes);

app.listen(3001)
console.log("Server port", 3001)