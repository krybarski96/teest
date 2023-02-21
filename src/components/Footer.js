import React from "react";
import {
    FaDribbble,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'
import logo from "../images/logo.svg";

const Footer = () => {
    return (
        <div className="max-w-screen-xl bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white ">
            <div>
                <img className="max-h-20 p-2" src={logo} alt="/"/>
                <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam, dolorem earum et expedita ipsum numquam saepe sequi veniam. Beatae expedita officia sequi ut.</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare className="hover:text-second_mustard" size={30}/>
                    <FaInstagram  className="hover:text-second_mustard" size={30}/>
                    <FaTwitterSquare className="hover:text-second_mustard" size={30}/>
                    <FaGithubSquare className="hover:text-second_mustard" size={30}/>
                    <FaDribbble className="hover:text-second_mustard" size={30}/>
                </div>
            </div>

            <div className="lg:col-span-2 flex justify-between mt-6 ml-6">
                <div>
                    <h6 className="font-medium text-second_mustard">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Statystyki</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Wyposażenie</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-second_mustard">Wsparcie</h6>
                    <ul>
                        <li className="py-2 text-sm">Cena</li>
                        <li className="py-2 text-sm">Dokumentacja</li>
                        <li className="py-2 text-sm">Oprogramowanie</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-second_mustard">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Jobs</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer