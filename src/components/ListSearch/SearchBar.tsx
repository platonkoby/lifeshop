import { SearchBarProps } from '../../models/list_search.models'
import { MdFilterAlt } from 'react-icons/md'
import '../../styles/search-bar.css'
import { SyntheticEvent } from 'react'

function SearchBar({ placeholder, width } : SearchBarProps) {

  const handleInputChange = (e : SyntheticEvent) => {
    
  }

  return (
    <div className="search-bar">
        <input onChange={handleInputChange} style={{width: width || '100%'}} type="text" placeholder={placeholder} />
        <MdFilterAlt size={30} />
    </div>
  )
}

export default SearchBar