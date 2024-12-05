import mongoose from 'mongoose'

const userschema = new mongoose.Schema({

    username:{
        type:String,
        trim:true,
        required:true
    },

    email:{
        type:String,
        trim:true,
        required:true
    },
    
    password:{
        type:String,
        trim:true,
        required:true
    }
})

const User = mongoose.model('user',userschema)


export default User

