import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrainerHeader from '../components/TrainerHeader';
import TrainerGrid from '../components/TrainerGrid';

const Trainers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const styles = {
        page: {
            backgroundColor: '#111',
            minHeight: '100vh',
            width: '100%',
        }
    };

    return (
        <div style={styles.page}>
            <Navbar />
            <TrainerHeader />
            <TrainerGrid />
            <Footer />
        </div>
    );
};

export default Trainers;
