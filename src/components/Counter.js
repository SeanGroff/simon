import React from 'react'
import styled from 'styled-components'

import { GameContext } from '../context/Game'

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #222222;
  background-color: #32050c;
  font-size: 32px;
  border-radius: 10px;
  width: 50px;
  color: ${({ power }) => (power ? '#DC0D29' : '#430710')};
`

const Counter = () => {
  const [{ counter, gameOver, power }] = React.useContext(GameContext)
  return (
    <StyledCounter power={power}>
      {gameOver ? 'X' : counter || '--'}
    </StyledCounter>
  )
}

export default Counter
