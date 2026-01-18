import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Trainers from '../components/Trainers';
import InfoBanner from '../components/InfoBanner';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <InfoBanner />
            <Programs />
            <Trainers />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Home;
