// @flow
import React from 'react'
import styled from 'styled-components'
import Counter from '../components/Counter'
import StartStrict from '../containers/StartStrictContainer'
import OnOffSwitch from '../components/OnOffSwitch'

type Props = {
  power: boolean,
  counter: number,
  strictMode: boolean,
}

type BoxModelProps = {
  hasMargin?: boolean,
  hasPadding?: boolean,
}

const Wrapper = styled.div`
  position: absolute;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  background-color: #ece7ee;
  border: 12px solid #333333;
  width: 220px;
  height: 220px;
  margin: -120px 0 0 -120px;
`

const TopHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  width: 220px;
  height: 110px;
  border-top-left-radius: 220px;
  border-top-right-radius: 220px;
  margin-top: -13px;
`

const BottomHalf = TopHalf.extend`
  flex-direction: column;
  background-color: #ece7ee;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 220px;
  border-bottom-right-radius: 220px;
  margin-top: 0;
`

const Header = styled.span`
  color: #ece7ee;
  font-family: 'Anton', sans-serif;
  font-size: 52px;
  letter-spacing: 2px;
  margin-top: 35px;
  text-transform: capitalize;
`

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const ButtonWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin: 5px;
`

const Label = styled.label`
  font-size: 14px;
  color: #222222;
  margin: ${({ hasMargin }: BoxModelProps): string =>
    hasMargin ? 'auto 5px 0 5px' : '0'};
  padding: ${({ hasPadding }: BoxModelProps): string =>
    hasPadding ? '0 0 5px 0' : '0'};
  text-transform: capitalize;
  text-align: center;
`

const StrictLight = styled.span`
  align-self: center;
  background: ${({ strict }) => (strict ? 'springgreen' : '#222222')};
  border: 2px solid #222222;
  border-radius: 100%;
  height: 8px;
  margin-top: 10px;
  width: 8px;
  transition: background 0.2s linear;
`

export default function CenterConsole({ power, counter, strictMode }: Props) {
  return (
    <Wrapper>
      <TopHalf>
        <Header>{'simon'}</Header>
      </TopHalf>
      <BottomHalf>
        <ButtonsRow>
          <ButtonWrapper>
            <Label hasPadding>{'count'}</Label>
            <Counter />
          </ButtonWrapper>
          <ButtonWrapper>
            <Label hasPadding>{'start'}</Label>
            <StartStrict startButton disabled={!power || counter} />
          </ButtonWrapper>
          <ButtonWrapper>
            <Label hasPadding>{'strict'}</Label>
            <StartStrict startButton={false} disabled={!power} />
          </ButtonWrapper>
          <StrictLight strict={strictMode} />
        </ButtonsRow>
        <ButtonsRow>
          <Label hasMargin>{'off'}</Label>
          <OnOffSwitch />
          <Label hasMargin>{'on'}</Label>
        </ButtonsRow>
      </BottomHalf>
    </Wrapper>
  )
}
