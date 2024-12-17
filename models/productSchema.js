import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true
    },

    brand:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    
    category:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    }
})

const Product = mongoose.model('Product',productSchema)


export default Product

