import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Select from '../UI/Forms/Select';
import Button from '../UI/Button';
import Input from '../UI/Forms/Input';
import { useUiContext } from '../../contexts/UiContext';

import classes from './AddFarmDialog.module.css';

const newFarmSchema = z.object({
  cpfCnpj: z.string(),
  farmerName: z.string(),
  farmName: z.string(),
  stateId: z.any(),
  cityId: z.any(),
  totalArea: z.coerce.number(),
  farmableArea: z.coerce.number(),
  vegetationArea: z.coerce.number(),
  cultures: z.any().array(),
});

type newFarmSchema = z.infer<typeof newFarmSchema>;

export default function AddFarmDialog() {
  const { isAddFarmModalOpen, setIsAddFarmModalOpen } = useUiContext();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { handleSubmit, control } = useForm<newFarmSchema>({
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
          defaultValue=""
          control={control}
          name="cpfCnpj"
          render={({ field: { onChange, onBlur, value } }) => (
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
          defaultValue=""
          control={control}
          name="farmerName"
          render={({ field: { onChange, onBlur, value } }) => (
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
          defaultValue=""
          control={control}
          name="farmName"
          render={({ field: { onChange, onBlur, value } }) => (
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
          render={({ field: { onChange, onBlur, value } }) => (
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
          render={({ field: { onChange, onBlur, value } }) => (
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
          defaultValue={0}
          control={control}
          name="totalArea"
          render={({ field: { onChange, onBlur, value } }) => (
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
          defaultValue={0}
          control={control}
          name="farmableArea"
          render={({ field: { onChange, onBlur, value } }) => (
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
          defaultValue={0}
          control={control}
          name="vegetationArea"
          render={({ field: { onChange, onBlur, value } }) => (
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
          defaultValue={[]}
          control={control}
          name="cultures"
          render={({ field: { onChange, value } }) => (
            <Select
              label="Culturas"
              value={value}
              onChange={onChange}
              options={[
                { label: 'A', value: '1' },
                { label: 'B', value: '2' },
                { label: 'C', value: '3' },
              ]}
              isMulti
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
