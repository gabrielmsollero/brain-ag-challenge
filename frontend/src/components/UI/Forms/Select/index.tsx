import _Select, { Props as _Props } from 'react-select';

import classes from '../Forms.module.css';

interface Props extends _Props {
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
