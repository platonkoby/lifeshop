import React, { useState } from 'react'
import { ListSearchProps, SortingType } from '../../models/list_search.models'
import Card from '../Card'
import DisplayList from './DisplayList'
import SearchBar from './SearchBar'
import Sorting from './Sorting'

function ListSearch({ placeholder, list, updateList } : ListSearchProps) {

    const [sorting, setSorting] = useState<SortingType>('most popular')

    const changeSortingTo = (sorting : SortingType) => {
        setSorting(sorting)
    }

  return (
    <Card header='Search'>
        <SearchBar placeholder={placeholder} />
        <Sorting changeSortingTo={changeSortingTo} />
        <DisplayList updateList={updateList} list={list} />
    </Card>
  )
}

export default ListSearch