import React, { useState, useEffect } from 'react';
import TestCard from './TestCard';

export default function TestLists(params) {
    return (
        <div className='grid gap-12 grid-cols-4'>
            <TestCard></TestCard>
            <TestCard></TestCard>
            <TestCard></TestCard>
            <TestCard></TestCard>
        </div>
    )
};
