import axios from "axios"
import React, { lazy, Suspense, useContext, useEffect } from "react"
import { Context } from "../context/Context"

export interface CountryType {
    name:string
    capital:string
    region:string
    img:string
    flagIcon:string
    population:number
    isSaved:boolean
}

const CountryItem = lazy(() =>
    new Promise<{ default: React.ComponentType<any> }>(resolve =>
      setTimeout(() => resolve(import("../components/CountryItem")), 1000)
    ));


const CountryList = () => {
    const {countries, setCountries, refresh} = useContext(Context)


    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            setCountries(res.data.splice(0, 20).map((item:any) => {
                const data:CountryType = {
                    name:item.name.common,
                    capital:item.capital[0],
                    region:item.region,
                    population:item.population,
                    img:item.flags.png,
                    flagIcon:item.flag,
                    isSaved:false
                }
                return data
            }))
        })
    }, [refresh])

  return (
    <div className="flex flex-wrap justify-between px-[80px] pb-[45px] gap-[75px]">
        <Suspense fallback={<span className="loader mx-auto mt-[150px] scale-150"></span>}>{countries.map((item:CountryType, index:number) =><CountryItem key={index + 1} item={item}/>)}</Suspense>
    </div>
  )
}

export default CountryList