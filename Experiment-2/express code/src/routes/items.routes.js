

const express = require("express");
const {listItems,getItemById,createItem,updateItem,deleteItem} = require("../controllers/items.controller");

const router = express.Router();

router.get("/", listItems);        
router.get("/:id", getItemById);   
router.post("/", createItem);      
router.put("/:id", updateItem);    
router.delete("/:id", deleteItem); 

module.exports = router;


  //  Errors :-
  // 1) Error: Route.get() requires a callback function but got a Undefined
  //    because of - Imported controller names don't match exports or wrong path.

 
  // 2) TypeError: Router is not a function