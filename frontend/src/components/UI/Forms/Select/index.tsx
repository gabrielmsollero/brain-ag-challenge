import classes from '../Forms.module.css';

interface Option {
  label?: string;
  value: any;
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options?: Option[];
}

export default function Select({ label, options = [], ...props }: Props) {
  return (
    <p className={classes.control}>
      <label htmlFor={label}>{label}</label>
      <select defaultValue={''} id={label} name={label} {...props} required>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label ?? value}
          </option>
        ))}
      </select>
    </p>
  );
}
