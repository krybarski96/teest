import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="basis-1/4 text-2xl font-bold uppercase p-5 text-main_blue">React!</h1>
            <ul className="flex">
                <li className="p-4">Strona główna</li>
                <li className="p-4">Portfolio</li>
                <li className="p-4">O mnie</li>
                <li className="p-4">Kontakt</li>
            </ul>
        </div>
    )
}

export default Navbar