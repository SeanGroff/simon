import React from 'react'
import styled from 'styled-components'

import { useGame } from '../hooks/useGame'

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

export default function Counter() {
  const [state] = useGame()
  return (
    <StyledCounter power={state.power}>
      {state.gameOver ? 'X' : state.counter || '--'}
    </StyledCounter>
  )
}
