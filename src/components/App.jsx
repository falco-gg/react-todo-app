import React from 'react'
import TodoList from './ui/TodoList'
import { StateProvider } from './contexts/StateProvider'

const App = () => {
  return (
    <StateProvider>
      <TodoList />
    </StateProvider>
  )
}

export default App
