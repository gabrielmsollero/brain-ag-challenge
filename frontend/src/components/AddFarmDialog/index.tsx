import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useUiContext } from '../../contexts/UiContext';

import classes from './AddFarmDialog.module.css';

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
    }

    return () => modal.close();
  }, [isAddFarmModalOpen]);

  return createPortal(
    <dialog ref={dialogRef} className={classes.modal} onClose={handleClose}>
      Test
    </dialog>,
    document.getElementById('modal')!
  );
}
