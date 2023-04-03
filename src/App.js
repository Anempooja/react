import Expenses from "./Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App=()=> {
  const expenses=[{
    id:1,
    title:'food',
    amount:500,
    date:new Date(2022,11,25),
    place:'x'},
    {
      id:2,
      title:'movies',
    amount:1000,
    date:new Date(2023,0,5),
    place:'y'},
    {
      id:3,
      title:'petrol',
    amount:200,
    date:new Date(2023,1,21), 
    place:'z'}]
    const addExpenseHandler=expense=>{
      console.log(expense)
    }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}> </Expenses>
      
    </div>
  );
}



export default App;
