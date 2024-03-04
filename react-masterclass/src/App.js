import styled, { keyframes } from 'styled-components'

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.bgColor};
`
const Circle = styled(Box)`
  border-radius: 50px;
`

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: tomato;
`

const animation = keyframes`
  from{
    color:tomato;
  }
  to{
    color:teal;
  }
`

const Btn = styled.button`
  animation: ${animation} 0.5s linear infinite;
`

const Title = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 36px;
  &:hover {
    color: tomato;
  }
`
const Wraper = styled.div`
  display: flex;
  height: 50vh;
  width: 50vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    color: blue;
  }
  background-color: ${props => props.theme.backgroundColor};
`

function App() {
  return (
    <div>
      <Wraper>
        <Box bgColor="tomato"></Box>
        <Circle bgColor="teal"></Circle>
      </Wraper>
      <Wraper>
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
      </Wraper>
      <Wraper>
        <Btn>title</Btn>
      </Wraper>
      <Wraper>
        <Title>title</Title>
      </Wraper>
      <Title as="p">title2</Title>
    </div>
  )
}

export default App
