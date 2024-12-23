const { json } = require("express");
const Todo = require ("../models/Todo");

exports.getTodo = async (req,res)=>{
    try{
     

      const todos = await Todo.find({});

      res.status(200).json(
        {
            sucess:true,
            data:todos,
            message:"Entry todo data is featch"
        }
      )
    }
    catch(err){
      console.error(err);
      
      res.status(500).json(
        {
            sucess:false,
            error:err.message,
            message:"server error",
        }
      )
    }
}



exports.getTodoById = async (req,res)=>{
    try{
     
      const id = req.params.id;
      const todo = await Todo.findById({_id:id});

      if (!todo){
        return res.status(404).json({
            sucess:false,
            message:"no data found by given id"
        })
      }

      res.status(200).json(
        {
            sucess:true,
            data:todo,
            message:`todo data ${id} sucessfully fetched`
        }
      )
    }
    catch(err){
      console.error(err);
      
      res.status(500).json(
        {
            sucess:false,
            error:err.message,
            message:"server error",
        }
      )
    }
}