const express = require("express");
const app = express();
const bodyParser =require("body-parser");
const connection = require("./database/database");


const Plate = require("./plates/Plate");
const Category = require("./categories/Category");

const categoriesController = require("./categories/CategoriesController");


//View engine
app.set("view engine", "ejs");

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Static
app.use(express.static("public"));

//Database
connection.authenticate().then(() => {
        console.log("Conexão feita com sucesso.");
    }).catch((error) => {
        console.log(error);
    });

app.use("/", categoriesController);

//Routes
app.get("/", (req, res) => {
    res.render("index");
});







//Porta
app.listen(8082, () => {
    console.log("O servidor está rodando.")
});