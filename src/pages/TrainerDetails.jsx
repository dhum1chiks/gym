import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrainerProfileHero from '../components/TrainerProfileHero';
import TrainerInfo from '../components/TrainerInfo';
import TrainerSchedule from '../components/TrainerSchedule';
import TrainerBooking from '../components/TrainerBooking';

const TrainerDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const styles = {
        page: {
            backgroundColor: '#111',
            minHeight: '100vh',
            color: '#fff',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '4rem 5%',
            display: 'flex',
            gap: '4rem',
            position: 'relative',
        },
        mainContent: {
            flex: '2',
        },
        sidebar: {
            flex: '1',
            minWidth: '350px',
        }
    };

    return (
        <div style={styles.page}>
            <Navbar />

            <div style={styles.container} className="trainer-details-container">
                <div style={styles.mainContent}>
                    <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>
                        Home / Trainers / <span style={{ color: 'var(--color-primary)' }}>Sarah Jenkins</span>
                    </p>

                    <TrainerProfileHero />
                    <TrainerInfo />
                    <TrainerSchedule />
                </div>

                <div style={styles.sidebar} className="trainer-sidebar">
                    <TrainerBooking />
                </div>
            </div>

            <Footer />

            <style>{`
                @media (max-width: 968px) {
                    .trainer-details-container {
                        flex-direction: column;
                    }
                    .trainer-sidebar {
                        width: 100%;
                        min-width: unset !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default TrainerDetails;
