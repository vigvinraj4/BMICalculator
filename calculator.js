const express=require("express");

const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));



app.get("/bmicalculator",function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res){
  var value1=Number(req.body.n1);
  var value2=Number(req.body.n2);
  BMI=value1/value2*2.54;
  res.send("Your BMI is " + BMI);
});


app.listen(3000, function(){
  console.log("server started");
})
