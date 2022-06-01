import { SortingProps, SortingType } from '../../models/list.search.models'
import { nanoid } from 'nanoid'
import '../../styles/sorting.css'
import { SyntheticEvent, useReducer } from 'react'

function Sorting({ sorting, changeSortingTo } : SortingProps) {

  const sortings : SortingType[] = ['oftenly used', 'a-z', 'highest value', 'lowest value', 'favourites first'];

  const handleSortingChange = (e : SyntheticEvent) => {
    const val = e.target as HTMLOptionElement
    changeSortingTo(val.value as SortingType)
  }

  return (
    <div className='sorting'>
      <h3>Sort by:</h3>   
      <select value={sorting} onChange={handleSortingChange}>
        {sortings.map((sort) => (
          <option value={sort} key={nanoid()}>{sort}</option>
        ))}
      </select>
    </div>
  )
}

export default Sorting