// deps
import React from 'react'
import {
  useSelector,
  // useDispatch, shallowEqual
} from 'react-redux'
// components
import Table from '_/components/Table'
import Loading from '_/components/Loading'
// helpers
import { revisionsSelector } from '_/pages/Main/helpers'
import { columns, mock, rowsPerPageOptions } from '_/components/Table/helpers'
import { EFilterOrder } from '_/store/types'
import '_/pages/Main/style.scss'

const Main: React.FC = () => {
  const { loading, data, error } = useSelector(revisionsSelector)
  console.log(loading, data, error)
  // useMemo
  const columnsInitOrder = React.useMemo(() => columns.map((el) => el.name), [])
  // useState
  const [page, setPage] = React.useState<number>(1)
  const [columnsOrder, setColumnsOrder] = React.useState<string[]>(
    columnsInitOrder
  )
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    rowsPerPageOptions[0]
  )
  const [sort, setSort] = React.useState<Record<string, string | EFilterOrder>>(
    {}
  )

  // useCallback
  const handleChangeColumnsOrder = React.useCallback(
    (arr: string[]) => setColumnsOrder(arr),
    []
  )
  const handleSetPage = React.useCallback((val: number) => setPage(val), [])
  const handleSetRowsPerPage = React.useCallback(
    (val: number) => setRowsPerPage(val),
    []
  )
  const handleSetSort = React.useCallback(
    (val: Record<string, string | EFilterOrder>) => setSort(val),
    []
  )

  const totalCount = 47

  return (
    <div className="main-container">
      {loading && <Loading />}
      <Table
        columnsOrder={columnsOrder}
        onChangeColumnsOrder={handleChangeColumnsOrder}
        rows={mock}
        columns={columns}
        rowsPerPageOptions={rowsPerPageOptions}
        count={totalCount}
        page={page}
        onPageChange={handleSetPage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleSetRowsPerPage}
        sort={sort}
        handleSetSort={handleSetSort}
      />
    </div>
  )
}

export default Main
