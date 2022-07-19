import React, { createContext, useState } from 'react'
import { FILTER_ALL } from '../../services/filter'
import { MODE_CREATE, MODE_NONE } from '../../services/mode'

const DEFAULT_LIST = [
  {
    id: 1,
    text: 'Learn Javascript',
    completed: false,
  },
  {
    id: 2,
    text: 'Learn React',
    completed: false,
  },
  {
    id: 3,
    text: 'Build a React App',
    completed: false,
  },
]

export const StateContext = createContext({})

export const StateProvider = ({ children }) => {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState(MODE_CREATE)
  const [filter, setFilter] = useState(FILTER_ALL)
  const [list, setList] = useState(DEFAULT_LIST)

  const [todoCounter, setTodoCounter] = useState(4)

  const addNew = (text) => {
    setList([
      ...list,
      {
        id: todoCounter,
        text,
        completed: false,
      },
    ])
    setTodoCounter(todoCounter + 1)
  }

  const changeFilter = (filter) => {
    setFilter(filter)
  }

  const changeStatus = (itemId, completed) => {
    const index = list.findIndex((item) => item.id === itemId)
    const updatedList = [...list]
    updatedList[index].completed = completed
    setList(updatedList)
  }

  const changeMode = (mode = MODE_NONE) => {
    setMode(mode)
  }

  const setSearchQuery = (text) => {
    setQuery(text || '')
  }

  const data = {
    query,
    mode,
    filter,
    list,
  }

  const actions = {
    addNew,
    changeFilter,
    changeStatus,
    changeMode,
    setSearchQuery,
  }

  return <StateContext.Provider value={{ data, actions }}>{children}</StateContext.Provider>
}
