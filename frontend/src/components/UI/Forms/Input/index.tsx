import React from 'react';

import classes from '../Forms.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: Props) {
  return (
    <p className={classes.control}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} {...props} />
    </p>
  );
}
