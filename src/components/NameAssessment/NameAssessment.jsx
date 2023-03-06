import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { StyledTextField } from '../Assests/StyledTextField';
import { StyledSelect } from '../Assests/StylesSelect';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { StyledInputLabel } from '../Assests/StylesInputLabel';
import { StyledRadio } from '../Assests/StyledRadio';



export default function NameAssessment(params) {
    return (<>
        <div className='mt-10 w-full'>
            <div className="w-full flex justify-center items-center">
                <div className='w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                </div>
                <div className="w-full">
                    <StyledTextField
                        required
                        size="small"
                        className='w-full '
                        id="outlined-required"
                        label="Name your assessment"
                    />
                </div>

            </div>
            <div className="w-full mt-7 flex justify-center items-center">
                <div className='w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                </div>
                <div className="w-full">
                    <FormControl className="w-full" size='small' >
                        <StyledInputLabel id="demo-select-small">Language of assessment</StyledInputLabel>
                        <StyledSelect
                            labelId="demo-select-small"
                            id="demo-select-small"
                            className='2w-full'
                            label="Language of assessment"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </StyledSelect>
                    </FormControl>
                </div>

            </div>
            <div className="w-full mt-7 flex justify-center items-center">
                <div className='w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                </div>
                <div className="w-full">
                    <FormControl className="w-full" size='small' >
                        <StyledInputLabel id="demo-select-small">Job role</StyledInputLabel>
                        <StyledSelect
                            labelId="demo-select-small"
                            id="demo-select-small"
                            className='2w-full'
                            label="Job role"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </StyledSelect>
                    </FormControl>
                </div>

            </div>
            <div className="w-full mt-7 flex justify-center items-start">
                <div className='w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                </div>
                <div className="w-full">
                    <div className="text-sm">Created by</div>
                    <div className="w-full grid grid-cols-2">
                        <div className="border p-8">
                            <FormControlLabel value="default" control={<StyledRadio />} label={<div className="font-bold text-sm">Using an assessment template</div>} />
                            <div className='text-sm'>Apply the <span className="font-bold">JavaScript Developer</span> ready-made assessment and customize it by removing or changing tests and custom questions.</div>
                        </div>
                        <div className="border p-8">
                            <FormControlLabel value="custom" control={<StyledRadio />} label={<div className="font-bold text-sm">Building your own</div>} />
                            <div className='text-sm'>Select your own tests and custom questions</div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </>)
};