import _Select, { Props as _Props } from 'react-select';

import classes from '../Forms.module.css';

export interface Option {
  label?: string;
  value: any;
}

interface Props extends _Props<Option> {
  label: string;
}

export default function Select({ label, ...props }: Props) {
  return (
    <p className={classes.control}>
      <label htmlFor={label}>{label}</label>
      <_Select id={label} {...props} name={label} />
    </p>
  );
}
