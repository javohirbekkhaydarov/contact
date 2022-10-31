import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [
    {
      name: "Javohirbek",
      number: "998331110303",
      category: "Me",
      active: false,
      id: 1,
    },
  ],
  arr2: [
    {
      name: "Javohirbek",
      number: "998331110303",
      category: "Me",
      active: false,
      id: 1,
    },
  ],
};
export const ContactSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.arr.push({
        id: Date.now(),
        active: false,
        name: action.payload.name,
        number: action.payload.number,
        category: action.payload.category,
      });
      state.arr2.push({
        id: Date.now(),
        active: false,
        name: action.payload.name,
        number: action.payload.number,
        category: action.payload.category,
      });
    },
    removeContact: (state, action) => {
      state.arr = state.arr.filter((item) => {
        return item.id !== action.payload;
      });
      state.arr2 = state.arr2.filter((item) => {
        return item.id !== action.payload;
      });
    },

    filterContact: (state, { payload }) => {
      if (payload === "all") {
        state.arr = state.arr2;

      } else {
        let contact = [...state.arr2].filter((item) => {
          return item.active === payload;
        });

        state.arr = contact;
      }
    },
  },
});
export const { addContact, removeContact, filterContact } =
  ContactSlice.actions;
export default ContactSlice.reducer;
