import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-green-500 border border-gray-600 h-24 w-24 m-1 leading-9 font-bold text-xl text-white"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [whatNext, setWhatNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Next Player : " + (whatNext ? "X" : "O");
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (whatNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setWhatNext(!whatNext);
  }
  return (
    <>
      <div className="font-bold text-green-600 p-2 text-2xl text-center">
        {status}
      </div>
      <div className=" grid place-content-center">
        <div className="flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>

        <div className="flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>

        <div className="flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
