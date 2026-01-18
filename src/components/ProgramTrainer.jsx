import React from 'react';
import { FaLink } from 'react-icons/fa';

const ProgramTrainer = () => {
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
        card: {
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            border: '1px solid #333',
        },
        imageContainer: {
            width: '300px',
            minHeight: '300px',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        content: {
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
        },
        name: {
            fontSize: '2rem',
            color: '#fff',
            fontWeight: '800',
            marginBottom: '0.5rem',
        },
        role: {
            color: 'var(--color-primary)', // Yellow Accent
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            letterSpacing: '1px',
        },
        bio: {
            color: '#aaa',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '600px',
        },
        links: {
            display: 'flex',
            gap: '1rem',
        },
        icon: {
            color: '#fff',
            fontSize: '1.2rem',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.section}>
            <h2 style={styles.title}>Meet Your Trainer</h2>
            <div style={styles.card}>
                <div style={styles.imageContainer}>
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" alt="Alex Mercer" style={styles.image} />
                </div>
                <div style={styles.content}>
                    <h3 style={styles.name}>Alex "The Machine" Mercer</h3>
                    <div style={styles.role}>Head Performance Coach</div>
                    <p style={styles.bio}>
                        With over 15 years of experience coaching professional athletes, Alex specializes in high-output interval training. His philosophy is simple: "Comfort is the enemy of progress."
                    </p>
                    <div style={styles.links}>
                        <FaLink style={styles.icon} />
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .card {
                        flex-direction: column;
                    }
                     .imageContainer {
                        width: 100%;
                        height: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProgramTrainer;
