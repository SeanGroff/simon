// @flow
import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import StartStrictButton from './StartStrictButton';
import OnOffSwitch from './OnOffSwitch';

type Props = {
  hasMargin?: boolean,
  hasPadding?: boolean,
  powerOnOffAction(): { type: string, payload: boolean },
  startGameAction(): { type: string },
  power: boolean,
  counter: number,
};

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
`;

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
`;

const BottomHalf = TopHalf.extend`
  flex-direction: column;
  background-color: #ece7ee;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 220px;
  border-bottom-right-radius: 220px;
  margin-top: 0;
`;

const Header = styled.span`
  color: #ece7ee;
  font-family: 'Anton', sans-serif;
  font-size: 52px;
  letter-spacing: 2px;
  margin-top: 35px;
  text-transform: capitalize;
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #222222;
  margin: ${(props: Props) => (props.hasMargin ? 'auto 5px 0 5px' : '0')};
  padding: ${(props: Props) => (props.hasPadding ? '0 0 5px 0' : '0')};
  text-transform: capitalize;
  text-align: center;
`;

export default (props: Props) =>
  <Wrapper>
    <TopHalf>
      <Header>
        {'simon'}
      </Header>
    </TopHalf>
    <BottomHalf>
      <ButtonsRow>
        <ButtonWrapper>
          <Label hasPadding>
            {'count'}
          </Label>
          <Counter count={props.counter} on={props.power} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Label hasPadding>
            {'start'}
          </Label>
          <StartStrictButton
            startButton
            disabled={props.counter}
            power={props.power}
            startGame={props.startGameAction}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Label hasPadding>
            {'strict'}
          </Label>
          <StartStrictButton startButton={false} power={props.power} />
        </ButtonWrapper>
      </ButtonsRow>
      <ButtonsRow>
        <Label hasMargin>
          {'off'}
        </Label>
        <OnOffSwitch power={props.power} powerOnOff={props.powerOnOffAction} />
        <Label hasMargin>
          {'on'}
        </Label>
      </ButtonsRow>
    </BottomHalf>
  </Wrapper>;
