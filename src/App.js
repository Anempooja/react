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
  let a=[]
    let [expenses,setExpenses]=useState(Dummy_Expenses)
    const addExpenseHandler=(expense)=>{
      setExpenses((preExpenses)=>{
        return [expense,...preExpenses]
      })
      
    }
    const [selectedYear,setFilteredYear]=useState('all')
    const filterYear=(event)=>{
      setFilteredYear(event.target.value)      
    }
    if(selectedYear!=='all'){
       a=expenses.filter((expense)=>{
        if(new Date(expense.date).getFullYear()==selectedYear){
          return expense
        }
      })
    }
    else a=[...expenses]
  return (
    <div>
      <label>
      filtered by year:
      <select  value={selectedYear}  onChange={filterYear}>
        <option value="all">All</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </label>
      <NewExpense onAddExpense={addExpenseHandler}/>
     { a.length===0 && <p> no expenses present</p>}
      {a.length===1 && <p> Only single Expense here. Please add more... </p> }
      <Expenses expenses={a}> </Expenses>
      
    </div>
  );
}



export default App;
