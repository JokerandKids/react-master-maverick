import styled from 'styled-components'

const Father = styled.div`
  display: flex;
`

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`

const Circle = styled(Box)`
  border-radius: 50px;
`
function App2() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      <Circle bgColor="whitesmoke"></Circle>
    </Father>
  )
}

export default App2
