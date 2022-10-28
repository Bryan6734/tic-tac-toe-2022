import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class ShoppingList extends React.Component{


    render(){

        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Pancakes</li>
                    <li>Pre-Boiled Eggs</li>
                    <li>Peaches</li>
                    <li>Diet Coke</li>
                    <li>{this.props.items}</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;