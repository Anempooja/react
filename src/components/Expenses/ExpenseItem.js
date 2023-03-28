import React, {useState} from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem =(props)=>{  
    const [amount,setTitle]=useState(props.amount)
    const clickHandler=()=>{
          setTitle(100)  
    }  
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>      
            <ExpenseDetails title={props.title} amount={amount} locationOfExpenditure={props.locationOfExpenditure}></ExpenseDetails>
            <button  onClick={clickHandler}>change expense</button>
        
        </Card>
    )
}
export default ExpenseItem