function checkDrawConditions(tiles: string[]): boolean {
    for(let i = 0; i < tiles.length; i++) {
      if(tiles[i] == '') {
        return false
      }
    }

    return true
  }

export default checkDrawConditions