import React, { useContext } from "react"
import { CountryType } from "./CountryList"
import { SaveIcon } from "../assets/Icons"
import { useDispatch } from "react-redux"
import { createSave } from "../store/SaveSlice"
import { Context } from "../context/Context"

const CountryItem:React.FC<{item:CountryType}> = ({item}) => {
  const {countries, setCountries} = useContext(Context)
  const dispatch = useDispatch()

  function handleClick(item: CountryType) {
    const updatedCountries = countries.map(country => 
      country.name === item.name 
        ? { ...country, isSaved: !country.isSaved }
        : country
    );
  
    setCountries(updatedCountries); 
    dispatch(createSave(item));
  }

  return (
    <div className="w-[265px] rounded-[6px] item-shadow overflow-hidden dark:bg-[#2B3844] bg-white">
      <img className="h-[160px] border-b-[1px] border-b-[#111517]" src={item.img} alt="Flag" width={"100%"} height={160} />
      <div className="mt-[24px] ml-[24px] mb-[46px] relative">
        <h2 className="font-bold text-[18px] leading-[26px] mb-[16px] text-[#111517] dark:text-[#FFF]">{item.name}</h2>
        <strong className="text-[14px] leading-[16px] flex dark:text-[#FFF]">Population: <p className="font-normal pl-2 dark:text-[#FFF]">{item.population}</p></strong>
        <strong className="text-[14px] leading-[16px] flex dark:text-[#FFF]">Region: <p className="font-normal pl-2 dark:text-[#FFF]">{item.region}</p></strong>
        <strong className="text-[14px] leading-[16px] flex dark:text-[#FFF]">Capital: <p className="font-normal pl-2 dark:text-[#FFF]">{item.capital}</p></strong>
        <button onClick={() => handleClick(item)} className={`dark:text-[#FFF] ${item.isSaved ? "text-green-500 dark:text-green-500" : "text-[#111517]"} absolute right-10 hover:bg-blue-200 duration-300 p-2 rounded-full active:bg-blue-100`}><SaveIcon/></button>
      </div>
    </div>
  )
}

export default CountryItem