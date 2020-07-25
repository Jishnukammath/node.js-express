//...........middleware...............


const express=require("express");
const app =express();

app.use(express.static("view"));//call other folder html files


const Tocken=require("./Tocken");
const Validation=require("./Validation");


const middleware=[Tocken,Validation]



app.get("/profile",middleware,(req,res)=>{
    res.send("succes");
    console.log("user logged")
   
})



const PORT=process.env.PORT || 3005;
app.listen(PORT);