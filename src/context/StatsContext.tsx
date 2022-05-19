import { createContext, useEffect, useState } from "react";
import { statsRequest } from "../firebase/firestore";
import { Children } from "../models/global.models";

export const BalanceContext = createContext({
    balance: 0,
    updateBalance: (sum : number) => {}
});


export default function StatsContextProvider({ children } : Children) {

    const [balance, setBalance] = useState(0);

  const updateBalance = (sum : number) => {
    setBalance((balance) => balance + sum)
  }

    useEffect(() => {
        const statsData = statsRequest
        .then((snapshot) => snapshot.docs.map((stat) => stat.data()))
        .then((stats) => stats.find(item => item.name === 'balance'))
        .then((balance) => setBalance(balance?.value))

    }, [])

    return (
        <BalanceContext.Provider value={{balance, updateBalance}}>
            {children}
        </BalanceContext.Provider>
    )
}