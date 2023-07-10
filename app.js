const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash")


// --------------------------------------- Database ------

const conn = mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");



const ItemSchema = {
  name:{
    type: String,
    required: true  }
};

const ListSchema = {
  name: String,
  content: [ItemSchema]
}

const List = mongoose.model("List", ListSchema);


const Item = mongoose.model("Item", ItemSchema);

const firstItem = new Item ({name:"Welcome to your to-do list!"});
const secondItem = new Item ({name:"Hit the + button to add more."});
const thirdItem = new Item ({name:" <--- Hit this to delete an item."});

const defaultItems = [firstItem, secondItem, thirdItem];



// ---------------------------------------------

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.listen(3000, function () { console.log("Server has started on port 3000.");});


// --------------------------------------------------

app.get("/", function (req, res) {
  List.findOne({name:"Home"}).then(function (data) {
    if(!data) {
        homeDocument = new List({name:"Home", content: defaultItems});
        homeDocument.save();
        res.redirect("/");
    } else {
    res.render("list", {dayname:"Home", todolist: data.content })  };});});


app.get("/:dyName", function (req, res) {
  const dyName = _.capitalize(req.params.dyName);
  List.findOne({name:dyName}).then(function (data) {
    if(!data){
      dyNameDocument = new List({name:dyName, content:defaultItems});
      dyNameDocument.save();
      res.redirect("/"+ dyName);
    } else {
      res.render("list", {dayname:dyName, todolist: data.content});}  })});



app.post("/", function (req, res) {
  const newItem = req.body.newItem;
  const button = req.body.button;

  newItemObject = new Item({name:newItem});

  List.findOne({name:button}).then(function (data) {
    data.content.push(newItemObject);
    data.save();
    if (button==="Home"){    res.redirect("/");}
    else {res.redirect("/"+ button)};    });  })

app.post("/delete", function (req, res) {
  const checkbox = req.body.checkbox;
  const listTitle = req.body.hidden;
  console.log(listTitle, checkbox);

  List.findOneAndUpdate({name:listTitle}, {$pull:{content:{_id: checkbox}}}).exec();
  res.redirect("/" + listTitle);
})
