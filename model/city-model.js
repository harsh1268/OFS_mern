//cityName
//stateId
const mongoose =require("mongoose")

const CitySchema = new mongoose.Schema({
    cityName:{
        type:String
    },
    state :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"state"
    }
})

const CityModel = mongoose.model("city",CitySchema)

module.exports=CityModel