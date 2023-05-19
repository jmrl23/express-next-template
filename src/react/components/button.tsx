'use client';

import { type FC, useState } from 'react';
import style from '@react/styles/button.module.css';

interface Props {
  initCount: number;
}

export const Button: FC<Props> = ({ initCount }) => {
  const [count, setCount] = useState<number>(initCount);

  return (
    <button
      className={style.button}
      type="button"
      role="button"
      tabIndex={0}
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
};
