import { PropsWithChildren } from 'react';

import classes from './Card.module.css';

type Props = PropsWithChildren & {
  title?: string;
};

export default function Card({ title, children }: Props) {
  return (
    <div className={classes.card}>
      {title && <h2 className={classes.title}>{title}</h2>}
      {children}
    </div>
  );
}
