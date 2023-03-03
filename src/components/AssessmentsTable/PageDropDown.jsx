import React, { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export default function PageDropDown({ itemsPerPageCount, setItemsPerPageCount }) {
    const [openCountPicker, setOpenCountPicker] = useState(false);
    return (<>
        <div className='relative'>
            <div className=' text-[rgba(0,0,0,0.54)] cursor-pointer ml-4 flex justify-between border-b-[1.8px] w-16 text-left pb-1 ' onClick={() => setOpenCountPicker(true)}>
                <div className='text-xs text-black'>{itemsPerPageCount}</div>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </div>
            </div>
            {openCountPicker &&
                <OutsideClickHandler onOutsideClick={() => setOpenCountPicker(false)} >
                    <div className='z-50 absolute text-black text-sm top-[-10px] left-[-10px] bg-white shadow-lg  ' style={{ boxShadow: " 0 2px 4px -1px #0003, 0 4px 5px #00000024, 0 1px 10px #0000001f" }}>
                        <div className={`pl-3 pr-16 py-2 cursor-pointer  ${itemsPerPageCount === "10" ? "bg-[#f5d7bb]" : "hover:bg-slate-50"}`} onClick={() => { setItemsPerPageCount("10"); setOpenCountPicker(false) }}>10</div>
                        <div className={`pl-3 pr-16 py-2 cursor-pointer ${itemsPerPageCount === "25" ? "bg-[#f5d7bb]" : "hover:bg-slate-50"}`} onClick={() => { setItemsPerPageCount("25"); setOpenCountPicker(false) }}>25</div>
                        <div className={`pl-3 pr-16 py-2 cursor-pointer ${itemsPerPageCount === "50" ? "bg-[#f5d7bb]" : "hover:bg-slate-50"}`} onClick={() => { setItemsPerPageCount("50"); setOpenCountPicker(false) }}>50</div>
                    </div>
                </OutsideClickHandler>
            }
        </div>
    </>)
};
