import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
function ExpenseItem (props){    
    return (
        <div>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}></ExpenseDetails>
            
        
        </div>
    )
}
export default ExpenseItem