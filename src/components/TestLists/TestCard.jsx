import React, { useState, useEffect } from 'react';

export default function TestCard(params) {
    return (
        <div className='cursor-pointer shadow-lg relative overflow-hidden  h-96 mt-10'>
            <div className='text-white absolute right-0 w-52 tag bg-[#cb7b7a] p-0 text-center text-xs'>
                <div className=' text-[10px]'>SUGGESTED</div>
            </div>
            <div className='p-5 h-full'>
                <div className="w-2/3 min-h-1/6 h-2/6 text-lg font-bold"> Kotlin (coding): entry-level algorithms</div>
                <div className='text-[13px] leading-relaxed'>This coding test assesses a candidate's ability to program a small algorithm in Kotlin,
                    testing their basic programming skills.
                    Using a short and straightforward coding task,
                    this test helps you identify developers with the most essential Kotlin skills.
                </div>
                <div className='flex absolute justify-between items-center bottom-6 w-5/6'>
                    <div className='flex'>
                        <div className='bg-[#ededed] px-3 py-2 rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </div>
                        <div className='bg-[#ededed] px-3 py-2 rounded text-[14px] font-semibold ml-2'>
                            Details
                        </div>
                    </div>
                    <div className='bg-[#44ab98] px-3 py-2 rounded text-white'>Add</div>
                </div>
            </div>

        </div>
    )
};
