import { useState } from 'react'

import * as S from './styles'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Count: <span data-testid="counter-view">{count}</span>
      </h1>
      <S.Button onClick={() => setCount(count + 1)}>Increment</S.Button>
    </div>
  )
}
