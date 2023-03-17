import React, { useState, useEffect } from 'react';
import img from "../../assets/icon.jpeg"
export default function Card(params) {
    const [showmore, setShowmore] = useState(false);
    return (
        <div className="z-40 mr-[-10px] box-shadow rounded  shadow bg-blue  mb-5">
            <div className="p-5">
                <div className='text-sm font-bold '>Describing contributions</div>
                <div className='flex justify-start items-center border-b py-4 border-grey'>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-paragraph" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span className='ml-2 text-xs'>Essay</span>
                    </div>
                    <div className='px-4'>|</div>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                        </svg>
                        <span className='ml-2 text-xs'>5 mins</span>
                    </div>
                    <div className='px-4'>|</div>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                        </svg>
                        <span className='ml-2 text-xs'>TestGorilla library</span>
                    </div>
                </div>
                <div className='py-5 text-sm'>
                    What can you bring to this role that you are confident other applicants cannot?
                </div>
                <div className="mt-3 flex justify-between">
                    {!showmore ?
                        <div className=' cursor-pointer flex items-center text-[#46a997]' onClick={() => setShowmore((showmore) => !showmore)}>
                            <span className='text-sm font-bold mr-1'>show more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div> :
                        <div className='cursor-pointer flex items-center text-[#46a997]' onClick={() => setShowmore((showmore) => !showmore)}>
                            <span className='text-sm font-bold mr-1'>hide</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>}
                    <div className="btn-p cursor-pointer flex justify-center space-x-1 items-center">
                        <div>Add</div>
                    </div>
                </div>
            </div>
            {
                showmore && <div className="bg-[#f8f8f8] grid grid-cols-2 gap-2 p-5">
                    <div>
                        <div className='text-sm font-bold mb-3 '>Why is this question relevant?</div>
                        <div className="text-[13px]">This question provides insight into a candidate's learning and growth mindset, which is essential for a rapidly evolving field such as IT.</div>
                    </div>
                    <div>
                        <div className='text-sm font-bold mb-3'>What to look for in the answer?</div>
                        <div className="text-[13px]">In a candidate's answer, look for signs that they recognize the importance of staying abreast of changes in the IT space. Resources a candidate may use to remain current with technological advancements include professional organizations, industry conferences and tech events, tech news and blogs, podcasts, and startup news feeds, among others.</div>
                    </div>
                </div>
            }

        </div>
    )
};
