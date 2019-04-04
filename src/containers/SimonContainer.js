import React from 'react'
import { connect } from 'react-redux'

import GameOverScreen from '../components/GameOverScreen'
import Simon from '../components/Simon'
import { restartGameThunk } from '../redux/modules/game'
import { GameContext } from '../context/Game'
import { useGame } from '../hooks/useGame'

/**
 *
 * @todo Refactor so GameOverScreen uses state from Context.Provider!
 */
const SimonContainer = ({ counter, gameOver, restartGameThunk }) => {
  const victorious = getIsVictorious(counter)

  if (victorious || gameOver) {
    return (
      <GameOverScreen
        close={restartGameThunk}
        victorious={victorious}
        score={counter}
      />
    )
  }

  return (
    <GameContext.Provider value={useGame()}>
      <Simon />
    </GameContext.Provider>
  )
}

function getIsVictorious(counter) {
  return counter === 21
}

const mapStateToProps = state => ({
  gameOver: state.game.gameOver,
  counter: state.game.counter,
})

export default connect(
  mapStateToProps,
  { restartGameThunk }
)(SimonContainer)
