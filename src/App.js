import ExpenseItem from "./components/Expenses/ExpenseItem";
const App=()=> {
  const expenseList=[{
    title:'food',
    amount:500,
    date:new Date(2022,11,25),
    place:'x'},
    {
      title:'movies',
    amount:1000,
    date:new Date(2023,0,5),
    place:'y'},
    {
      title:'petrol',
    amount:200,
    date:new Date(2023,1,21),
    place:'z'}]
  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenseList.map(item=>{
          return   <ExpenseItem title={`${item.title}`} amount={`${item.amount}`} date={`${item.date}`}  locationOfExpenditure= {`${item.place}`}></ExpenseItem>
        })
      
}
      
    </div>
  );
}



export default App;
