import React from 'react'

const CTA = () => {
    return (
        <div className='bg-gradient-to-r from-[#106FB3] via-maintext to-[#1A1640] py-20 md:h-[400px] flex items-center justify-center px-6'>
            <div className='max-w-[700px] w-full text-white text-center'>
                <p className='text-3xl md:text-[60px] leading-tight md:leading-[54px]'>
                    Let’s build the <span className="text-point-text font-semibold">future</span> <br className="hidden md:block" />
                    of your business together.
                </p>
                <button className="mt-8 hover:bg-button-hover-bg hover:border-point-text text-white border cursor-pointer border-white px-8 py-3 rounded-full font-medium transition w-fit sm:w-auto">
                    Connect With Us
                </button>
            </div>
        </div>
    )
}

export default CTA