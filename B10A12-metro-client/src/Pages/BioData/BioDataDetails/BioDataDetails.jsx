import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BioDataDetails = () => {

    const{
        biodataId,
        biodataType,
        profileImage,
        permanentDivision,
        age,
        occupation } = useLoaderData();
    

    return (
        <div>
            <h2>BioData Details for : {biodataId} </h2>
            <p>{biodataType}</p>
            <p>{biodataType}</p>
            
        </div>
    );
};

export default BioDataDetails;