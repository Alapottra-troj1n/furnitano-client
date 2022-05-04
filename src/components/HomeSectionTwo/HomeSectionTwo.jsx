import React from 'react';

const HomeSectionTwo = () => {
    return (
        <div className='container mx-auto my-20'>
            <h2 className="text-center text-3xl lg:text-5xl mb-10 font-semibold">Have More Questions ?</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense'>

                <form className='flex flex-col justify-center gap-5 items-center p-5'>
                    <h2 className="text-2xl lg:text-4xl font-semibold mb-16">Contact Us</h2>

                    <input type="email" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10" name="email" placeholder='Email' required />

                    <input type="text" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10" name="subject" placeholder='Subject' required />

                    <textarea type="text" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm p-2 h-40" name="message" placeholder='Message' required />
                    <button className="btn px-10">Submit</button>
                 

                </form>
                

                <div>
                <img src="https://i.ibb.co/VxBtzrV/Thinking-face-rafiki.png" className="w-3/4" alt="" />
                </div>


            </div>


        </div>
    );
};

export default HomeSectionTwo;