import { ModifyListProps, UpdateListProps } from "../models/cart.models";
import { ModifyInventoryProps } from "../models/inventory.models";
import { updateList } from "./CartLogick";

const changeInventoryList = ({ list, item, setList } : ModifyListProps) => {
    const newList = list.filter((oldItem) => item.name !== oldItem.name)
    console.log(item)
    setList([...newList, item])
}

const deleteItem = ({list, item, setList} : ModifyListProps) => {
    setList((list) => list.filter(listItem => listItem.name !== item.name))
}

export const modifyInventory = ({list, item, setList, action} : ModifyInventoryProps) => {
    if (action === 'delete') {
        deleteItem({list, item, setList})
        return
    }
    action === 'change'
        ? changeInventoryList({list, item, setList})
        : updateList({list, item, setList, action})
}
