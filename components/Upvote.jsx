import React from 'react'

function Upvote({ thread }) {
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
    
    return (
        <div className="text-gray-600 font-bold px-3 flex justify-center items-center text-center">
            <div>
                {/* <span className=' inline-flex justify-center'> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>

                {/* </span> */}
                <span className='inline-flex justify-center text-xs  lg:text-sm '>
                    {kFormatter(thread?.data?.ups)}
                </span>
            </div>
        </div>
    )
}

export default Upvote