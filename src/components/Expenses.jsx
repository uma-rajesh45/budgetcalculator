import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const Expenses = () => {
  const {expenses} = useContext(AppContext)
  const totalExpenses = expenses.reduce((total,item)=>{
    return(total+=item.cost);
  },0)
    return (
      <div className="alert alert-primary h-75"><span>Expenses: ${totalExpenses}</span></div>
    )
  }
  