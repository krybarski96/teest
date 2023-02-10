import React, {useState} from "react";
import { AiOutlineAlignRight,AiOutlineClose } from "react-icons/ai";
import logo from  '../images/logo.svg'

const Navbar  = () => {
    // zmienne pod rozwijanie mobile menu
    const [nav,setNav] = useState(true)

    const handleNav = () => {

        setNav(!nav)
    }

    return (
        <div className="sticky top-0 flex justify-between items-center h-24 max-w-screen-2xl mx-auto px-4 text-white border-b border-b-main_blue">
            <img className="max-h-20 p-2" src={logo} alt="/"/>
            <ul className="hidden md:flex">
                <li className="p-4">Strona główna</li>
                <li className="p-4">Portfolio</li>
                <li className="p-4">O mnie</li>
                <li className="p-4">Kontakt</li>
            </ul>
            {/*funkcja zmiany ikony*/}
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> :<AiOutlineAlignRight size={20}/>}
            </div>
            {/*Mobilemenu*/}
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] px-4 h-full border-r border-r-gray bg-black ease-in-out duration-500' : 'fixed left-[-100%]'} >
                <img className="max-h-20 p-2" src={logo} alt="/"/>
                {/*<h1 className="basis-1/4 text-2xl font-bold uppercase m-6 mt-8 text-main_blue">React!</h1>*/}
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-b-gray">Strona główna</li>
                    <li className="p-4 border-b border-b-gray">Portfolio</li>
                    <li className="p-4 border-b border-b-gray">O mnie</li>
                    <li className="p-4">Kontakt</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar