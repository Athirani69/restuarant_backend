const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()
const ResRoute=require("./controller/resRouter")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Athirani26:athirani69@cluster0.w4km12l.mongodb.net/RestuarantDb?retryWrites=true&w=majority", 
{
  useNewUrlParser:true
}
)

app.use("/api/restuarant",ResRoute)


app.listen(3001,()=>{
    console.log("run")
})