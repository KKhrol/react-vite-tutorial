import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ItemInterface } from 'models/items/Item.interface';

import { ItemsStateInterface } from './models';

const initialItemsState: ItemsStateInterface = {
  loading: false,
  items: [],
};

export const itemsStoreSlice = createSlice({
  name: 'itemsStoreSlice',
  initialState: initialItemsState,

  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload || [];
    },

    setItems: (state, action: PayloadAction<ItemInterface[]>) => {
      state.loading = false;
      state.items = action.payload || [];
    },

    setItemSelected: (state, action: PayloadAction<ItemInterface>) => {
      const item = action.payload;
      const foundItem = state.items.find((i) => i.id === item.id) as ItemInterface;
      foundItem.selected = !foundItem.selected;
    },
  },
});
