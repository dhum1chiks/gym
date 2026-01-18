import React from 'react';
import { FaBolt, FaUsers, FaBrain } from 'react-icons/fa';

const Mission = () => {
    const styles = {
        section: {
            padding: '6rem 5%',
            backgroundColor: 'var(--color-bg-light)', // Subtle contrast
            textAlign: 'center',
        },
        heading: {
            fontSize: '2rem',
            marginBottom: '4rem',
            letterSpacing: '2px',
            position: 'relative',
            display: 'inline-block',
        },
        underline: {
            width: '60px',
            height: '4px',
            backgroundColor: 'var(--color-primary)',
            margin: '0.5rem auto 0',
            borderRadius: '2px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
        },
        iconWrapper: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(51, 51, 51, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1.5rem',
            fontSize: '2rem',
            color: 'var(--color-primary)', // Yellow Icon
            transition: 'transform 0.3s',
        },
        cardTitle: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#fff',
        },
        cardText: {
            color: '#aaa',
            lineHeight: '1.6',
            fontSize: '0.95rem',
            maxWidth: '300px',
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.heading}>
                OUR MISSION
                <div style={styles.underline}></div>
            </div>

            <div style={styles.grid}>
                <div style={styles.card}>
                    <div style={styles.iconWrapper}><FaBolt /></div>
                    <h3 style={styles.cardTitle}>High Intensity</h3>
                    <p style={styles.cardText}>Workouts designed to maximize calorie burn and metabolic rate long after you leave.</p>
                </div>
                <div style={styles.card}>
                    <div style={styles.iconWrapper}><FaUsers /></div>
                    <h3 style={styles.cardTitle}>Elite Community</h3>
                    <p style={styles.cardText}>Surround yourself with driven individuals who push each other to be 1% better every day.</p>
                </div>
                <div style={styles.card}>
                    <div style={styles.iconWrapper}><FaBrain /></div>
                    <h3 style={styles.cardTitle}>Mental Fortitude</h3>
                    <p style={styles.cardText}>Building resilience that transcends the gym walls and impacts every area of your life.</p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
