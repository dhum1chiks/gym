import React from 'react';

const Team = () => {
    const trainers = [
        {
            name: "Alex Mercer",
            role: "Head Coach - Strength",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop"
        },
        {
            name: "Sarah Jenkins",
            role: "Lead Instructor - HIIT",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
        },
        {
            name: "David Rossi",
            role: "Nutrition Specialist",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
        },
        {
            name: "Elena Rodriguez",
            role: "Mobility & Recovery",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
        }
    ];

    const styles = {
        section: {
            padding: '6rem 5%',
            backgroundColor: '#111',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            borderBottom: '1px solid #333',
            paddingBottom: '1rem',
        },
        title: {
            fontSize: '3rem',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: '800',
        },
        viewAll: {
            color: 'var(--color-primary)',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '0.9rem',
            cursor: 'pointer',
            textTransform: 'uppercase',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
        },
        card: {
            backgroundColor: '#1E1E1E',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
        },
        imageContainer: {
            height: '350px',
            width: '100%',
            overflow: 'hidden',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)', // Default grayscale
            transition: 'filter 0.3s, transform 0.3s',
            cursor: 'pointer',
        },
        info: {
            padding: '1.5rem',
            borderTop: '2px solid transparent',
            transition: 'border-color 0.3s',
        },
        name: {
            fontSize: '1.2rem',
            color: '#fff',
            fontWeight: '700',
            marginBottom: '0.3rem',
        },
        role: {
            fontSize: '0.85rem',
            color: '#aaa',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <div>
                    <h2 style={styles.title}>The Team</h2>
                    <p style={{ color: '#aaa', marginTop: '0.5rem' }}>World-class coaches dedicated to your success.</p>
                </div>
                <a href="#" style={styles.viewAll}>View all trainers</a>
            </div>

            <div style={styles.grid}>
                {trainers.map((trainer, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.imageContainer}>
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                style={styles.image}
                                onMouseEnter={(e) => {
                                    e.target.style.filter = 'grayscale(0%)';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.filter = 'grayscale(100%)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                        <div style={styles.info}>
                            <h3 style={styles.name}>{trainer.name}</h3>
                            <p style={styles.role}>{trainer.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
