import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`DB is connected! ${connection.host}`)
    } catch (error) {
        console.log(`Database connection failed!! ${error}`)
        process.exit(1)
    }
}

export default connectDB