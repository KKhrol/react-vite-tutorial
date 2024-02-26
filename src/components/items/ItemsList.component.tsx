import { ItemInterface } from '../../models/items/Item.interface';
import { ItemComponent } from './children/Item.component';

type Props = {
  items: ItemInterface[];
  onItemSelect: (item: ItemInterface) => void;
};

export default function ItemsListComponent(props: Props) {
  const handleItemClick = (item: ItemInterface) => {
    props.onItemSelect(item);
  };

  return (
    <div>
      <h3>Items: </h3>
      <ul>
        {props.items.map((item) => (
          <ItemComponent
            testId={`item-${item.id}`}
            key={item.id}
            model={item}
            onItemSelect={() => handleItemClick(item)}
          />
        ))}
      </ul>
    </div>
  );
}
