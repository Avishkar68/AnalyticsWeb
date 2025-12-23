import React from 'react'

const CTA = () => {
    return (
        <div className='bg-linear-to-r from-[#106FB3] via-maintext to-[#1A1640] h-[400px] flex items-center justify-center'>
            <div className='w-[700px] text-white text-center'>
                <p className='text-[60px] leading-[54px]'>Let’s build the <span className="text-point-text font-semibold">future</span> <br />
                    of your business together.</p>
                <button className=" mt-8 hover:bg-button-hover-bg  hover:border-point-text text-white hover:text-white border cursor-pointer border-white px-6 py-3 rounded-full font-medium transition">
                    Connect With Us
                </button>
            </div>

        </div>
    )
}

export default CTA
