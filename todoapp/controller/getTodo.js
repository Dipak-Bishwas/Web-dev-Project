const Todo = require("../models/Todo")

exports.getTodo = async(req,res) => {
    try {
        const todos = await Todo.find({})

        res.status(200)
        .json({
            sucess:true,
            data:todos,
            message:"Entry todo DAta is fetched"
        }) 
    } catch (err) {
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}

exports.getTodoById = async(req, res) => {
    try {
        const id = req.params.id
        const todo = await Todo.findById(id)

        if(!todo) {
            return res.status(400).json({
                success:false,
                message:"No Data Found woth Given Id",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })

    } catch (err) {
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}   