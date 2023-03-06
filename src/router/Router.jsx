import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NameAssessment from '../components/NameAssessment/NameAssessment';
import SelectTests from '../components/SelectTests/SelectTests';
import AssessmentPage from '../pages/AssessmentPage';
import CreateNewAssessment from '../components/NewAssessment/CreateNewAssessment';

export default function Router() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/assessment" element={<AssessmentPage />} />
                <Route path="/" element={<CreateNewAssessment />} />
                <Route path="/assessment/create/:tab" >
                    <Route path="" element={<CreateNewAssessment />} ></Route>
                    <Route path="new" element={<NameAssessment />}></Route>
                    <Route path="select" element={<SelectTests />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}