import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import classes from './FarmsTable.module.css';

type Farm = {
  id: number;
  cpfCnpj: string;
  farmerName: string;
  farmName: string;
  state: string;
  city: string;
  totalArea: number;
  farmableArea: number;
  vegetationArea: number;
  cultures: string[];
};

const farms: Farm[] = [
  {
    id: 1,
    cpfCnpj: '018.641.296-70',
    farmerName: 'Fulano de Tal',
    farmName: 'Céu Dourado',
    state: 'MG',
    city: 'Uberlândia',
    totalArea: 12,
    farmableArea: 10,
    vegetationArea: 2,
    cultures: ['Soja', 'Café'],
  },
  {
    id: 2,
    cpfCnpj: '018.641.296-70',
    farmerName: 'Ciclano',
    farmName: 'Céu Prateado',
    state: 'MG',
    city: 'Uberlândia',
    totalArea: 12,
    farmableArea: 10,
    vegetationArea: 2,
    cultures: ['Cana'],
  },
  {
    id: 3,
    cpfCnpj: '018.641.296-70',
    farmerName: 'Beltrano',
    farmName: 'Céu Brozeado',
    state: 'MG',
    city: 'Uberlândia',
    totalArea: 12,
    farmableArea: 10,
    vegetationArea: 2,
    cultures: ['Milho'],
  },
];

const columnHelper = createColumnHelper<Farm>();

const columns = [
  columnHelper.accessor('cpfCnpj', { header: 'CPF/CNPJ' }),
  columnHelper.accessor((row) => `${row.farmName} (${row.farmerName})`, {
    header: 'Fazenda (Produtor)',
  }),
  columnHelper.accessor((row) => `${row.city} - ${row.state}`, {
    header: 'Cidade/Estado',
  }),
  columnHelper.accessor(
    (row) => `${row.farmableArea}/${row.vegetationArea}/${row.totalArea}`,
    {
      header: 'Uso da área',
    }
  ),
  columnHelper.accessor((row) => row.cultures.join(', '), {
    header: 'Culturas',
  }),
  columnHelper.display({
    header: 'Ações',
    cell: ({ row }) => {
      return (
        <div className={classes.actions}>
          <button
            className={classes.edit}
            onClick={() => console.log(row.getValue('Cidade/Estado'))}
          >
            &#x270E;
          </button>
          <button
            className={classes.delete}
            onClick={() => console.log(row.getValue('Cidade/Estado'))}
          >
            &times;
          </button>
        </div>
      );
    },
  }),
];

export default function FarmsTable() {
  const table = useReactTable({
    data: farms,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={classes.tableWrapper}>
      <table className={classes.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
