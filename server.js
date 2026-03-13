import express from 'express'
import receitasRoutes from './src/routes/receitas.route.js'
import cors from 'cors'
import dotenv from 'dotenv'

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB conectado");
})
.catch((err) => {
  console.log("Erro ao conectar:", err);
});


import mongoose from 'mongoose';

const conectarBanco = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Conectado ao MongoDB!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao MongoDB:", error);
    }
};

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB com sucesso!"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/receitas', receitasRoutes)

app.get('/', (req, res) => {
  res.send('API TreinoFit rodando 🚀')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
