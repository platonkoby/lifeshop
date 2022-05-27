import { DisplayListProps } from '../../models/list.search.models'
import ListItem from './ListItem'
import '../../styles/display-list.css'
import { nanoid } from 'nanoid'

function DisplayList({ list, updateLists } : DisplayListProps) {
  return (
    <div className='display-list'>
      {list.map((item) => (
        <ListItem updateLists={updateLists} item={item} key={nanoid()} />
      ))}
    </div>
    
  )
}

export default DisplayList