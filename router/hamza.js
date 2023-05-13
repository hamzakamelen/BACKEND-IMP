const express = require("express");
const route = express.Router();



let a=[
    {
        id:01,
        name:"Hamza"
    },{
        id:02,
        name:"Talha"
    },{
        id:03,
        name:"Anas"
    }
]
route.get("/",(req,res)=>{
    // yahan bar bar server band krny ki zrurat nahi y khud krlega handle
    res.send(JSON.stringify(a))
    
})
route.get("/:id",(req,res)=>{
    // yahan bar bar server band krny ki zrurat nahi y khud krlega handle
    // res.send(JSON.stringify(a))
    let id = req.params.id
    let i = a.findIndex((x)=>x.id==id);
    if(i>-1){
        res.send(a[i]).status(200);
    }
    else{
        res.send("No Data Found").status(404);
    }
})
route.post("/",(req,res)=>{
    // res.send(JSON.stringify(req.body))
let { name } = req.body
let errArr = [];
if(!name || name == ""){
    errArr.push("Required Name");
}
if(errArr.length>0){
    res.send(errArr).status(400);
    return;
}else{
    let obj ={
        courses: courses,
        id: a.length + 1
    }
   a.push(obj)
   res.send(obj).status(200)
}
})
route.put("/:id",(req,res)=>{
    let id = req.params.id;
    let {name} = req.body;

    let i = a.findIndex((x)=> x.id == id);
    if(i>-1){
        res.send(a[i]).status(200);
    }else{
        res.send("DAta not Found").status(404)
    }
})
route.delete("/:id", (req, res) => {
    let id = req.params.id;

    let index = a.findIndex((x) => x.id === id);

    if (index > -1) {

        a.splice(index, 1);
        res.send("Data Deleted Successfully").status(200);

    }
    else {
        res.send("Data Not Found on this ID").status(404);
    }

})

module.exports = route;