import { createContext } from "react";

export const BalanceContext = createContext({
    balance: 0,
    updateBalance
});

function updateBalance(balance : number, sum : number) {
    return {
        balance: balance + sum,
        updateBalance
    }
}