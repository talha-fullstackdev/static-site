"use client";
import { useSelector } from "react-redux";
import { removeEmployee } from "../reduxToolkit/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
const ShowEmployees = () => {
  const employess = useSelector((state) => state.reducer.employees);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeEmployee(id));
  };
  return (
    <div>
      <h1>show employees </h1>
      <ol>
        {employess &&
          employess.map((val) => (
            <div key={val.id}>
              <li>{val.name}</li>
              <button onClick={() => handleDelete(val.id)}>delete</button>
            </div>
          ))}
      </ol>
      <Link href="/delete">delete page</Link>
    </div>
  );
};

export default ShowEmployees;
