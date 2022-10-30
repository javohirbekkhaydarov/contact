import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [{ name: "Javohirbek", number: "998331110303", active: false, id: 1 }],
  arr2: [{ name: "Javohirbek", number: "998331110303", active: false, id: 1 }],
};
export const ContactSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.arr.push({
        id: Date.now(),
        active: false,
        name: action.payload,
      });
      state.arr2.push({
        id: Date.now(),
        active: false,
        number: action.payload,
      });
    },
  },
});
export const { addContact } = ContactSlice.actions;
export default ContactSlice.reducer;
