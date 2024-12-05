
import mongoose from  'mongoose'
const connectDB = async() =>{
    try{
        const {connection} = await mongoose.connect('mongodb://localhost:27017/adoree');
        console.log(`Db runniung ${connection.host}`)
    } catch(error){
        console.log(error.message)
    }
    }
export default connectDB