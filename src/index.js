import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


class Game extends React.Component{
    render(){
        return(
            <div className="game">
                <div>
                    <h1>Tic-Tac-Toe</h1>
                    <p>By Bryan Sukidi</p>
                    <Board/>
                </div>
            </div>
        );
    }
}

class Board extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice()
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }

    renderSquare(i){
        return(
            <Square 
                num = {this.state.squares[i]} 
                onClick = {() => this.handleClick(i)}
            />
        )
    }

    render(){
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        return(

            <div>
                <p> Next Player: {status}</p>
                <table> 
                    <tbody className="board">
                        <tr className="first-row">
                            <td>{this.renderSquare(0)}</td>
                            <td>{this.renderSquare(1)}</td>
                            <td>{this.renderSquare(2)}</td>
                        </tr>
                        <tr className="second-row">
                            <td>{this.renderSquare(3)}</td>
                            <td>{this.renderSquare(4)}</td>
                            <td>{this.renderSquare(5)}</td>
                        </tr>
                        <tr className="third-row">
                            <td>{this.renderSquare(6)}</td>
                            <td>{this.renderSquare(7)}</td>
                            <td>{this.renderSquare(8)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.num}
    </button>
  );
}

function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
    }
    return null
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Game/>);
// root.render(<ShoppingList name={my_name} items={my_items}/>);

