"use client"
import { useSelector,useDispatch } from 'react-redux';
import { removeEmployee } from '../reduxToolkit/slice';
const DeleteEmployee = () => {
      const employess = useSelector((state) => state.reducer.employees);
      const dispatch = useDispatch();
     const handleDelete = (id) => {
    dispatch(removeEmployee(id));
  };
  return (
    <div>
        <h1>delete employee</h1>
             <ol>
        {employess &&
          employess.map((val) => (
            <div key={val.id}>
              <li>{val.name}</li>
              <button onClick={() => handleDelete(val.id)}>delete</button>
            </div>
          ))}
      </ol>
    </div>
  )
}

export default DeleteEmployee