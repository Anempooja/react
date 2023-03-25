import ExpenseItem from "./components/ExpenseItem";
function App() {
  const locations=[{place:'x'},{place:'y'},{place:'z'}]
  return (
    <div>
      <h2>Let's get started!</h2>
      {
        locations.map(location=>{
          return   <ExpenseItem locationOfExpenditure= {`${location.place}`}></ExpenseItem>
        })
      
}
      
    </div>
  );
}



export default App;
