import { useReducer } from "react";
import { createContext } from "react";
import PropTypes from "prop-types"
const AppReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':{
            return {
                ...state,
                expenses:[...state.expenses,action.payload]
            }
        }
        case 'DELETE_ITEM':{
                return {
                    ...state,
                    expenses:state.expenses.filter((item)=>item.id!==action.payload)
                }
        }
        case 'EDIT':{
            return{
                    ...state,
                    budget:action.payload
            }
        }
        default:
            return state;
    }
}

const initialState = { budget: 200, expenses : [
]};
export const AppContext = createContext();
export const AppProvider = (props) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    return (
        <AppContext.Provider value={{
            budget:state.budget,
            expenses:state.expenses,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
AppProvider.propTypes ={
    children:PropTypes.any
}