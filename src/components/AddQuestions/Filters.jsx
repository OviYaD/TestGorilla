import React, { useState, useEffect } from 'react';
import { StyledCheckbox } from '../Assests/StyledCheckBox';
import FormControl from '@mui/material/FormControl';
import { StyledInputLabel } from '../Assests/StylesInputLabel';
import { StyledOutlinedText } from '../Assests/StyledOutlinedText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export default function Filters(params) {
    return (
        <>
            <div className='text-sm font-bold'>Show questions from</div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">TestGorilla library</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">My library</div>
            </div>
            <div className="w-3/5">
                <FormControl className="w-full"  >
                    <StyledInputLabel id="demo-select-small">Search Question</StyledInputLabel>
                    <StyledOutlinedText
                        className='w-full text-black'
                        label="Search Question"
                        size="small"
                        id="outlined-adornment-password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className='text-sm font-bold mt-5'>Question type</div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Video</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Essay</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Multiple-choice</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">File upload</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Code</div>
            </div>
            <div className='text-sm font-bold mt-5'>Question category</div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Select all question categories</div>
            </div>
            <div className='text-sm font-bold mt-5'>General Questions</div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Prior experience</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Motivations</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Soft skills</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Job skills</div>
            </div>
            <div className='text-sm font-bold mt-5'>ROLE SPECIFIC QUESTIONS</div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Finance</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Customer service</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Sales</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Marketing</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">IT</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Administrative support</div>
            </div>
            <div className='flex items-center my-3'>
                <StyledCheckbox size="small" />
                <div className="text-sm ml-2">Management</div>
            </div>
        </>
    )
};
