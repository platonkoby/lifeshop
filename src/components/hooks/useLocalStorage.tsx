import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key : string, initValue : T | (() => T)) {

    const [value, setValue] = useState<T>(() => {
        
    const valueJSON = localStorage.getItem(key)

    if (valueJSON != null) return JSON.parse(valueJSON)

    return typeof initValue === "function" 
    ? (initValue as () => T)()
    : initValue

    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue ]
}