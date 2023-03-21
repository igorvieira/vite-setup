import { useState } from "react";

import * as S from "./styles";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <S.Button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </S.Button>
    </div>
  );
};
