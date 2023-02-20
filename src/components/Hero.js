import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (

        <div className="text-white -mt-[96px] bg-mountain bg-no-repeat bg-cover bg-black bg-auto bg-blend-overlay">
            <div className="max-w-screen-xl w-full h-screen pt-[96px]  mx-auto text-center flex flex-col justify-center">
                <p className="text-main_blue text-xl font-bold p-2">Witaj, jestem Kamil!</p>
                <h1 className="sm:text-4xl md:text-4xl lg:text-4xl py-4 font-bold">Zajmuje się tworzeniem stron internetowych!</h1>
                <div className="flex justify-center items-center">
                    <Typed className="sm:text-2xl md:text-xl lg:text-xl py-4"
                           strings={['Szybko','Profesjonalnie','Na każdą kieszeń...']}
                           typeSpeed={100}
                           backSpeed={20}
                           loop/>
                </div>
                <p className="sm:text-l md:text-l lg:text-l font-bold text-gray uppercase">Nadaj wartość dla swojego biznesu, pokaż się w sieci i dotrzyj do nowych klientów</p>
                <button className=" text-black bg-main_blue w-60 rounded-xl font-medium text-lg my-6 mx-auto py-3">Zaczynamy!</button>
            </div>
        </div>
    )
}

export default Hero