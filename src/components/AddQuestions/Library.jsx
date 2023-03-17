import React, { useState, useEffect } from 'react';
import { StyledCheckbox } from '../Assests/StyledCheckBox';
import FormControl from '@mui/material/FormControl';
import { StyledInputLabel } from '../Assests/StylesInputLabel';
import { StyledOutlinedText } from '../Assests/StyledOutlinedText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Filters from './Filters';
import SearchResult from './SearchResult';


export default function Library(params) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (<>
        <div className="border-t mt-10">
            <div className='mt-10 font-bold'>...or use custom questions from our library</div>
            <div className="flex pt-10 ">
                <div className="w-[22%] overflow-scroll search-max-height">
                    <Filters></Filters>

                </div>
                <div className="w-[78%] overflow-scroll search-max-height relative px-5">
                    <div className='text-sm font-bold mb-5'>158 questions listed below</div>
                    <SearchResult></SearchResult>
                </div>
            </div>
        </div>
    </>)
};
