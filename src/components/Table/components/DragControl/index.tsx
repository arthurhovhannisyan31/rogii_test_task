// deps
import React from 'react'
import clsx from 'clsx'
// helpers
import { TableContext } from '_/components/Table/'
import './style.scss'

interface IProps {
  id: string
  column: string
  head?: boolean
  draggable?: boolean
}

const DragControl: React.FC<IProps> = ({ children, column, head }) => {
  // useContext
  const {
    dragged,
    setDragged,
    handleSetColumnsOrder,
    over,
    setOver,
  } = React.useContext(TableContext)
  // useState
  const handleDragOver = React.useCallback(
    (event: React.DragEvent) => {
      event.stopPropagation()
      event.preventDefault()
      if (head && over !== column) setOver(column)
    },
    [head, over, column, setOver]
  )
  const handleDragLeave = React.useCallback(
    (event: React.DragEvent) => {
      event.stopPropagation()
      event.preventDefault()
    },
    [over, dragged]
  )
  const handleDrop = React.useCallback(() => {
    if (dragged !== column) {
      handleSetColumnsOrder({ source: dragged, target: column })
    }
    setDragged('')
    setOver('')
  }, [handleSetColumnsOrder, dragged, column, setDragged, setOver])

  const showOver = React.useMemo(() => head && over === column, [
    head,
    over,
    column,
  ])

  return (
    <div
      className={clsx('drag-control-container', {
        'dragControl-over': showOver,
      })}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
    </div>
  )
}

export default DragControl
