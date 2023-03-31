import { useState } from 'react'
import './App.scss'
import Sign from './Models/Sign'
import Tile from './Components/Tile'
import checkDrawConditions from './utils/checkDrawConditions'
import checkWinConditions from './utils/checkWinConditions'

function App() {
  const emptyTilesArr: string[] = ['','','','','','','','','']
  const [tiles, setTiles] = useState<string[]>(emptyTilesArr)
  const [currentSign, setCurrentSign] = useState<Sign>(Sign.O)
  const [gameEnded, setGameEnded]= useState<boolean>(false)
  const [winner, setWinner] = useState<string>('')

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

      if(checkWinConditions(tiles) ) {
        setWinner(currentSign)
        setGameEnded(true)
      }
      else if(checkDrawConditions(tiles)) {
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
