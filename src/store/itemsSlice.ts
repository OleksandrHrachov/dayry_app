import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IItem, IState, IActionAddComment, IActionAddItem} from './types';

export const initialState: IState = {
  items: [],
  selectedItem: null,
};

const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IActionAddItem>) {
      state.items.push({
        id: action.payload.id,
        value: action.payload.textValue,
        comments: [],
      });
    },
    removeItem(state, action: PayloadAction<string>) {
      const newState = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: newState };
    },
    addComment(state, action: PayloadAction<IActionAddComment>) {
      state.items.forEach((item) => {
        if (item.id === state.selectedItem?.id) {
          item.comments.push({
            id: action.payload.id,
            colorValue: action.payload.colorValue,
            textValue: action.payload.textValue,
          });
        }
      });

      state.selectedItem?.comments.push({
        id: action.payload.id,
        colorValue: action.payload.colorValue,
        textValue: action.payload.textValue,
      });
    },
    addToSelected(state, action: PayloadAction<string>) {
      const selectedItem = state.items.filter(
        (item) => item.id === action.payload
      );
      return { ...state, selectedItem: selectedItem[0] };
    },
    setStore(state, action: PayloadAction<IState>) {
      return {items: action.payload.items, selectedItem: action.payload.selectedItem}
    }
  },
});

export const { addItem, removeItem, addToSelected, addComment, setStore } = itemsSlice.actions;
export default itemsSlice.reducer;
