import { SortingProps } from '../../models/list_search.models'
import { nanoid } from 'nanoid'
import '../../styles/sorting.css'

function Sorting({ changeSortingTo } : SortingProps) {


  return (
    <div className='sorting'>
      <h3>Sort by:</h3>   
      <select>
        {['frequency', 'a-z', 'highest value', 'lowest value'].map((sort) => (
          <option value={sort} key={nanoid()}>{sort}</option>
        ))}
      </select>
    </div>
  )
}

export default Sorting