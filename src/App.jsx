import { AddExpenseForm } from "./components/AddExpenseForm"
import { Budget } from "./components/Budget"
import { Expenses } from "./components/Expenses"
import ExpensesList  from "./components/ExpensesList"
import { Remaining } from "./components/Remaining"


function App() {

  return (
    <>
      <div>
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget/>
          </div>
          <div className="col-sm">
            <Remaining/>
          </div>
          <div className="col-sm">
            <Expenses/>
          </div>
        </div>
        <h1 className="mt-3">Expenses</h1>
        
        <div className="row mt-3">
          <div className="col-sm">
            <ExpensesList/>
          </div>
        </div>
        <h3 className="mt-3">
          Add Expense
        </h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
