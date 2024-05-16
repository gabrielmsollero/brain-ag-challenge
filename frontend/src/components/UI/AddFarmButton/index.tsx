import classes from './AddFarmButton.module.css';

export default function AddFarmButton() {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <button className={classes.addFarmButton} onClick={handleClick}>
      +
    </button>
  );
}
