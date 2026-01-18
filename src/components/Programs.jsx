import React from 'react';
import { FaFire, FaDumbbell, FaYinYang } from 'react-icons/fa';

const Programs = () => {
    const programs = [
        {
            title: "Yoga Flow",
            icon: <FaYinYang />,
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop",
            desc: "Find your balance and flexibility."
        },
        {
            title: "HIIT Burn",
            icon: <FaFire />,
            image: "https://images.unsplash.com/photo-1517963879433-6ad2b05b8f1e?q=80&w=2069&auto=format&fit=crop",
            desc: "High energy cardio for max burn."
        },
        {
            title: "Strength & Power",
            icon: <FaDumbbell />,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
            desc: "Build muscle and raw power."
        }
    ];

    const styles = {
        section: {
            padding: '6rem 5%',
            backgroundColor: 'var(--color-bg)',
        },
        header: {
            marginBottom: '4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem'
        },
        title: {
            fontSize: '3.5rem',
            lineHeight: '1',
            textTransform: 'uppercase',
            fontStyle: 'italic',
        },
        subtitle: {
            color: '#aaa',
            maxWidth: '500px',
            lineHeight: '1.6',
            letterSpacing: '0.5px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
        },
        card: {
            position: 'relative',
            height: '450px',
            borderRadius: '4px',
            overflow: 'hidden',
            cursor: 'pointer',
            group: 'card',
        },
        bgImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
        },
        overlay: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2rem',
        },
        iconWrapper: {
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
        cardTitle: {
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
        }
    };

    return (
        <section id="programs" style={styles.section}>
            <div style={styles.header}>
                <div>
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Our Programs</h4>
                    <h2 style={styles.title}>TRAIN <span style={{ color: '#555' }}>YOUR WAY</span></h2>
                </div>
                <p style={styles.subtitle}>
                    Choose from our specialized programs designed to push your limits.
                    Whether you want to build mass or increase flexibility, we have a path for you.
                </p>
            </div>

            <div style={styles.grid}>
                {programs.map((prog, index) => (
                    <div key={index} style={styles.card} className="program-card">
                        <img src={prog.image} alt={prog.title} style={styles.bgImage} />
                        <div style={styles.overlay}>
                            <div style={styles.iconWrapper}>{prog.icon}</div>
                            <h3 style={styles.cardTitle}>{prog.title}</h3>
                            <p style={{ color: '#ccc' }}>{prog.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Programs;
