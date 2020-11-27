import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

export const todos = createSlice({
  name: "todos",
  initialState: {
    username: "Joel",
    items: [
      { id: 1, text: "This is a todo" },
      { id: 2, text: "Click the ⓧ to remove" },
      { id: 3, text: "Click the ☑ to check it!" },
    ],
  },
  reducers: {
    // removeOne: (state, action) => {
    // //   state.listItems.pop();
    // },

    addItem: {
      reducer(store, action) {
        store.items = [...store.items, action.payload];
      },
      prepare(text) {
        return {
          payload: {
            id: uniqid(),
            text: text,
            isCompleted: false,
          },
        };
      },
    },

    removeItem: (state, action) => {
      console.log(state, action);
      const itemId = action.payload;

      const filteredList = state.items.filter((item) => item.id !== itemId);

      state.items = filteredList;
    },

    toggleComplete: (state, action) => {
      const updatedArray = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        } else {
          return item;
        }
      });

      state.items = updatedArray;
    },

    removeAll: (store, action) => {
      store.items = [];
    },
    // addItem: (state, action) => {
    //   const newItem = {
    //     id: Math.max(...state.items.map((item) => item.id)),
    //     text: action.payload,
    //   };
    //   const newItemsList = [...state.items, newItem];
    //   state.items = newItemsList;
    // },
  },
});