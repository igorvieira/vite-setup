import { useState } from "react";

import * as S from "./styles";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((count) => count + 1);

  return (
    <div>
      <S.Counter data-testid="counter-view">{count}</S.Counter>
      <S.Button onClick={handleCount}>Click me!</S.Button>
    </div>
  );
};
