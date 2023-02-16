import { useState } from "react";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpenseChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props)=>{
    const [filteredYear, setFilteredYear] = useState('2020')

    const onYearChange= (yearChangeInfo)=>{
        setFilteredYear(yearChangeInfo)
    }


    const filteredExpenses = props.items.filter(expense=>{
      return expense.date.getFullYear().toString() === filteredYear;
    })

    

    return(
      <div>
        <Card className="expenses">  
            <ExpensesFilter selected={filteredYear}
            onChangeYear={onYearChange}
            />
            <ExpenseChart expenses={filteredExpenses} />
          <ExpenseList items={filteredExpenses}/>  
      </Card>
    </div>
    )
}

export default Expenses;