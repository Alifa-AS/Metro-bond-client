import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md: w-3/12 mx-auto text-center py-4'>
            <h3 className='text-3xl font-bold mb-2 text-[#b46a48]'>{heading}</h3>
            <p className='text-yellow-400 mb-8 border-y-2'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;