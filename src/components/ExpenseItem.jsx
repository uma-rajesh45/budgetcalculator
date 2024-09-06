import { TiDelete } from "react-icons/ti";
import PropsTypes from 'prop-types'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);
  const handleClick = ()=>{
    dispatch({
      type:'DELETE_ITEM',
      payload:props.id
    })
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="mx-3 badge bg-primary badge-pill">
            ${props.cost}   
        </span>
        <TiDelete size="1.8em" onClick={()=>handleClick(props.id)}></TiDelete>
      </div>
    </li>
  );
};
export default ExpenseItem;
ExpenseItem.propTypes ={
    name:PropsTypes.any,
    cost:PropsTypes.any,
    id:PropsTypes.any
}