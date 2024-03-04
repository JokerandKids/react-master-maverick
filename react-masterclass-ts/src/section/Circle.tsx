import { useState } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  bgColor: string
  borderColor?: string
}
const Containers = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 100px;
`

interface CircleProps {
  bgColor: string
  borderColor?: string
  text?: string
}
function Circle({ bgColor, borderColor, text = 'default' }: CircleProps) {
  const [counter, setCounter] = useState(0)
  return (
    <Containers bgColor={bgColor} borderColor={borderColor ?? 'white'}>
      {text}
    </Containers>
  )
}

export default Circle
