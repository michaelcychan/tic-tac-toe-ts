import { useEffect, useState } from "react";
import {checkWin} from "./winCondition"

export const Board = () => {
  const boardNumber: number[] = Array.from(Array(9).keys()).map(x => x);

  type cellStatus = "❌" | "⭕" | "";

  type move = "❌" | "⭕" | "";

  const emptyCell:cellStatus = ""

  const initialCells: cellStatus[] = Array(9).fill(emptyCell)
  const initialRound:move = "❌"

  const [cells, setCells] = useState<cellStatus[]>(initialCells)
  const [thisRound, setThisRound] = useState<move>(initialRound)

  const [crossList, setCrossList] = useState<number[]>([]);
  const [circleList, setCircleList] = useState<number[]>([]);

  const handleClick = (elem:number) => {
    if (cells[elem] === emptyCell) {
      setCells([...cells.slice(0, elem), thisRound, ...cells.slice(elem + 1)] )
      if (thisRound === "❌") {
        setCrossList([...crossList,elem].sort())
      } else if (thisRound === "⭕"){
        setCircleList([...circleList, elem].sort())
      }
      changeRound()
    } 
  }
  
  const handleReset = () => {
    setCells(initialCells);
    setCircleList([]);
    setCrossList([]);
    setThisRound("❌")
  }

  const changeRound = () => {
    if (thisRound === "❌") {
      setThisRound("⭕")
    } else if (thisRound === "⭕"){
      setThisRound("❌")
    }
  }

  useEffect(()=> {
    if (checkWin(circleList)) {
      alert("⭕ wins!")
      setThisRound("")
    }
    if (checkWin(crossList)) {
      alert("❌ wins!")
      setThisRound("")
    }
  },[circleList, crossList])

  useEffect(() => {
    if (!cells.includes("") && !checkWin(circleList) && !checkWin(crossList)) {
      alert("It is a tie!")
    }
  },[cells])

  return (
    <div className="board-container">
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
      </div>
      <div className="button-container">
        <button onClick={handleReset}>Reset Board</button>
      </div>
    </div>
    
  )
}