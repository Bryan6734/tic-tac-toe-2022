import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ShoppingList from "./ShoppingList";


const root = ReactDOM.createRoot(document.getElementById("root"));

let my_name = prompt("What is your name?")
const my_items = [
    "banana",
    "apple",
    "strawberry",
    "mango"
]

root.render(<ShoppingList name={my_name} items={my_items}/>)

