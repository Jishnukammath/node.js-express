
function Validation(req,res,next){
    if(req.tocken){
      console.log("Tocken Appruved..");
      next();
      return;
    }//use return or write the give code in else  condition
    /*console.log("no tocken");
    res.send("NO AUTH");
    */
  }
  module.exports= Validation;