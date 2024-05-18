import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Select from '../UI/Forms/Select';
import Button from '../UI/Button';
import Input from '../UI/Forms/Input';

const newFarmSchema = z.object({
  cpfCnpj: z.string().min(10), // .regex(...)
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

export default function AddFarmForm() {
  const { handleSubmit, control } = useForm<newFarmSchema>({
    resolver: zodResolver(newFarmSchema),
  });

  const handleAddNewFarm = (data: newFarmSchema) => {
    console.log(data);
  };

  return (
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

      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
