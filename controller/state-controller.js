const StateModel = require("../model/state-model")

//db insert state
module.exports.addState =function(req,res){
    console.log(req.body.stateName);

    let state= new StateModel({
        stateName:req.body.stateName
    })
    state.save(function(err,success)
    {
        if(err){
            res.json({msg:"SMW", status:-1, data:req.body})
        }
        else{
            res.json({msg:"State added", status:200, data:success})

        }
    })
}

module.exports.getAllStates = function(req,res){
    StateModel.find(function(err,States){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }else{
            res.json({msg:"States...", status:-1, data:States})
        }
    })
}

module.exports.deleteStates = function(req,res){
    let stateId = req.params.stateId

    StateModel.deleteOne({"_id":stateId},function(err,data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err})
        }else{
            res.json({msg:"States...", status:-1, data:data})
        }
    })
}

//update

module.exports.UpdateState = function(req,res){
    let stateName= req.body.stateName
    let stateId= req.body.stateId
    StateModel.updateOne({_id:stateId},{stateName:stateName}, function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}