import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  employees: [],
};
const Slice = createSlice({
  name: "addEmployeeSlice",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.employees.push(data);
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});
export const { addEmployee, removeEmployee } = Slice.actions;
export default Slice.reducer;
