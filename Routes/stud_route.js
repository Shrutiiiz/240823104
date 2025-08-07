const express = require("express");
const Router = express.Router();
const stud_controller = require("../Controller/stud_controller");

Router.get("/index", stud_controller.index); 
Router.get("/show/:id", stud_controller.show); //stud/show/101 
Router.get("/store", stud_controller.store);
Router.get("/update/:id", stud_controller.update);
Router.get("/delete/:id", stud_controller.delete);

module.exports = Router;