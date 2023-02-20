import React from "react";

const Newsletter = () => {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-2xl sm:text-2xl lg:text-3xl font-bold py-2">Chcesz mieć swoją internetową wizytówkę?</h1>
                    <p>Zaloguj się do newsletter-a i bądź na bieżąco</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black"
                               type="email"
                               placeholder="Enter Email"/>
                        <button className="text-black  bg-main_blue w-60 rounded-xl font-medium text-lg ml-4 my-6 px-6 mx-auto py-3">Dołącz</button>
                    </div>
                    <p className="text-right">Przeczytaj naszą <span className="text-main_blue">politykę prywatności</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter