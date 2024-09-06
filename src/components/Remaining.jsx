import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const Remaining = () => {
  const {expenses,budget} = useContext(AppContext)
  const totalExpenses = expenses.reduce((total,item)=>{
    return (total+=item.cost)
  },0)
  const alertType =totalExpenses > budget?"alert-danger":"alert-success" ;
  return (
    <div className={`alert ${alertType} h-75`}><span>Remaining: ${budget-totalExpenses}</span></div>
  )
}
