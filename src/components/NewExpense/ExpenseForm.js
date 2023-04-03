import React from 'react'
import './ExpenseForm.css'
 function ExpenseForm(){
    const titleChangeHandler=(event)=>{
        console.log(event.target.value)
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-empense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-empense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'/>
            </div>
            <div className='new-empense__control'>
                <label>date</label>
                <input type='date' min='2023-04-01' max='2025-01-01'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
 }
 export default ExpenseForm