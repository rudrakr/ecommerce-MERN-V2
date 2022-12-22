import express from "express";
import data from "./data.js";

const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get("/products", (req, res) => {
  res.send(data.products);
});

app.get("/product/:slug", (req, res) => {
  console.log(req.params);
  const product = data.products.find(obj => obj.slug === req.params.slug);
  if(product){
    res.send(product);
  } else {
    res.status(404).json({err:"Product Not found"})
  }
});

const port  = process.env.port | 5000 ;

app.listen(port , ()=>{
    console.log(`Listening at port : ${port}`);
})