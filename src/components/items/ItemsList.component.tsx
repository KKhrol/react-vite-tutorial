import { ItemInterface } from "../../models/items/Item.interface";



type Props = {
    items: ItemInterface[];
    onItemSelect: (item: ItemInterface) => void;
}

export const ItemsListComponent = (props: Props) => {
    return (
        <div>
            <h3>Items: </h3>
            <ul>
                {
                    props.items.map((item, index) => <li key={index} onClick={() => props.onItemSelect(item)}> {item.name} [{String(item.selected)}] </li>)
                }
            </ul>
        </div>
    )
}