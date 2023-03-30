import { useState } from 'react'

import * as S from './styles'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 data-testid="counter-view">Count: {count}</h1>
      <S.Button onClick={() => setCount(count + 1)}>Increment</S.Button>
    </div>
  )
}
