import { jsx, css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Attributes, findChartsByLevel, findChartsByVersion, Version } from './data/data';

const ButtonContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const Button = styled.button({
  ':focus': {
    cursor: 'pointer',
  },
  ':hover': {
    cursor: 'pointer',
    backgroundColor: 'lightgray',
  },
  transition: 'background-color .5s',
  fontSize: 16,
  border: '1px solid lightgray',
  borderRadius: 5,
  marginRight: 5,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 10,
  paddingRight: 10,
})

const App: React.FC = () => {
  const [ chart, setChart ] = useState<Attributes | null>(null);

  const onClickVersion = (value: string) => {
    const charts = findChartsByVersion(value as Version);
    const randomInt = Math.floor(Math.random() * charts.length);
    setChart(charts[randomInt]);
  }

  const onClickLevel = (value: number) => {
    const charts = findChartsByLevel(value);
    const randomInt = Math.floor(Math.random() * charts.length);
    setChart(charts[randomInt]);
  }

  return (
    <div>
      <h3>Version</h3>
      <ButtonContainer>
        {Object.values(Version).filter(value => typeof value == 'string').map((value, index) => <Button key={`version_button_${index}`} onClick={(e) => onClickVersion(value)}>{value}</Button>)}
      </ButtonContainer>
      <h3>Level</h3>
      <ButtonContainer>
        {[...Array(12)].map((_, index) => <Button key={`level_button_${index}`} onClick={(e) => onClickLevel(index+1)}>{index+1}</Button>)}
      </ButtonContainer>
      {chart && <div>
        <h4>TITLE</h4>
        <p>{chart.title}</p>
        <h4>LEVEL</h4>
        <p>{chart.chart} {chart.level}</p>
      </div>}
    </div>
  )
}

export default App;
