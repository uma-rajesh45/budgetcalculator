import { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
const ExpensesList = () => {
  const { expenses } = useContext(AppContext);
  const [items, setItems] = useState(expenses);
  useEffect(() => {
    setItems(expenses);
  }, [expenses]);
  
  const handleChange =(e) => {
    const searchItems =expenses.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );
    setItems(searchItems);
  };

  return (
    <>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="Type here to search..."
        className='form-control mb-2 mr-sm-2'
      />
      <ul className="list-group">
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};
export default ExpensesList;
