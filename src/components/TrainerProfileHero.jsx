import React from 'react';

const TrainerProfileHero = () => {
    const styles = {
        container: {
            display: 'flex',
            gap: '3rem',
            marginBottom: '4rem',
        },
        imageCol: {
            flex: '1',
            maxWidth: '350px',
            position: 'relative',
        },
        imageContainer: {
            borderRadius: '12px',
            overflow: 'hidden',
            aspectRatio: '3/4',
            position: 'relative',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        badge: {
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            backgroundColor: '#0056b3', // Fallback
            background: 'linear-gradient(45deg, var(--color-primary), #d4b024)', // Yellow Gradient
            color: '#111',
            padding: '0.6rem 1.2rem',
            borderRadius: '50px',
            fontWeight: '800',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        },
        infoCol: {
            flex: '1.5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        name: {
            fontSize: '4rem',
            fontWeight: '900',
            color: '#fff',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
        },
        role: {
            fontSize: '1.5rem',
            color: 'var(--color-primary)',
            fontWeight: '700',
            marginBottom: '2rem',
        },
        tags: {
            display: 'flex',
            gap: '1rem',
            marginBottom: '3rem',
        },
        tag: {
            padding: '0.5rem 1rem',
            backgroundColor: '#2A2A2A',
            color: '#ccc',
            borderRadius: '50px',
            fontSize: '0.9rem',
            border: '1px solid #333',
        },
        statsRow: {
            display: 'flex',
            gap: '4rem',
            borderTop: '1px solid #333',
            borderBottom: '1px solid #333',
            padding: '2rem 0',
        },
        statItem: {
            display: 'flex',
            flexDirection: 'column',
        },
        statValue: {
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#fff',
            lineHeight: '1',
            marginBottom: '0.5rem',
        },
        statLabel: {
            fontSize: '0.85rem',
            color: '#888',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        }
    };

    return (
        <div style={styles.container} className="trainer-hero">
            <div style={styles.imageCol} className="trainer-image-col">
                <div style={styles.imageContainer}>
                    <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" alt="Sarah Jenkins" style={styles.image} />
                    <div style={styles.badge}>Top Rated Trainer</div>
                </div>
            </div>

            <div style={styles.infoCol}>
                <h1 style={styles.name}>Sarah <br /> Jenks</h1>
                <div style={styles.role}>Elite Performance Coach</div>

                <div style={styles.tags}>
                    <span style={styles.tag}>NASM CPT</span>
                    <span style={styles.tag}>CSCS</span>
                    <span style={styles.tag}>Pre/Post Natal</span>
                </div>

                <div style={styles.statsRow}>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>10+</span>
                        <span style={styles.statLabel}>Years Exp</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>500+</span>
                        <span style={styles.statLabel}>Clients</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>15</span>
                        <span style={styles.statLabel}>Certs</span>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .trainer-hero {
                        flex-direction: column;
                    }
                    .trainer-image-col {
                        width: 100%;
                        max-width: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default TrainerProfileHero;
