import React, { useEffect, useReducer, useState } from 'react'
import { sortList } from '../../Functions/Sortings'
import { ListSearchProps, SortingType } from '../../models/list.search.models'
import Card from '../Card'
import DisplayList from './DisplayList'
import SearchBar from './SearchBar'
import Sorting from './Sorting'

function ListSearch({ placeholder, list, updateLists } : ListSearchProps) {

    const [sortedList, setSortedList] = useState(list)

    const [sorting, setSorting] = useState<SortingType>('a-z')

    const changeSortingTo = (sorting : SortingType) => {
        setSorting(sorting)
    }

    useEffect(() => {
      setSortedList(sortList(list, sorting))
    }, [list, sorting])

  return (
    <Card header='Search'>
        <SearchBar placeholder={placeholder} />
        <Sorting changeSortingTo={changeSortingTo} sorting={sorting} />
        <DisplayList updateLists={updateLists} list={sortedList} />
    </Card>
  )
}

export default ListSearch