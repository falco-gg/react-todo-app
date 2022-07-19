import React, { useContext } from 'react'
import { StateContext } from '../contexts/StateProvider'
import CheckBox from './CheckBox'

export default function TodoItem(props) {
  const { data } = props
  const {
    actions: { changeStatus },
  } = useContext(StateContext)
  const handleChange = (checked) => changeStatus(data.id, checked)
  const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending')

  return (
    <li className={className}>
      <div className="checkbox">
        <label>
          <CheckBox checked={data.completed} onChange={handleChange} /> {data.text}
        </label>
      </div>
    </li>
  )
}
