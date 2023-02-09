import React from 'react';
import data from '../images/data.png'

const Analics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={data} alt="/"/>
                <div className="flex flex-col justify-center">
                    <p className="text-main_blue text-lg font-bold mx-auto text-center">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-3xl sm:text-3xl lg:text-4xl font-bold py-2 mx-auto text-center">Manage Data Analytics Centrally</h1>
                    <p className='mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore eius est ipsum necessitatibus, porro repellendus? Amet dolorum ducimus et illo maxime nam nihil quaerat qui quia, reiciendis vel voluptates?</p>
                    <button className="text-main_blue bg-black w-60 rounded-xl font-medium text-lg my-6 mx-auto py-3">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analics