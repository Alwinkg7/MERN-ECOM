import express from 'express';

import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/database.js';
import ProductRouter from './routes/product.route.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


app.use(express.json()); // this will allow us to parse the incoming data to json in the body of the request



app.use("/api/products", ProductRouter);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/mern-ecom/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'mern-ecom', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log('server started at http://localhost:' + PORT);
});
 
// Compare this snippet from backend/config/database.js: