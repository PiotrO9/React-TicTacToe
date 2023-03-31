function checkWinConditions(tiles: string[]): boolean {
    const rowLenght: number = Math.sqrt(tiles.length)

    for(let i = 0; i < rowLenght; i++) {
      let helper = i*3
      if(tiles[0 + helper] == tiles[1 + helper] 
        && tiles[1 + helper] === tiles[2 + helper]
        && tiles[2 + helper] !== '') {
          return true
        }
    }

    for(let i = 0; i < rowLenght; i++) {
      let helper = i*3
      if(tiles[0 + helper] === tiles[3 + helper]
        && tiles[3 + helper] === tiles[6 + helper]
        && tiles[6 + helper] !== '') {
          return true
        }
    }

    if(tiles[0] === tiles[4]
      && tiles[4] === tiles[8]
      && tiles[8] !== '') {
        return true
      }
    
      if(tiles[2] === tiles[4]
        && tiles[4] === tiles[6]
        && tiles[6] !== '') {
          return true
      }

    return false
  }

  export default checkWinConditions