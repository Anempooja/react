import './Expenses.css'
import Card from './components/UI/Card';
import ExpenseItem from "./components/Expenses/ExpenseItem";
function  Expenses(props){
    
    const expenses=props.expenses

return (
    <Card>
        <div>
        
{
        expenses.map(item=>{
           
          return   <ExpenseItem title={`${item.title}`} amount={`${item.amount}`} date={`${item.date}`}  locationOfExpenditure= {`${item.place}`}></ExpenseItem>
        })
       
}
</div>
    </Card>
)
}
export default Expenses