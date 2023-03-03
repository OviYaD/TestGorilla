import React, { useState, useEffect } from 'react';
import style from "./StatusBar.module.scss"
export default function StatusBar(params) {
    return (<>
        <div className='relative'>
            <div className='grid grid-cols-4 w-screen ml-[-5rem]  text-center mt-14'>
                <div>
                    <div className={style.status}>1</div>
                    <div className='mt-2 text-[#276678] text-base font-semibold'>Name assessment</div>
                </div>
                <div>
                    <div className={style.status}>2</div>
                    <div className='mt-2 text-[#276678] text-base font-semibold'>Select tests</div>
                </div>
                <div>
                    <div className={style.status}>3</div>
                    <div className='mt-2 text-[#276678] text-base font-semibold'>Add questions</div>
                </div>
                <div>
                    <div className={style.status}>4</div>
                    <div className='mt-2 text-[#276678] text-base font-semibold'>Review & configure</div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-[5rem] absolute top-5 ml-32 '>
                <div className=' h-1 w-[15.4rem] bg-[#c8d6d9]'></div>
                <div className='h-1 w-[15.4rem] bg-[#c8d6d9]'></div>
                <div className='h-1 w-[15.4rem] bg-[#c8d6d9]'></div>
            </div>
        </div>
    </>)
};
