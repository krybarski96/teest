import React from "react";
import money_icon from '../images/money_icon.png'

const Offert = () => {
    return (
        <div className="w-full py-32 px-4 bg-white">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-2xl flex flex-col bg-[#fff] p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem]" src={money_icon} alt="/"/>
                    <h2 className="text-2xl font-bold text-center py-8">Pakiet mini</h2>
                    <p className="text-center text-4xl font-bold">349 PLN</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 border-gray mt-8">Konsultacja przed sesją</p>
                        <p className="py-2 border-b mx-8 border-gray">Sesja około 1,5h</p>
                        <p className="py-2 border-b mx-8 border-gray">Wsparcie w pozowaniu, istrukcje i wskazówki</p>
                        <p className="py-2 border-b mx-8 border-gray">Możliwe 2 kreacje</p>
                        <p className="py-2 border-b mx-8 border-gray">7 starannie wyretuszowanych zdjęć</p>
                        <p className="py-2 border-b mx-8 border-gray">Sesja w plenerze, lokalu klienta lub studio(dodadtkowa opłata)</p>
                    </div>
                    <button className="text-black bg-main_blue w-48 rounded-xl font-medium text-lg my-6 px-4 mx-auto py-3">Biorę!</button>
                </div>

                <div className="w-full shadow-xl shadow-gray flex flex-col bg-[#fff] p-4 md:m-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem]" src={money_icon} alt="/"/>
                    <h2 className="text-2xl font-bold text-center py-8">Pakiet Standard</h2>
                    <p className="text-center text-4xl font-bold">549 PLN</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 border-gray mt-8">Konsultacja przed sesją</p>
                        <p className="py-2 border-b mx-8 border-gray">Sesja około 2h</p>
                        <p className="py-2 border-b mx-8 border-gray">Wsparcie w pozowaniu, istrukcje i wskazówki</p>
                        <p className="py-2 border-b mx-8 border-gray">Możliwe 2 kreacje</p>
                        <p className="py-2 border-b mx-8 border-gray">10 starannie wyretuszowanych zdjęć</p>
                        <p className="py-2 border-b mx-8 border-gray">Sesja w plenerze, lokalu klienta lub studio</p>
                    </div>
                    <button className="text-second_mustard bg-black w-48 rounded-xl font-medium text-lg my-6 px-4 mx-auto py-3">Biorę!</button>
                </div>

                <div className="w-full shadow-2xl flex flex-col bg-[#fff] p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem]" src={money_icon} alt="/"/>
                    <h2 className="text-2xl font-bold text-center py-8">Pakiet PRO</h2>
                    <p className="text-center text-4xl font-bold">849 PLN</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 border-gray mt-8">Konsultacja przed sesją</p>
                        <p className="py-2 border-b mx-8 border-gray">Sesja około 3h</p>
                        <p className="py-2 border-b mx-8 border-gray">Wsparcie w pozowaniu, istrukcje i wskazówki</p>
                        <p className="py-2 border-b mx-8 border-gray">Możliwe 3 kreacje</p>
                        <p className="py-2 border-b mx-8 border-gray">12 starannie wyretuszowanych zdjęć</p>
                        <p className="py-2 border-b mx-8 border-gray">Sesja w plenerze, lokalu klienta lub studio</p>
                    </div>
                    <button className="text-black bg-main_blue w-48 rounded-xl font-medium text-lg my-6 px-4 mx-auto py-3">Biorę!</button>
                </div>
            </div>
        </div>
    )
}

export default Offert