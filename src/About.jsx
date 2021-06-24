//FUll PROJECT:-🔴Complete Responsive Animated Website using ReactJS
import React from 'react';
import web from '../src/images/hero-img.svg';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
}

export default About;