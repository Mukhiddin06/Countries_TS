import React, { createContext, ReactNode, useState } from "react";
import { CountryType } from "../components/CountryList";

interface ContextType {
    countries:CountryType[]
    setCountries:React.Dispatch<React.SetStateAction<CountryType[]>>
    refresh:boolean
    setRefresh:React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<ContextType>({
    countries:[],
    setCountries:():void => {},
    refresh:false,
    setRefresh:():void => {}
})

export const ConutryContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [countries, setCountries] = useState<CountryType[]>([])
    const [refresh, setRefresh] = useState<boolean>(false)

    return (
        <Context.Provider value={{countries, setCountries, refresh, setRefresh}}>{children}</Context.Provider>
    )
}