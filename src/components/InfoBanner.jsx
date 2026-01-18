import React from 'react';
import { FaClock, FaDumbbell, FaUsers } from 'react-icons/fa';

const InfoBanner = () => {
    const styles = {
        container: {
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            padding: '5rem 10%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4rem',
        },
        item: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '350px',
        },
        icon: {
            fontSize: '2.5rem',
        },
        title: {
            fontSize: '1.1rem',
            fontWeight: '800',
            marginBottom: '0.2rem',
            textTransform: 'uppercase',
        },
        text: {
            fontSize: '0.9rem',
            fontWeight: '500',
            lineHeight: '1.4',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.item}>
                <div style={styles.icon}><FaClock /></div>
                <div>
                    <h4 style={styles.title}>Open 24/7</h4>
                    <p style={styles.text}>Train on your schedule, day or night. We never close.</p>
                </div>
            </div>

            <div style={styles.item}>
                <div style={styles.icon}><FaDumbbell /></div>
                <div>
                    <h4 style={styles.title}>Premium Equipment</h4>
                    <p style={styles.text}>Top-tier Hammer Strength and Eleiko gear for serious lifters.</p>
                </div>
            </div>

            <div style={styles.item}>
                <div style={styles.icon}><FaUsers /></div>
                <div>
                    <h4 style={styles.title}>Community Events</h4>
                    <p style={styles.text}>Monthly challenges, social mixers, and workshops included.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoBanner;
