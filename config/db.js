const mongoose=require('mongoose')
const colors=require('colors')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log(`connected ${mongoose.connection.host}`.bgGreen.white)
    }
    catch(error)
    {
        console.log(`mongo db server issue ${error}`.bgBlack.white)
    }
}
module.exports=connectDB