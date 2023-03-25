import './ExpenseItem.css'
function ExpenseItem (props){
    const expenseDate=new Date()
    const expenseTitle='Food'
    const expenseAmount=500
    
    return (
        <div>
            <div className="expense-item">{expenseDate.toISOString()}</div>
            <div className="expense-item__description"><h2>{expenseTitle}</h2><div className="expense-item__amount"> {expenseAmount}</div><div>{props.locationOfExpenditure }</div>
            </div>
        
        </div>
    )
}
export default ExpenseItem