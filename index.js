const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const router = require('./router/index')
const errorMiddleware = require('./middleware/error-middleware')
const PORT = process.env.PORT || 5000;
const db = "mongodb+srv://ipzk221poo:Caha19092002@cluster0.qnsupix.mongodb.net/react_game?retryWrites=true&w=majority";

const app = express();

app.use(express.json())
app.use(cors());
app.use(router);
app.use(errorMiddleware);

const start = async () =>{
    try{
      await mongoose.connect(db,{
          useNewUrlParser: true,
          useUnifiedTopology: true
      })
        app.listen(PORT, () => console.log("Server start"))
    }catch (e) {
        console.log(e)
    }
}
start()

