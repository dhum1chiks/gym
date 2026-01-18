import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import Philosophy from '../components/Philosophy';
import Mission from '../components/Mission';
import Team from '../components/Team';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <Philosophy />
            <Mission />
            <Team />
            <Footer />
        </>
    );
};

export default About;
