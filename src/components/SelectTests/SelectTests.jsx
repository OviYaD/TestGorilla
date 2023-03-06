import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TestLists from '../TestLists/TestLists';


export default function SelectTests(params) {
    return <>
        <div className='mt-20'>
            <div className='info w-full text-sm bg-[#e9f0f1] p-3 rounded'>Your assessment can include up to 5 tests. Browse the test library and add the most relevant tests. Use different types of tests for the best results.</div>
            <div className='grid grid-cols-5 gap-10 mt-4'>
                <>
                    {/* <div className="p-4 rounded border-2 border-[#c8d6d9] border-dashed text-center text-sm text-[#c8d6d9] font-semibold">
                        1st test
                    </div> */}
                    <div className="p-4 rounded border-2 border-[#cca45f] text-left  text-sm text-white font-semibold bg-[#cca45f]">
                        <div className=' whitespace-nowrap w-full text-ellipsis overflow-hidden'>16 types  16 types 16 types</div>
                    </div>

                </>
                <div className="p-4 rounded border-2 border-[#c8d6d9] border-dashed text-center text-sm text-[#c8d6d9] font-semibold">
                    2st test
                </div>
                <div className="p-4 rounded border-2 border-[#c8d6d9] border-dashed text-center text-sm text-[#c8d6d9] font-semibold">
                    3st test
                </div>
                <div className="p-4 rounded border-2 border-[#c8d6d9] border-dashed text-center text-sm text-[#c8d6d9] font-semibold">
                    4st test
                </div>
                <div className="p-4 rounded border-2 border-[#c8d6d9] border-dashed text-center text-sm text-[#c8d6d9] font-semibold">
                    5st test
                </div>
            </div>
            <div className='mt-10 flex justify-between w-full'>
                <div className='w-2/6'>
                    <OutlinedInput
                        className='w-full text-black'
                        label="Search"
                        size="small"
                        placeholder='Search'
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
                </div>
                <div className='w-2/6'>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        className='w-full'
                        size="small"
                        // value={age}
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
            </div>
            <div className='mt-16 text-sm'>These are the tests currently available in <span className="font-semibold">English</span> .</div>
            <TestLists></TestLists>
        </div>
    </>
};
