import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import FilteredList from './FilteredList'
import { applyFilter, search, FILTER_ACTIVE } from '../../services/filter'
import { StateContext } from '../contexts/StateProvider'

export default function TodoList() {
  const {
    data: { list, filter, query },
  } = useContext(StateContext)

  const [activeItemCount, setActiveItemCount] = useState()
  const [items, setItems] = useState([])

  useEffect(() => {
    setActiveItemCount(applyFilter(list, FILTER_ACTIVE).length)
  }, [list])

  useEffect(() => {
    setItems(search(applyFilter(list, filter), query))
  }, [list, query, filter])

  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <Header />
          <FilteredList items={items} />
          <Footer activeItemCount={activeItemCount} />
        </div>
      </div>
    </div>
  )
}
