import styled, { keyframes } from 'styled-components'
const Wraper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`

const Emoji = styled.span`
  font-size: 36px;
`

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    //마우스 올려놓은 상태
    font-size: 50px;
  }
`
function App4() {
  return (
    <Wraper>
      <Box>
        <Emoji as="p">😃</Emoji>
      </Box>
      <Emoji as="span">😃</Emoji>
    </Wraper>
  )
}

export default App4
