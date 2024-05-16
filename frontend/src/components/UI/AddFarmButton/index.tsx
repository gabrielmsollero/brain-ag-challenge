import { useUiContext } from '../../../contexts/UiContext';

import classes from './AddFarmButton.module.css';

export default function AddFarmButton() {
  const { setIsAddFarmModalOpen } = useUiContext();

  const handleClick = () => {
    setIsAddFarmModalOpen(true);
  };
  return (
    <button className={classes.addFarmButton} onClick={handleClick}>
      +
    </button>
  );
}
