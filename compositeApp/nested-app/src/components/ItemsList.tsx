import {IListProps} from "../_types/listProps.ts";
import {IItem} from "../_types/item.ts";
import EditItem from "./EditItem.tsx";

const ItemsList = (props: IListProps) => {

    const items: IItem[] = props.items;

    return (
        <ul>
            {items.map((item: IItem, index: number) => <EditItem item={item} key={index} />)}
        </ul>
    )
}

export default ItemsList;