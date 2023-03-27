import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
const ExpenseItem =(props)=>{  
    
    const deleteExpense=()=>{
            
    }  
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>      
            <ExpenseDetails title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}></ExpenseDetails>
            <button id={`${props.id}`} onClick={deleteExpense}></button>
        
        </Card>
    )
}
export default ExpenseItem