import React, { useContext } from 'react'
import { StateContext } from '../contexts/StateProvider'
import CheckBox from './CheckBox'

export default function TodoItem(props) {
  const { id, completed, text } = props
  const {
    actions: { changeStatus },
  } = useContext(StateContext)
  const handleChange = (checked) => changeStatus(id, checked)
  const className = 'todo-item ui-state-default ' + (completed === true ? 'completed' : 'pending')

  return (
    <li className={className}>
      <div className="checkbox">
        <label>
          <CheckBox checked={completed} onChange={handleChange} /> {text}
        </label>
      </div>
    </li>
  )
}
