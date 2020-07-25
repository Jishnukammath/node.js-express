function Tocken(req,res,next){
    // console.log(req.url);

    console.log("creatig tocken....");
    setInterval(()=>{
        const Tocken="123"
        req.tocken=Tocken;
        next();
    },3000);
                /*no tocken
                req.tocken=fales;
                next();
                */

}
module.exports=Tocken;