import classes from './Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textOnly?: boolean;
}

export default function Button({
  children,
  textOnly = false,
  className,
  ...props
}: Props) {
  let cssClasses = textOnly ? classes.textButton : classes.button;
  cssClasses += ' ' + className;

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
}
