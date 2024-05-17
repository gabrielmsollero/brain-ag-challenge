import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Button from '../UI/Button';
import Input from '../UI/Forms/Input';
import Select from '../UI/Forms/Select';
import { useUiContext } from '../../contexts/UiContext';

import classes from './AddFarmDialog.module.css';

const newFarmSchema = z.object({
  cpfCnpj: z.string(),
  farmerName: z.string(),
  farmName: z.string(),
  stateId: z.coerce.number(),
  cityId: z.coerce.number(),
  totalArea: z.coerce.number(),
  farmableArea: z.coerce.number(),
  vegetationArea: z.coerce.number(),
  cultures: z.string(),
});

type newFarmSchema = z.infer<typeof newFarmSchema>;

export default function AddFarmDialog() {
  const { isAddFarmModalOpen, setIsAddFarmModalOpen } = useUiContext();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { handleSubmit, control, register } = useForm<newFarmSchema>({
    resolver: zodResolver(newFarmSchema),
  });

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

  const handleAddNewFarm = (data: newFarmSchema) => {
    console.log(data);
  };

  return createPortal(
    <dialog ref={dialogRef} className={classes.modal} onClose={handleClose}>
      <h2>Add new farm</h2>
      <form onSubmit={handleSubmit(handleAddNewFarm)}>
        <Controller
          control={control}
          name="cpfCnpj"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="text"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="CPF ou CNPJ"
            />
          )}
        />
        <Controller
          control={control}
          name="cpfCnpj"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="text"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Nome do produtor"
            />
          )}
        />
        <Controller
          control={control}
          name="cpfCnpj"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="text"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Nome da fazenda"
            />
          )}
        />
        <Controller
          control={control}
          name="stateId"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Estado"
              options={[
                {
                  label: 'Estado A',
                  value: 1,
                },
                {
                  label: 'Estado B',
                  value: 2,
                },
              ]}
            />
          )}
        />
        <Controller
          control={control}
          name="cityId"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Cidade"
              options={[
                {
                  label: 'Cidade 1',
                  value: 1,
                },
                {
                  label: 'Cidade 2',
                  value: 2,
                },
              ]}
            />
          )}
        />
        <Controller
          control={control}
          name="totalArea"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="number"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Área total da fazenda (ha)"
            />
          )}
        />
        <Controller
          control={control}
          name="farmableArea"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="number"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Área agricultável (ha)"
            />
          )}
        />
        <Controller
          control={control}
          name="vegetationArea"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="number"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Área de vegetação (ha)"
            />
          )}
        />
        <Controller
          control={control}
          name="cultures"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="text"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label="Culturas"
            />
          )}
        />

        <p className={classes.modalActions}>
          <Button onClick={() => setIsAddFarmModalOpen(false)} textOnly>
            Close
          </Button>
          <Button type="submit">Add</Button>
        </p>
      </form>
    </dialog>,
    document.getElementById('modal')!
  );
}
