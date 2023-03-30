import { useState } from 'react'
import './App.scss'
import Sign from './Models/Sign'
import Tile from './Components/Tile'

function App() {
  const emptyTilesArr: string[] = ['','','','','','','','','']
  const [tiles, setTiles] = useState(emptyTilesArr)
  const [currentSign, setCurrentSign] = useState(Sign.O)
  const [gameEnded, setGameEnded]= useState(false)
  const [winner, setWinner] = useState('')

  const handlePlayAgain = (): void => {
    setTiles(emptyTilesArr)
    setWinner('')
    setGameEnded(false)
  }

  const handleTileClick = (id: number): void => {
    if(tiles[id] === '') {
      tiles[id] = currentSign
      changeCurrentSign()
      setTiles([...tiles])
      

      if(checkWinConditions() ) {
        setWinner(currentSign)
        setGameEnded(true)
      }
      else if(checkDrawConditions()) {
        setGameEnded(true)
      }
    }
  }

  const changeCurrentSign = (): void => {
    if(currentSign === Sign.O) {
      setCurrentSign(Sign.X)
    }
    else {
      setCurrentSign(Sign.O)
    }
  }

  const checkWinConditions = (): boolean => {
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

  const checkDrawConditions = (): boolean => {
    for(let i = 0; i < tiles.length; i++) {
      if(tiles[i] == '') {
        return false
      }
    }

    return true
  }

  return (
    <div className="App">
     {
        gameEnded && 
          <div className="winningModal">
            {
              winner ? <p>Winner is: {winner.toUpperCase()}</p>: <p>Draw</p>
            }
            <button onClick={handlePlayAgain}>Play again</button>
          </div>
      }
      <div className="game">
        <header>
          <p>Current player: {currentSign.toUpperCase()}</p>
        </header>
        <div className="board">
        {
          tiles.map((tile, index) => {
            return <Tile key={index} TileClick={handleTileClick} id={index} content={tiles[index]}/>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App
