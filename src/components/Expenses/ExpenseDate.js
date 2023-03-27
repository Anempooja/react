import './ExpenseDate.css'
import Card from '../UI/Card'
const ExpenseDate=(props)=>{
   
    const month=new Date(props.date).toLocaleString('en-US',{month:'long'})
    const day=new Date(props.date).toLocaleString('en-US',{day:'2-digit'})
    const year = new Date(props.date).getFullYear();
    console.log(day)
    return(
        <Card className=".expense-date ">
        <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
            </Card>
    )
}
export default ExpenseDate