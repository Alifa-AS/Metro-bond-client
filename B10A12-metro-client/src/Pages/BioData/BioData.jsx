import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import coverImg from '../../assets/Cover/cover1.jpg'

const BioData = () => {
    return (
        <div>
            <Helmet>
                 <title>Metro || Bio Data</title>
            </Helmet>
            <Cover img={coverImg} title="Your Bio-Data, Your Identity" />
        </div>
    );
};

export default BioData;