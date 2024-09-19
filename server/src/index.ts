import express,{Request,Response} from "express"
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./db/index"
 
const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())


import userRouter from './routes/user.route'

app.use('/api/user',userRouter)

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`App listening at port ${port}`)
    })
})
.catch(()=>{
    console.log("Failed to connect to app")
})


