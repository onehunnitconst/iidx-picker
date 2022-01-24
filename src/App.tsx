import { jsx, css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Attributes, findChartsByFirstLetter, findChartsByLevel, findChartsByTitle, findChartsByVersion, FirstLetter, searchChartsByTitle, Version } from './data/data';

const Padding = styled.div({
  width: '100%',
  height: 10,
})

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Noto Sans KR'
});

const HeaderContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 120,
  backgroundColor: 'lightblue',
  fontSize: 48,
  fontWeight: 600,
  '@media (max-width: 767px)': {
    height: 80,
    fontSize: 24,
    fontWeight: 600,
  }
})

const ButtonContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const ButtonContainerWeb = styled.div({
  '@media (max-width: 767px)': {
    display: 'none'
  }
})

const ButtonContainerMobile = styled.div({
  '@media (min-width: 767px)': {
    display: 'none'
  }
})

const Button = styled.button({
  ':focus': {
    cursor: 'pointer',
  },
  ':hover': {
    cursor: 'pointer',
    backgroundColor: 'lightgray',
  },
  '@media (max-width: 767px)': {
    width: 80,
    fontSize: 14,
  },
  backgroundColor: 'white',
  transition: 'background-color .5s',
  width: 90,
  fontWeight: 600,
  fontSize: 16,
  border: '1px solid lightgray',
  borderRadius: 5,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
})

const ChartContainer = styled.div({
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f4f4f4',
  paddingLeft: 10,
  paddingRight: 10,
  width: '100%',
  height: 300,
  maxHeight: 400,
});

const FooterContainer = styled.div({
  marginTop: 50,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  '@media (max-width: 767px)': {
    marginTop: 30,
    width: 350
  }
});

const TitleText = styled.p({
  fontSize: 28,
  fontWeight: 700,
  '@media (max-width: 767px)': {
    fontSize: 28,
  },
})

const SubText = styled.p({
  fontSize: 16,
  fontWeight: 300,
  color: '#7F7F7F'
})

const InfoText = styled.p({
  fontSize: 20,
  fontWeight: 400,
  color: '#0F0F0F',
})

const HeaderText = styled.p({
  fontSize: 28,
  fontWeight: 700,
  '@media (max-width: 767px)': {
    display: 'none'
  }
})

const HeaderTextMobileGroup = styled.div({
  marginTop: 10,
  marginBotton: 20,
  '@media (min-width: 767px)': {
    display: 'none'
  }
})

const HeaderTextMobile = styled.button({
  ':focus': {
    cursor: 'pointer',
  },
  ':hover': {
    cursor: 'pointer',
    color: 'darkgray',
  },
  transition: 'color .3s',
  border: 0,
  background: 0,
  fontSize: 18,
  fontWeight: 600,
})

const Input = styled.input({
  border: '1px solid lightgray',
  padding: ['10px', '10px', '10px', '10px'],
  borderRadius: 20,
  width: '16em',
  fontSize: 16,
  marginTop: 10,
});

const SearchButton = styled.button({
  ':focus': {
    cursor: 'pointer',
  },
  ':hover': {
    cursor: 'pointer',
  },
  border: 0,
  background: 'none',
  marginLeft: 5,
  marginTop: 10,
  borderRadius: 10,
  fontSize: 16,
  padding: ['10px', '10px', '5px', '10px'],
});

const App: React.FC = () => {

  const [ inputText, setInputText ] = useState('');

  const [ chart, setChart ] = useState<Attributes | null>(null);

  const [ visible, setVisible ] = useState(0);
  
  const onChangeInput = (element: React.ChangeEvent<HTMLInputElement>) => setInputText(element.target.value);

  const onClickSearchButton = () => {
    const charts = searchChartsByTitle(inputText);
    const randomInt = Math.floor(Math.random() * charts.length);
    setChart(charts[randomInt]);
  }

  const onKeyPress = (element: React.KeyboardEvent<HTMLInputElement>) => {
    if (element.key == 'Enter') {
      const charts = searchChartsByTitle(inputText);
      const randomInt = Math.floor(Math.random() * charts.length);
      setChart(charts[randomInt]);
    }
  };

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

  const onClickFirstLetter = (value: string) => {
    const charts = findChartsByFirstLetter(value as FirstLetter);
    const randomInt = Math.floor(Math.random() * charts.length);
    setChart(charts[randomInt]);
  }

  const ButtonComponents = Object.values(Version).filter(value => typeof value == 'string').map((value, index) => <Button key={`version_button_${index}`} onClick={(e) => onClickVersion(value)}>{value}</Button>)

  const LevelComponents = [...Array(12)].map((_, index) => <Button key={`level_button_${index}`} onClick={(e) => onClickLevel(index+1)}>{index+1}</Button>)

  const FirstLetterComponents = Object.values(FirstLetter).filter(value => typeof value == 'string').map((value, index) => <Button key={`version_button_${index}`} onClick={(e) => onClickFirstLetter(value)}>{value}</Button>)

  return (
    <Container>
      <HeaderContainer>
        <p>beatmania IIDX 랜덤 선곡</p>
      </HeaderContainer>
      <ChartContainer>
        {chart ? <div>
          <SubText>{chart.genre}</SubText>
          <TitleText>{chart.title}</TitleText>
          <InfoText>{chart.artist}</InfoText>
          <InfoText><b>{chart.chart}</b> Lv.{chart.level} {chart.notes} NOTES</InfoText>
        </div>: <div><p>버튼을 눌러주세요!</p></div>}
      </ChartContainer>
      <HeaderTextMobileGroup>
        <HeaderTextMobile onClick={() => setVisible(0)}>버전</HeaderTextMobile>
        <HeaderTextMobile onClick={() => setVisible(1)}>레벨</HeaderTextMobile>
        <HeaderTextMobile onClick={() => setVisible(2)}>제목</HeaderTextMobile>
        <HeaderTextMobile onClick={() => setVisible(3)}>검색</HeaderTextMobile>
      </HeaderTextMobileGroup>
      <HeaderText>검색으로 뽑기</HeaderText>
      <ButtonContainerWeb>
        <Input onChange={onChangeInput} onKeyPress={onKeyPress} placeholder='검색어를 입력해주세요' value={inputText} />
        <SearchButton onClick={onClickSearchButton} >검색</SearchButton>
      </ButtonContainerWeb>

      {(visible == 3) && <ButtonContainerMobile>
        <Input onChange={onChangeInput} onKeyPress={onKeyPress} placeholder='검색어를 입력해주세요' value={inputText} />
        <SearchButton onClick={onClickSearchButton} >검색</SearchButton>
      </ButtonContainerMobile>}
      <Padding />
      <HeaderText>버전으로 뽑기</HeaderText>
      <ButtonContainerWeb>
        <ButtonContainer>{ButtonComponents.slice(0, 6)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(6, 12)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(12, 18)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(18, 24)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(24, ButtonComponents.length)}</ButtonContainer>
      </ButtonContainerWeb>
      {(visible == 0) && <ButtonContainerMobile>
        <ButtonContainer>{ButtonComponents.slice(0, 4)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(4, 8)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(8, 12)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(12, 16)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(16, 20)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(20, 24)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(24, 28)}</ButtonContainer>
        <ButtonContainer>{ButtonComponents.slice(28, ButtonComponents.length)}</ButtonContainer>
      </ButtonContainerMobile>}
      <HeaderText>레벨로 뽑기</HeaderText>
      <ButtonContainerWeb>
        <ButtonContainer>{LevelComponents.slice(0, 6)}</ButtonContainer>
        <ButtonContainer>{LevelComponents.slice(6, 12)}</ButtonContainer>
      </ButtonContainerWeb>
      {(visible == 1) && <ButtonContainerMobile>
        <ButtonContainer>{LevelComponents.slice(0, 4)}</ButtonContainer>
        <ButtonContainer>{LevelComponents.slice(4, 8)}</ButtonContainer>
        <ButtonContainer>{LevelComponents.slice(8, 12)}</ButtonContainer>
      </ButtonContainerMobile>}
      <HeaderText>제목으로 뽑기</HeaderText>
      <ButtonContainerWeb>
        <ButtonContainer>{FirstLetterComponents.slice(0, 6)}</ButtonContainer>
        <ButtonContainer>{FirstLetterComponents.slice(6, FirstLetterComponents.length)}</ButtonContainer>
      </ButtonContainerWeb>
      {(visible == 2) && <ButtonContainerMobile>
        <ButtonContainer>{FirstLetterComponents.slice(0, 4)}</ButtonContainer>
        <ButtonContainer>{FirstLetterComponents.slice(4, FirstLetterComponents.length)}</ButtonContainer>
      </ButtonContainerMobile>}
      <FooterContainer>
        <p>
          <b>❗️현재는 싱글 플레이 차트만 정상 작동합니다.</b> <br />
          repository: GitHub <a href='https://github.com/onehunnitconst/iidx-picker'>onehunnitconst/iidx-picker</a> <br />
          contact: Twitter <a href='https://twitter.com/thisiswalewalu'>@thisiswalewalu</a>
        </p>
      </FooterContainer>
    </Container>
  )
}

export default App;
