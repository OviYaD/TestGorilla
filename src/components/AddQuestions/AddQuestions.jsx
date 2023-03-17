import React, { useState, useEffect } from 'react';
import ListSelectedTests from './ListSelectedTests';
import QuestionType from './QuestionType';
import Library from './Library';

export default function AddQuestions(params) {
    return (
        <div className='mt-16 relative'>
            <div className='info w-full text-sm bg-[#e9f0f1] p-3 rounded'>
                You are using the <span className='font-semibold'>JavaScript Developer</span> template which includes some custom questions. You can edit, remove, or customize these questions.
            </div>
            <ListSelectedTests></ListSelectedTests>
            <div className='mt-10 font-bold'>Create custom question from scratch...</div>
            <QuestionType></QuestionType>
            <Library></Library>

        </div>
    )
};
