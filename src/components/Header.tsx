import { MoonIcon } from "../assets/Icons"

const Header = () => {

    function handleModebtn():void{
        document.documentElement.classList.toggle("dark")
    }
  return (
    <div className="flex justify-between items-center py-[24px] px-[80px] header-shadow bg-white fixed w-full z-10 dark:bg-[#2B3844]">
        <h2 className='font-bold text-[24px] leading-[32.74px] text-[#111517] dark:text-[#FFF]'>Where in the world?</h2> 
        <button onClick={handleModebtn} className="flex items-center gap-[8px] dark:text-[#FFF]">
            <MoonIcon/>
            <p className="font-semibold text-[16px] leading-[21.82px] text-[#111517] dark:text-[#FFF]" >Dark Mode</p>
        </button>
    </div> 
  )
}

export default Header