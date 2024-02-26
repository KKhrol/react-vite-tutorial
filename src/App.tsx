import { useState } from 'react';

import './App.css';
import ItemsListComponent from './components/items/ItemsList.component';
import { ItemInterface } from './models/items/Item.interface';

function App() {
  const [items, setItems] = useState<ItemInterface[]>([
    {
      id: 1,
      name: 'item 1',
      selected: false,
    },
    {
      id: 2,
      name: 'item 2',
      selected: false,
    },
    {
      id: 3,
      name: 'item 3',
      selected: false,
    },
  ]);

  const onItemSelect = (item: ItemInterface) => {
    const updatedItems = [...items];
    const foundItem = updatedItems.find(
      (updatedItem) => updatedItem.id === item.id,
    ) as ItemInterface;
    foundItem.selected = !item.selected;
    setItems(updatedItems);

    console.log('App tsx: onItemSelect', foundItem.id, foundItem.selected, updatedItems);
  };
  return (
    <div>
      <ItemsListComponent
        items={items}
        onItemSelect={onItemSelect}
      />
    </div>
  );
}

export default App;
