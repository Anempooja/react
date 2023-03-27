import Expenses from "./Expenses";

const App=()=> {
  const expenses=[{
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
      <Expenses expenses={expenses}> </Expenses>
      
    </div>
  );
}



export default App;
