import React, { useContext } from 'react'
import { getOptions } from '../../services/filter'
import { StateContext } from '../contexts/StateProvider'

export default function Filter(props) {
  const options = getOptions()
  const {
    data: { filter },
    actions: { changeFilter },
  } = useContext(StateContext)
  const getClass = (key) => (key === filter ? 'selected' : '')

  return (
    <ul className="filters list-unstyled clearfix">
      {Object.keys(options).map((key) => (
        <li key={key}>
          <a onClick={() => changeFilter(key)} className={getClass(key)}>
            {options[key]}
          </a>
        </li>
      ))}
    </ul>
  )
}
