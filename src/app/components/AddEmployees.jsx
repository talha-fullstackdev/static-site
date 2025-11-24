"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../reduxToolkit/slice";
const AddEmployees = () => {
  const [employee, setEmployee] = useState("");
  const dispatch = useDispatch();
  const handleAddEmployee = () => {
    dispatch(addEmployee(employee));
    setEmployee("")
     
  };
  return (
    <div>
      <h1>Add Employees</h1>
      <input type="text" value={employee} onChange={(e) => setEmployee(e.target.value)} />
      <button onClick={handleAddEmployee}>Add</button>
    </div>
  );
};

export default AddEmployees;
