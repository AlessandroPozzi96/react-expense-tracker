import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice(
    {
        name: "expenseSlice",
        initialState: {
            expenseList : [{name:"Ordinateur", price:400}],
        },
        reducers : {
            addExpense : (currentSlice) => {
                currentSlice.expenseList.push({name:"test", price:400});
                console.log("AddExpense()");
            },
        }
    }
);

const {addExpense} = expenseSlice.actions;

export {addExpense};