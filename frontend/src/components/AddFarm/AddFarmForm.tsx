import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Select, { Option } from '../UI/Forms/Select';
import Button from '../UI/Button';
import Input from '../UI/Forms/Input';

import classes from './AddFarm.module.css';

const optionSchema = (message?: string) => {
  return z.object(
    {
      label: z.string().optional(),
      value: z.number(),
    },
    { message }
  ) satisfies z.ZodType<Option>;
};

const newFarmSchema = z
  .object({
    cpfCnpj: z
      .string()
      .regex(
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        'Formato do CPF/CNPJ é inválido'
      ),
    farmerName: z.string().min(1, 'Nome do produtor não pode ser vazio'),
    farmName: z.string().min(1, 'Nome da fazenda não pode ser vazio'),
    stateId: optionSchema('Estado é obrigatório').transform(
      (item) => item.value
    ),
    cityId: optionSchema('Cidade é obrigatório').transform(
      (item) => item.value
    ),
    totalArea: z.coerce.number().positive('Área total deve ser maior que 0'),
    farmableArea: z.coerce
      .number()
      .positive('Área agricultável deve ser maior que 0'),
    vegetationArea: z.coerce
      .number()
      .min(0, 'Área de vegetação deve ser no mínimo 0'),
    cultureIds: optionSchema()
      .array()
      .min(1, 'Produtor deve cultivar ao menos uma cultura')
      .transform((items) => items.map((item) => item.value)),
  })
  .refine(
    ({ totalArea, farmableArea, vegetationArea }) =>
      totalArea >= farmableArea + vegetationArea,
    'A soma das áreas agricultável e de vegetação não deve ser maior que a área total informada'
  );

type newFarmSchema = z.infer<typeof newFarmSchema>;

export default function AddFarmForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<newFarmSchema>({
    resolver: zodResolver(newFarmSchema),
  });

  const handleAddNewFarm = (data: newFarmSchema) => {
    console.log(data);
  };

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div className={classes.errors}>
          <ul>
            {Object.values(errors).map((e, idx) => {
              const msg = e.message ?? `Erro desconhecido ${idx}`;
              return <li key={msg}>{msg}</li>;
            })}
          </ul>
        </div>
      )}
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
          name="cultureIds"
          render={({ field: { onChange, value } }) => (
            <Select
              label="Culturas"
              value={value}
              onChange={onChange}
              options={[
                { label: 'A', value: 1 },
                { label: 'B', value: 2 },
                { label: 'C', value: 3 },
              ]}
              isMulti
            />
          )}
        />

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </>
  );
}
