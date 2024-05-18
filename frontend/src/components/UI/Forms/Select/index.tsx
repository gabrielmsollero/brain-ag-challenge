import _Select, { Props as _Props } from 'react-select';

import classes from '../Forms.module.css';

export type Option = {
  label?: string;
  value: any;
};

interface Props extends _Props {
  label: string;
}

export default function Select({ label, ...props }: Props) {
  return (
    <div className={classes.control}>
      <label htmlFor={label}>{label}</label>
      <_Select id={label} {...props} name={label} />
    </div>
  );
}
