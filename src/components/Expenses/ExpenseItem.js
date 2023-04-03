import React, {useState} from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem =(props)=>{  
    const [title,setTitle]=useState(props.title)
    const clickHandler=()=>{
          setTitle('updated')  
    }  
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>      
            <ExpenseDetails title={title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}></ExpenseDetails>
            <button  onClick={clickHandler}>change title</button>
        
        </Card>
    )
}
export default ExpenseItem