import { createContext } from "react";

export const BalanceContext = createContext({
    balance: 0,
    updateBalance: (sum : number) => {}
});
