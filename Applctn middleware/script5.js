//...........application middleware...............


const express=require("express");
const app =express();

app.use(express.static("view")); //call other folder html files


// const Tocken=require("./Tocken");
// const Validation=require("./Validation");

app.use(DateGenerator);


const middleware=[Tocken,Validation]


app.get("/profile",middleware,(req,res)=>{
    res.send("<h1>profile</h1>");
    console.log("user logged")
   
})

app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>");
    console.log("succes")
   
})

function DateGenerator(req,res,next){
console.log(new Date());
next();

}


const PORT=process.env.PORT || 3002;
app.listen(PORT);