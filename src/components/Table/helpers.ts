// deps
import format from 'date-fns/format'

export const columns = [
  { name: 'revision', title: 'revision', format: (val: number) => val },
  {
    name: 'revstmp',
    title: 'revstmp',
    format: (val: string) =>
      format((new Date(val) as never) as Date, 'dd/MM/yyyy hh:mm:ss'),
  },
  { name: 'user_id', title: 'user_id' },
  { name: 'user_email', title: 'user_email' },
  { name: 'user_name', title: 'user_name' },
  { name: 'well_id', title: 'well_id' },
  { name: 'well_name', title: 'well_name' },
  { name: 'well_type', title: 'well_type' },
  { name: 'changes_summary', title: 'changes_summary' },
]

export const rowsPerPageOptions = [5, 10, 25, 50]
