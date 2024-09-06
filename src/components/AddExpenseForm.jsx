import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from "uuid"

export const AddExpenseForm = () => {
   const [name,setName] = useState("");
   const [cost,setCost] = useState("");
   const {dispatch} = useContext(AppContext);

    const onSubmit = (e)=>{
        e.preventDefault();
        const expense = {
            id:uuidv4(),
            name:name,
            cost:parseInt(cost)
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload:expense
        })
    }
  return (
    <form className="row" onSubmit={onSubmit}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            autoComplete="off"
            value={name}
            onChange={(e)=>setName(e.target.value)}
                   
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            required
            className="form-control"
            id="cost"
            autoComplete="Off"
            value={cost}
            onChange={(e)=>setCost(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
