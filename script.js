//set an interval



        // const intervel=setInterval(()=>{
        //     console.log("runnng")
        // },1000)

        // setTimeout(()=>{
        //     clearInterval(intervel)
        // },5000)



//folder creation


        // const path=require('path')
        // const fs=require("fs")
        // fs.mkdir(path.join(__dirname,"/Api/index.html"),{},(err)=>{
        //     if (err) throw err;

        // });




//remove folders

        // const path=require('path')
        // const fs=require("fs")
        // fs.rmdir(path.join(__dirname,"/Api/index.html"),{recursive:true},(err)=>{
        //     if (err) throw err;

        // });

//write a file

        // const path=require('path')
        // const fs=require("fs")
        // fs.writeFile(path.join(__dirname,"/Api","jishnu.txt"),"username:jishnuk",(err)=>{
        //     if (err) throw err;

        // });



        //or


        // const path=require('path')
        // const fs=require("fs")
        // const user="jishnukammath"
        // fs.writeFile(path.join(__dirname,"/Api","jishnu.txt"),`username:${user}`,(err)=>{
        //     if (err) throw err;

        // });

    

//append


            // const path=require('path')
            // const fs=require("fs")
            // const user="albin"
            // fs.appendFile(path.join(__dirname,"/Api","jishnu.txt"),`\n username:${user}`,(err)=>{
            //     if (err) throw err;

            // });


//read file


            // const path=require('path')
            // const fs=require("fs")
            // const user="jishnukammath"
            // fs.readFile(path.join(__dirname,"/Api","jishnu.txt"),"utf8",(err,data)=>{
            //     if (err) throw err;
            //     console.log(data)
            // });








//.......................events...................



const EventEmiter=require("events");
const emitter=new EventEmiter();
emitter.on("massage",(data)=>
{
    console.log(data.text);
});
emitter.on("hai",(data)=>
{
    console.log(data);
});

emitter.emit("massage",{text:"user logged"});  //multiple data  -> {}


emitter.emit("hai","user loggout"); //single data  -> " "
emitter.emit("hai","user went to home page"); 
emitter.emit("hai","user is on terrible"); 





