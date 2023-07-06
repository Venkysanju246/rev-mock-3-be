const express = require("express")
const BookModel = require("../model/book.model")

const bookRoute = express.Router()

bookRoute.post("/add", async(req, res)=>{
    const payLoad = req.body 
    const newBook = new BookModel(payLoad)
    await newBook.save()
    res.status(200).send({
        msg:"Book added successfully"
    })
})

bookRoute.get("/get", async(req, res)=>{
    const Books = await BookModel.find()

    res.status(200).send({
        msg:Books
    })
})

bookRoute.delete("/del/:id", async(req, res)=>{
    const id = req.params.id
    const Books = await BookModel.findByIdAndDelete({_id: id})

    res.status(200).send({
        msg:"Book deleted successfully"
    })
})

bookRoute.get("/filtered/:filter", async(req, res)=>{
    const payLoad = req.query.param1
   const filteredData = await BookModel.find({genre: payLoad})
   res.status(200).send({
    msg: filteredData
   })
})

module.exports = bookRoute