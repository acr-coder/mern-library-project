const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore = require("./models/BookModel")


app.use(bodyParser.json());
app.use(cors());

// mongoose

mongoose.connect("mongodb+srv://tester:tester12345@cluster0.mrqgd.mongodb.net/books?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

// const bookSchema = {
//     bookName: String,
//     author:String,
//     quantity:Number,
//     department:String,
//     comments:String,
    
// }

//const BookStore = mongoose.model("BookStore", bookSchema);

// API routes

app.get('/books', (req,res) => {
    BookStore.find().then(books => res.json(books));
})

app.post('/newbook', async (req,res) => {
    try{
        const newBook = new BookStore({
            bookName:req.body.bookName,
            author:req.body.author,
            quantity:req.body.quantity,
            department:req.body.department,
            comments:req.body.comments,
            

        })
        const book = await newBook.save();
        res.status(200).json(book)
    }catch(err){
        res.status(500).json(err)
    }
    
})

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    BookStore.findByIdAndDelete({_id: id}, (err) => {
        if(!err) {
            console.log("book deleted");
        }else{
            console.log(err);
        }
    })
});

app.put('/lend/:id', async (req,res) => {
    try{
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{ quantity: -1 }})
    }catch(err){
        console.log(err);
    }
})

app.put('/back/:id', async (req,res) => {
    try{
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{ quantity: 1 }})
    }catch(err){
        console.log(err);
    }
})





app.listen(5000, () => {
    console.log("server is running");
})
