export const winConditions:number[][] = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

export const checkWin = (list:number[]):boolean => {
  if (list.length < 3) {
    return false
  }
  for (const condition of winConditions) {
    let allMatches = true;

    for (const condiElem of condition) {
      if (!list.includes(condiElem)) {
        allMatches = false;
        break;
      }
    }

    if (allMatches) {
      console.log("true")
      return true
    }
  }

  return false
}