import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit"
import { addExpenseAction, incrementCountActionPerformed } from "store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
    /* predicate: (action) => {
        return action.type === "expenseSlice/addExpenseAction";
    }, */
    matcher: isAnyOf(addExpenseAction),
    effect: async (action, listenerAPI) => 
    {
        console.log(action); 
        listenerAPI.dispatch(incrementCountActionPerformed())
        console.log(listenerAPI.getState()); 
    }
})