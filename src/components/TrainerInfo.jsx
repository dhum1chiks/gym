import React from 'react';
import { FaDumbbell, FaHeartbeat, FaRunning, FaCarrot } from 'react-icons/fa';

const TrainerInfo = () => {
    const specialties = [
        { icon: FaDumbbell, label: "Strength" },
        { icon: FaHeartbeat, label: "HIIT" },
        { icon: FaRunning, label: "Mobility" },
        { icon: FaCarrot, label: "Nutrition" },
    ];

    const styles = {
        section: {
            marginBottom: '4rem',
        },
        sectionTitle: {
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#fff',
            marginBottom: '1.5rem',
            borderLeft: '4px solid var(--color-primary)',
            paddingLeft: '1rem',
        },
        bioText: {
            color: '#ddd',
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '3rem',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
        },
        card: {
            backgroundColor: '#1E1E1E',
            padding: '2rem 1rem',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            border: '1px solid #333',
        },
        iconBox: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 208, 63, 0.1)', // Low opacity yellow
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--color-primary)', // Yellow Icon
            fontSize: '1.2rem',
        },
        label: {
            color: '#fff',
            fontWeight: '700',
            fontSize: '0.95rem',
        }
    };

    return (
        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Biography</h2>
            <div style={styles.bioText}>
                <p style={{ marginBottom: '1rem' }}>
                    Starting her journey as a competitive track athlete, Sarah realized early on the power of proper biomechanics and disciplined training. After suffering a career-altering injury in college, she pivoted her focus toward rehabilitation and functional movement, obtaining her Masters in Kinesiology.
                </p>
                <p>
                    Over the last decade, she has worked with everyone from professional athletes looking to improve their explosive power to postpartum mothers regaining their core strength. Her approach combines data-driven programming with a supportive, high-energy coaching style that pushes clients past their perceived limits.
                </p>
            </div>

            <h2 style={styles.sectionTitle}>Specialties</h2>
            <div style={styles.grid}>
                {specialties.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.iconBox}>
                            <item.icon />
                        </div>
                        <span style={styles.label}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainerInfo;
