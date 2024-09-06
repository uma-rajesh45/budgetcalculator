import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

export const Budget = () => {
  const {budget,dispatch} = useContext(AppContext);
  const [edit,setEdit] = useState(false);
  const [value,setValue] = useState("");
  const handleClick = ()=>{
  dispatch({
    type:'EDIT',
    payload:value
  })
  setEdit(false)
  }
  return (
    <div className="alert alert-secondary d-flex justify-content-between h-75">
        {edit?<input type="number" onChange={(e)=>{setValue(e.target.value)}} value={value}/>: 
        <span>Budget: ${budget}</span>
        
        }
        <button className="btn btn-primary pb-3" onClick={()=>{edit?handleClick():setEdit(true)}}>{edit?"Save":"Edit"}</button>
    </div>
  )
}
