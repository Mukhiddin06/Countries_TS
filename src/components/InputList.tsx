import React, { useContext } from "react"
import { SaveIcon, SearchIcon } from "../assets/Icons"
import { Context } from "../context/Context"
import { CountryType } from "./CountryList"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

const InputList = () => {
    const { countries, setCountries, refresh, setRefresh } = useContext(Context)
    const saved = useSelector((state:RootState) => state.saved)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value.toLowerCase()
        const data = countries.filter((item: CountryType) => item.name.toLowerCase().includes(value))
        setCountries(data)
        if (!value) {
            setRefresh(!refresh)
        }
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = (e.target as HTMLSelectElement).value
        const data2 = countries.filter((item: CountryType) => item.region.includes(value))
        setCountries(data2)
        if (value == "Filter by Region") {
            setRefresh(!refresh)
        }
    }

    function handleSaveClick(){
        if(saved.length > 0){
            setCountries(saved)
        }
    }


    return (
        <div className="flex justify-between py-[48px] items-center px-[80px] pt-[120px]">
            <label className="bg-white dark:bg-[#2B3844] rounded-[5px] flex items-center w-[481px] label-shadow py-[19px] pl-[32px] space-x-[24px]">
                <SearchIcon />
                <input onChange={handleChange} className="outline-none dark:bg-[#2B3844] text-[14px] leading-[20px] dark:placeholder:text-[#FFF] placeholder:text-[#848484] w-full" type="text" placeholder="Search for a country…" />
            </label>
            <div className="flex items-center space-x-8">
                <select onChange={handleSelectChange} className="dark:bg-[#2B3844] dark:text-[#FFF] label-shadow rounded-[5px] text-[14px] leading-[20px] py-[19px] pl-[24px] w-[200px] outline-none">
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <button onClick={handleSaveClick} className="text-[#111517] dark:text-[#FFF] hover:bg-blue-200 duration-300 p-2 rounded-full active:bg-blue-100 relative"><SaveIcon /><div className="absolute -right-2 w-6 -top-2 bg-red-600 rounded-full text-white">{saved.length}</div></button>
            </div>
        </div>
    )
}

export default InputList