//using express


const express=require("express");
const app =express();


                // const path=require("path");

                // app.get("/",(req,res)=>{
                //     res.sendFile(path.join(__dirname,"NODE.JS","index.html"));
                // })

                // app.get("/contact",(req,res)=>{
                //     rres.sendFile(path.join(__dirname,"NODE.JS","contact.html"));
                // })



app.use(express.static("view"));   //simply write in express


app.get("*",(req,res)=>{
    res.status(404);
    res.send("<h1>404</h1>");
})


const PORT=process.env.PORT ||  3001;
app.listen(PORT,()=>console.log(`running${PORT}`))