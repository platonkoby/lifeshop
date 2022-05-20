import Card from '../Card'
import Page from '../Page'
import Sorting from '../ListSearch/Sorting'
import { SortingType } from '../../models/list_search.models'
import '../../styles/edit-inventory.css'
import EditList from './EditList'
import Divider from '../Divider'

function EditInventory() {

    const changeSortingTo = (sorting : SortingType) => {}

  return (
    <Page page='edit'>
        <div className="edit-inventory">
            <Card header='Goals'>
                <Sorting changeSortingTo={changeSortingTo} />
                <Divider />
                <EditList list={['one', 'two', 'three']} />
            </Card>
        </div>
    </Page>
  )
}

export default EditInventory