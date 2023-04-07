import React, {useState} from "react";
import Expenses from "./Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_Expenses=[{
  id:1,
  title:'food',
  amount:500,
  date:new Date(2022,11,25)},
  {
    id:2,
    title:'movies',
  amount:1000,
  date:new Date(2023,0,5)  },
  {
    id:3,
    title:'petrol',
  amount:200,
  date:new Date(2023,1,21)
 }]
const App=()=> {
  
    const [expenses,setExpenses]=useState(Dummy_Expenses)
    const addExpenseHandler=(expense)=>{
      setExpenses((preExpenses)=>{
        return [expense,...preExpenses]
      })
      console.log(expenses)
    }
    console.log(expenses)
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}> </Expenses>
      
    </div>
  );
}



export default App;
