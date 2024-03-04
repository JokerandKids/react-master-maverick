import styled from 'styled-components'

const Father = styled.div`
  display: flex;
`

const Button = styled.button`
  color: white;
  background: tomato;
  border: 0;
  border-radius: 15px;
`

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`

function App3() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  )
}

export default App3
