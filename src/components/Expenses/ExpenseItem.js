import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
const ExpenseItem =(props)=>{    
    return (
        <Card>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}></ExpenseDetails>
            
        
        </Card>
    )
}
export default ExpenseItem