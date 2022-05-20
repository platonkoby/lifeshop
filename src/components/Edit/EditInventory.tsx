import Card from '../Card'
import Page from '../Page'
import Sorting from '../ListSearch/Sorting'
import { SortingType } from '../../models/list_search.models'
import EditList from './EditList'
import Divider from '../Divider'
import { IoMdAdd } from 'react-icons/io'
import '../../styles/edit-inventory.css'
import { getButtonSize } from '../../Functions/GlobalFunctions'
import { useState } from 'react'

function EditInventory() {

  const [showCreateItem, setShowCreateItem] = useState(false)

  const toggleCreateItem = () => setShowCreateItem((showCreateItem) => !showCreateItem)

    const changeSortingTo = (sorting : SortingType) => {}

  return (
    <Page page='edit'>
        <div className="edit-inventory">
            <Card header='Goals'>
                <div className="organize-items">
                  <Sorting changeSortingTo={changeSortingTo} />
                  <IoMdAdd onClick={toggleCreateItem} color='green' size={getButtonSize()} />
                </div>
                <Divider />
                <EditList showCreateItem={showCreateItem} list={['one', 'two', 'three']} />
            </Card>
        </div>
    </Page>
  )
}

export default EditInventory