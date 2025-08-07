const express = require("express");
const app = express();
const PORT = 80;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello students");
});

app.get("/show/:id",(req,res)=>{
    res.send(`hello, student \n id: ${req.params.id}`);
})

app.post("/store",(req,res)=>{
    res.send(`Successfully stored \n ${req.body.name},${req.body.city}`);
});

app.put("/update/:id",(req,res)=>{
    res.send(`Successfully update \n id:${req.params.id}, Name:${req.body.name}, ${req.body.city}`);
});

app.delete("/delete/:id",(req,res)=>{
    res.send(`Successfully delete \n id:${req.params.id}, Name:${req.body.name}, ${req.body.city}`);
});

app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
});

