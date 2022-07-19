import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { MSG_NO_ITEMS } from '../../assets/text/en_US'
import { StateContext } from '../contexts/StateProvider'

export default function FilteredList(props) {
  const { items } = props
  const {
    actions: { changeStatus },
  } = useContext(StateContext)

  if (items.length === 0) {
    return <p className="alert alert-info">{MSG_NO_ITEMS}</p>
  }

  return (
    <ul className="list-unstyled">
      {items.map((item) => (
        <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
      ))}
    </ul>
  )
}
