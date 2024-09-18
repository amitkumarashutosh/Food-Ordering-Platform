import express,{Request,Response} from "express"
import 'dotenv/config'
import cors from 'cors'
 
const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/test',(req:Request,res:Response)=>{
    res.json({message:"hello world"});
})

app.listen(port,()=>{
    console.log(`App listening at port ${port}`)
})

