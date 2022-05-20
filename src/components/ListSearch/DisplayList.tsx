import { DisplayListProps } from '../../models/list_search.models'
import ListItem from './ListItem'
import '../../styles/display-list.css'
import { nanoid } from 'nanoid'

function DisplayList({ list, updateList } : DisplayListProps) {
  return (
    <div className='display-list'>
      {list.map((item) => (
        <ListItem updateList={updateList} item={item} key={nanoid()} />
      ))}
    </div>
    
  )
}

export default DisplayList