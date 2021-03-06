import react, { useEffect, useState } from 'react'
import GameBoard from './Components/GameBoard'
import GameOver from './Components/GameOver'
import game from './game/game'

export default function MemoryGame() {
  const [gameOver, setGameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, [])

  function restart() {
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
  }

  function handleFlip(card) {
    if (game.setCard(card.id)) {
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards()
          if (game.checkGameOver()) {
            setGameOver(true)
          }
        } else {
          setTimeout(() => {
            game.unflipCards()
            setCards([...game.cards])
          }, 1000)
        }
      }
    }
    setCards([...game.cards])
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  )
}
