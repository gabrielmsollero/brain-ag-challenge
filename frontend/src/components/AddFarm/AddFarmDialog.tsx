import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useUiContext } from '../../contexts/UiContext';

import AddFarmForm from './AddFarmForm';

import classes from './AddFarm.module.css';

export default function AddFarmDialog() {
  const { isAddFarmModalOpen, setIsAddFarmModalOpen } = useUiContext();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    setIsAddFarmModalOpen(false);
  };

  useEffect(() => {
    const modal = dialogRef.current!;

    if (isAddFarmModalOpen) {
      modal.showModal();
    } else {
      modal.close();
    }

    return () => modal.close();
  }, [isAddFarmModalOpen]);

  return createPortal(
    <dialog ref={dialogRef} className={classes.modal} onClose={handleClose}>
      <div className={classes.header}>
        <h2>Add new farm</h2>
        <button
          className={classes.closeBtn}
          onClick={() => setIsAddFarmModalOpen(false)}
        >
          &times;
        </button>
      </div>
      <AddFarmForm />
    </dialog>,
    document.getElementById('modal')!
  );
}
