import Card from "../UI/Card"
const ExpenseDetails=(props)=>{
    return(
        <Card className="expense-item__description">
            <h2>{props.title}</h2><div className="expense-item__amount"> {props.amount}</div><div>{props.locationOfExpenditure }</div>
        </Card>
    )
}
export default ExpenseDetails