import './ExpenseItem.css'
function ExpenseItem (){
    const expenseDate=new Date()
    const expenseTitle='Food'
    const expenseAmount=500
    const locationOfExpenditure ='place'
    return (
        <div>
            <div className="expense-item">{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__amount"> {expenseAmount}</div>
                <div>{locationOfExpenditure }</div>
            </div>
        
        </div>
    )
}
export default ExpenseItem