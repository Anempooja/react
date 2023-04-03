import React,{useState} from 'react'
import './ExpenseForm.css'
 function ExpenseForm(){
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    const submitted=(event)=>{
        event.preventDefault()
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
         }
        console.log(expenseData)
    }
    return <form onSubmit={submitted}>
        <div className='new-expense__controls'>
            <div className='new-empense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-empense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'onChange={amountChangeHandler}/>
            </div>
            <div className='new-empense__control'>
                <label>date</label>
                <input type='date' min='2023-04-01' max='2025-01-01'onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Add Expense</button>
        </div>
    </form>
 }
 export default ExpenseForm