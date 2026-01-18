import React from 'react';
import { FaBolt, FaHeartbeat, FaFire, FaDumbbell } from 'react-icons/fa';

const ProgramStats = () => {
    const stats = [
        {
            icon: FaBolt,
            title: "Explosive Power",
            desc: "Increase your vertical jump and sprint speed through plyometric drills."
        },
        {
            icon: FaHeartbeat,
            title: "Cardiovascular Health",
            desc: "Significantly improve your VO2 max and heart health."
        },
        {
            icon: FaFire,
            title: "Fat Loss",
            desc: "Maximize calorie burn during and after workouts with high intensity intervals."
        },
        {
            icon: FaDumbbell,
            title: "Lean Muscle",
            desc: "Build functional strength without the bulk through bodyweight resistance."
        }
    ];

    const styles = {
        section: {
            marginBottom: '4rem',
        },
        title: {
            fontSize: '1.8rem',
            color: '#fff',
            marginBottom: '2rem',
            fontWeight: '800',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
        },
        card: {
            backgroundColor: '#1E1E1E',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #333',
            display: 'flex',
            gap: '1.5rem',
        },
        iconBox: {
            minWidth: '50px',
            height: '50px',
            backgroundColor: 'rgba(51, 51, 51, 0.5)',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--color-primary)',
            fontSize: '1.2rem',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
        },
        cardTitle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
        },
        cardDesc: {
            color: '#aaa',
            fontSize: '0.9rem',
            lineHeight: '1.5',
        }
    };

    return (
        <div style={styles.section}>
            <h2 style={styles.title}>What You'll Achieve</h2>
            <div style={styles.grid}>
                {stats.map((stat, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.iconBox}>
                            <stat.icon />
                        </div>
                        <div style={styles.cardContent}>
                            <h3 style={styles.cardTitle}>{stat.title}</h3>
                            <p style={styles.cardDesc}>{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramStats;
