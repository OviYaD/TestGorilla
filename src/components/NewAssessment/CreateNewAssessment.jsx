import React, { useState, useEffect } from 'react';
import NameAssessment from '../NameAssessment/NameAssessment';
import SelectTests from '../SelectTests/SelectTests';
import StatusBar from '../StatusBar/StatusBar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

export default function CreateNewAssessment(params) {
    const { tab } = useParams();
    const navigate = useNavigate();

    const handleNext = () => {
        if (tab === "new") {
            navigate("/assessment/create/select");
        }
        if (tab === "select") {
            navigate("/assessment");
        }
    }
    return (<>
        <Navbar></Navbar>
        <div className="p-16 container  mt-14 min-h-screen max-h-fit max-w-full bg-white mr-0 ">
            <div className=" flex justify-between items-center">
                <div className='flex'>
                    <div className='bg-[#f5f6f6] px-5 py-4 mr-6 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <div className='header font-bold text-xl'>Create new assessment
                        <div className='text-[#276678] flex text-base  font-semibold'>
                            Untitled assessment
                            <span className='flex justify-center items-center ml-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge mr-1" viewBox="0 0 16 16">
                                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                                </svg>0 tests
                            </span>
                            <span className='flex justify-center items-center ml-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch mr-1" viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                </svg>0 mins
                            </span>
                        </div>
                    </div>
                </div>
                <div className="btn-p cursor-pointer flex justify-center space-x-1 items-center">
                    <div onClick={handleNext}>Next step</div>
                </div>
            </div>
            <StatusBar></StatusBar>
            <SelectTests></SelectTests>

            {/* <NameAssessment></NameAssessment> */}
            {tab === "new" && <NameAssessment></NameAssessment>}
            {tab === "select" && <SelectTests></SelectTests>}
        </div>
    </>)
};
