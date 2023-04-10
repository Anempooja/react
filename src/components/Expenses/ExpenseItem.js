import React from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem =(props)=>{  
    
    return (
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}></ExpenseDate>      
            <ExpenseDetails title={props.title} amount={props.amount} ></ExpenseDetails>
            
        
        </Card>
    )
}
export default ExpenseItem