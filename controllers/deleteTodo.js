const Todo = require ("../models/Todo");

exports.deleteTodo = async (req,res)=>{
    try{
      const id = req.params.id;
    //   const {title,description}=req.body
      const todo = await Todo.findByIdAndDelete(
        {_id:id},
        // {title,description}
    );

      res.status(200).json(
        {
            sucess:true,
            data:todo,
            message:"deleted sucessfully"
        }
      )
    }
    catch(err){
      console.error(err);
      console.log(err);
      res.status(500).json(
        {
            sucess:false,
            data:"internal server error",
            message:err.message,
        }
      )
    }
}