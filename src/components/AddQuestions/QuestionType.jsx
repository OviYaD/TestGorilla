import React, { useState, useEffect } from 'react';

export default function QuestionType(params) {
    return (
        <div className="mt-5 flex  justify-between w-full items-center ">
            <div className="type-container bg-[#e9f0f1] hover:bg-[#46a997] hover:rounded-md cursor-pointer hover:text-white w-44 py-7  flex items-center flex-col">
                <div className='custom-type-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                    </svg>
                </div>
                <span className="font-bold mt-1">Video</span>
            </div>
            <div className="type-container bg-[#e9f0f1] hover:bg-[#46a997] hover:rounded-md cursor-pointer hover:text-white w-44 py-7 flex items-center flex-col">
                <div className='custom-type-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-text-paragraph" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <span className="font-bold mt-1">Essay</span>
            </div>
            <div className="type-container bg-[#e9f0f1] hover:bg-[#46a997] hover:rounded-md cursor-pointer hover:text-white w-44 py-7 flex items-center flex-col">
                <div className='custom-type-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                <span className="font-bold mt-1">Multiple-choice</span>
            </div>
            <div className="type-container bg-[#e9f0f1] hover:bg-[#46a997] hover:rounded-md cursor-pointer hover:text-white w-44 py-7 flex items-center flex-col">
                <div className='custom-type-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                        <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                </div>
                <span className="font-bold mt-1">File upload</span>
            </div>
            <div className="type-container bg-[#e9f0f1] hover:bg-[#46a997] hover:rounded-md cursor-pointer hover:text-white w-44 py-7 flex items-center flex-col">
                <div className='custom-type-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                </div>
                <span className="font-bold mt-1">Code</span>
            </div>

        </div>
    )
};