import classes from './Header.module.css';

export default function Header() {
  return (
    <div className={classes.header}>
      <h1>~Product name~&nbsp;</h1>
      <span>a fullstack challenge by Brain.ag</span>
    </div>
  );
}
