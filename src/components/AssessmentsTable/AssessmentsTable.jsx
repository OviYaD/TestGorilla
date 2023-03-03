import React, { useState, useEffect } from 'react';
import PageDropDown from './PageDropDown';
import ActionOptions from './ActionOptions';

export default function AssessmentsTable(params) {

    const [itemsPerPageCount, setItemsPerPageCount] = useState("10");


    return (<>
        <div className=' flex justify-center rounded-md '>
            <table className=' bg-white border-b shadow-md'>
                <tr className='border-b w-screen '>
                    <th className='bg-white text-left px-4 pr-60   py-4 text-sm'>Name</th>
                    <th className='bg-white text-left px-8 py-4 text-sm'>Candidates</th>
                    <th className='bg-white text-left px-8 pr-48 py-4 text-sm'>Progress</th>
                    <th className='bg-white text-left px-4 py-4 text-sm'>Last Activity</th>
                    <th className='bg-white text-left px-4 py-4 text-sm'>Date Created</th>
                    <th className='bg-white text-left px-4 py-4 text-sm' >Actions</th>
                </tr>
                <tr className='hover:bg-[#f5d7bb]  cursor-pointer'>
                    <td className=' text-left px-4 py-4 text-sm'>Alfreds Futterkiste</td>
                    <td className=' text-left px-8 py-4 text-sm'>0</td>
                    <td className=' text-left px-8 py-4 text-sm'>Italy</td>
                    <td className=' text-left px-4 py-4 text-sm'>about 2 hours ago</td>
                    <td className=' text-left px-4 py-4 text-sm'>less than a minute ago</td>
                    <td className=' text-center px-4 pl-8 py-4 text-sm '>
                        <ActionOptions></ActionOptions>
                    </td>
                </tr>
                <tr>
                    <td className="" colSpan="3"></td>
                    <td className="px-4 py-4  text-right" colSpan="3">
                        <div className='flex justify-between pr-4'>
                            <div className='flex'>
                                <div className="text-xs text-[rgba(0,0,0,0.54)]">Items per page</div>
                                <PageDropDown setItemsPerPageCount={setItemsPerPageCount} itemsPerPageCount={itemsPerPageCount}></PageDropDown></div>
                            <div className="text-xs text-[rgba(0,0,0,0.54)]">1 - 2 of 2</div>
                            <div className="text-xs text-[rgba(0,0,0,0.54)] flex w-14 justify-between ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>

                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </>)
};
