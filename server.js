// Node JS k basic Concepts


// console.log("Hello World") //node server.js (for run)

const fs= require('fs')

// ====== Read DIrectory === 
// fs.readdir('./',(err,dir)=>{
//     console.log(dir)
// })

// === Read File =====
// fs.readFile('./abc.txt',"utf-8",(err,file)=>{
//     console.log(file)
// })

// ===== WRite File ======
// fs.writeFile('./abc.txt',"Hamza Kamelen here",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Write Done")
//     }
// })

// ====== Append File=====
// fs.appendFile('./abc.txt',"\n New Text from Hamza",(err)=>{
//     if(err){
//                 console.log(err)
//             }else{
//                 console.log(" Appended Done")
//             }
// })

// const http = require('http')
// const server = http.createServer((req,res)=>{
    // console.log("CHal gya")
    // console.log("Url",req.url)
    // if(req.url=="/hamzakamelen"){
    //     res.write(JSON.stringify(a))
    // }else if(req.url=="/hamza"){
    //     res.write(JSON.stringify(a))
    // }
    // -------------------------------
    
//     if(req.url=="/hamzakamelen"){
//         if(req.method=="GET"){
//             res.write(JSON.stringify(a))
//         } else if(req.method=="POST"){
//             res.write(JSON.stringify(req.body))
//         }
//     }
//     res.end()
// })
// server.listen(5000);

//Postman download krna h usmain humn sari API test krskty h
//Thunder Client in VS Extension

// ---------------- Ye Sab Node ka tha ab hum express krengy-----------------------------

// for middle ware
//npm init
// enter krty rhna
// npm i express
// npm start

const express = require("express")
require("dotenv").config();
const cors = require("cors")
const app = express()
// Middle ware
app.use(express.json());
app.use(cors());
// ------------------



// app.get("/hamza",(req,res)=>{
//     // yahan bar bar server band krny ki zrurat nahi y khud krlega handle
//     res.send(JSON.stringify(a))
    
// })
// app.get("/hamza/:id",(req,res)=>{
//     // yahan bar bar server band krny ki zrurat nahi y khud krlega handle
//     // res.send(JSON.stringify(a))
//     let id = req.params.id
//     let i = a.findIndex((x)=>x.id==id);
//     if(i>-1){
//         res.send(a[i]).status(200);
//     }
//     else{
//         res.send("No Data Found").status(404);
//     }
// })
// app.post("/hamza",(req,res)=>{
//     // res.send(JSON.stringify(req.body))
// let { name } = req.body
// let errArr = [];
// if(!name || name == ""){
//     errArr.push("Required Name");
// }
// if(errArr.length>0){
//     res.send(errArr).status(400);
//     return;
// }else{
//     res.send("Data not Found").status(404)
// }
// })
// app.put("/hamza/:id",(req,res)=>{
//     let id = req.params.id;
//     let {name} = req.body;

//     let i = a.findIndex((x)=> x.id == id);
//     if(i>-1){
//         res.send(a[i]).status(200);
//     }else{
//         res.send("DAta not Found").status(404)
//     }
// })
// app.delete("/hamza",(req,res)=>{})
const courseRoute = require("./router/hamza")

app.use("/api/hamza",courseRoute);


app.listen(process.env.PORT)

// app.listen(7000)

//npm i -g nodemon
//npm run dev
//npm i dotenv