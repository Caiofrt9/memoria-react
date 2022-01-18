import React, { Fragment } from 'react'

export default function GameOver(props) {
  return props.show ? (
    <div id="gameOver">
      <div>Você completou o jogo</div>
      <button id="restart" onClick={props.handleRestart}>
        jogue novamente
      </button>
    </div>
  ) : (
    <Fragment />
  )
}
