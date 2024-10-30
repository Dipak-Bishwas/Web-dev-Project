const express = require("express")
const cors = require("cors")
require('./config/database')
const User = require("./config/User")
const Products = require("./config/Product")
const jwt = require('jsonwebtoken')
const jwtKey = 'e-comm'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 5000;

app.post("/register", async (req, resp) => {
    let user = new User(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password
    jwt.sign({result}, jwtKey, { expiresIn:"2h" }, (err, token)=>{
        if(err){
            resp.send({ result: 'something went wrong, Please try after sometime' })
        }
        resp.send({result, auth: token})
    })
})

app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            jwt.sign({user}, jwtKey, { expiresIn:"2h" }, (err, token)=>{
                if(err){
                    resp.send({ result: 'something went wrong, Please try after sometime' })
                }
                resp.send({user, auth: token})
            })
        } else {  
            resp.send({ result: 'No User Found' })
        }
    } else {
        resp.send({ result: 'No User Found' })
    }

})

app.post("/add-product",async (req, resp)=>{
    let product = new Products(req.body)
    let result = await product.save()
    resp.send(result)
})

app.get("/products", async (req, resp)=>{
    let products = await Products.find()
    if(products.length>0){
        resp.send(products)
    }else{
        resp.send({result:"No Products found"})
    }
})

app.delete("/product/:id", async (req,resp)=>{
    const result = await Products.deleteOne({_id:req.params.id})
    resp.send(result)
})

app.get("/product/:id", async (req, resp)=>{
    let result = await Products.findOne({_id:req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({reslut:"No Record Found"})
    }
})

app.put("/product/:id", async (req, resp)=>{
    let result = await Products.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
})

app.get("/search/:key", async (req,resp)=>{
    let result = await Products.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {compay:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    })
    resp.send(result)
})
    
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });