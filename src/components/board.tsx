import { useState } from "react";

export const Board = () => {
  const boardNumber: number[] = Array.from(Array(9).keys()).map(x => x);

  type cellStatus = "❌" | "⭕" | "";

  type move = "❌" | "⭕";

  const emptyCell:cellStatus = ""

  const initialCells: cellStatus[] = Array(9).fill(emptyCell)
  const initialRound:move = "❌"

  const [cells, setCells] = useState<cellStatus[]>(initialCells)
  const [thisRound, setThisRound] = useState<move>(initialRound)

  const handleClick = (elem:number) => {
    if (cells[elem] === emptyCell) {
      setCells([...cells.slice(0, elem), thisRound, ...cells.slice(elem + 1)] )
      changeRound()
    } 
  }

  const changeRound = () => {
    if (thisRound === "❌") {
      setThisRound("⭕")
    } else {
      setThisRound("❌")
    }
  }

  return (
    
    <div className="board">
      {boardNumber.map((elem:number) => {
        return (
          <div
            className="cell"
            key={elem}
            onClick={() => handleClick(elem)}
          >
            {cells[elem]}
          </div>
        )
      })}
      <button onClick={()=>setCells(initialCells)}>Reset</button>
    </div>
  )
}