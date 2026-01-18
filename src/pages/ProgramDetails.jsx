import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramHero from '../components/ProgramHero';
import ProgramSidebar from '../components/ProgramSidebar';
import ProgramStats from '../components/ProgramStats';
import ProgramSchedule from '../components/ProgramSchedule';
import ProgramTrainer from '../components/ProgramTrainer';

const ProgramDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load
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
            <ProgramHero />

            <div style={styles.container} className="program-details-container">
                <div style={styles.mainContent}>
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1rem' }}>
                            About the Program
                        </h2>
                        <div style={{ backgroundColor: '#1E1E1E', padding: '2rem', borderRadius: '8px', border: '1px solid #333', color: '#aaa', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                HIIT Revolution isn't just a workout; it's a complete metabolic overhaul. Designed by elite athletic trainers, this 4-week intensive course utilizes the science of EPOC (Excess Post-exercise Oxygen Consumption) to keep your body burning calories for hours after you leave the gym.
                            </p>
                            <p>
                                Whether you're an athlete looking to break a plateau or a fitness enthusiast ready to step up your game, the combination of plyometrics, sprint intervals, and functional strength training will challenge every muscle fiber in your body.
                            </p>
                        </div>
                    </div>

                    <ProgramStats />
                    <ProgramSchedule />
                    <ProgramTrainer />
                </div>

                <div style={styles.sidebar} className="program-sidebar generic-sidebar">
                    <ProgramSidebar />
                </div>
            </div>

            <Footer />

            <style>{`
                @media (max-width: 968px) {
                    .program-details-container {
                        flex-direction: column;
                    }
                    .program-sidebar {
                        width: 100%;
                        min-width: unset !important;
                    }
                     .generic-sidebar > div {
                        position: static !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProgramDetails;
