import React, { useState, useEffect } from 'react';
import style from "./AssessmentPage.scss";
import Footer from '../components/Footer/Footer';
import AssessmentsTable from '../components/AssessmentsTable/AssessmentsTable';
import Navbar from '../components/NavBar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';


export default function AssessmentPage(params) {
    const [showList, setShowList] = useState("active");
    const [playVideo, setPlayVideo] = useState(false);

    const navigate = useNavigate();
    const { tab } = useParams();

    return (<>
        <Navbar></Navbar>
        <div className="p-16 container  mt-14 min-h-screen max-h-fit max-w-full bg-[#f5f6f6] mr-0 ">
            <div className=" flex justify-between items-center">
                <div className='header font-bold text-xl'>My assessments </div>
                <div className="btn-p cursor-pointer flex justify-center space-x-1 items-center" onClick={() => navigate("/assessment/create")}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                    <div>Create new assessment</div>
                </div>
            </div>
            <div className='flex justify-start  border-[#e0e0e0] border-solid rounded mt-10'>
                <div className={`border cursor-pointer border-r-0 pl-4 pt-2.5 pr-4 pb-2.5 rounded   ${showList === "active" ? "bg-[#276678]  text-white font-semibold" : " bg-[#fff]"}`} onClick={() => setShowList("active")}>Active</div>
                <div className={`border cursor-pointer border-r-0 pl-4 pt-2.5 pr-4 pb-2.5 rounded   ${showList === "archive" ? "bg-[#276678]  text-white font-semibold" : " bg-[#fff]"}`} onClick={() => setShowList("archive")}>Archived</div>
            </div>
            <div className='flex justify-center mt-10 pb-10 '>
                <div className='w-10/12' onClick={() => setPlayVideo(true)}>
                    <img src='https://app.testgorilla.com/assets/product_tour_thumbnail.png' alt="image"></img>
                </div>
            </div>
            <AssessmentsTable></AssessmentsTable>

        </div>
        <Footer></Footer>
        {playVideo &&
            <>
                <div className='bg-black opacity-60 top-[-100px] right-0 bottom-0 left-0 w-full fixed'>
                </div>
                <div className='fixed top-5 right-5 bg-[rgb(255,255,255)] p-2 rounded-full cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={() => setPlayVideo(false)}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>
                <div>
                    <iframe className='w-full mt-[5%]  fixed top-0 right-0 bottom-0 left-0 w-full' width="80%" height="80%" src="https://player.vimeo.com/video/667884755?h=7eca24f959&title=0&byline=0&autoplay=1&app_id=122963">
                    </iframe>
                </div>
            </>
        }
    </>)
};
