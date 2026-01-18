import React from 'react';

const Trainers = () => {
    const trainers = [
        {
            name: "Alex Strong",
            role: "Head Coach",
            desc: "Former Olympian specializing in explosive power.",
            img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop"
        },
        {
            name: "Sarah Speed",
            role: "HIIT Specialist",
            desc: "High energy motivator focused on burning fat.",
            img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop"
        },
        {
            name: "Mike Power",
            role: "Strength Coach",
            desc: "Expert in biomechanics and hypertrophy.",
            img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
        },
        {
            name: "Jenny Flex",
            role: "Yoga Instructor",
            desc: "Bringing mindfulness and mobility to intense training.",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const styles = {
        section: {
            padding: '6rem 5%',
            backgroundColor: 'var(--color-bg-light)',
            textAlign: 'center',
        },
        header: {
            marginBottom: '4rem',
        },
        smallTitle: {
            color: 'var(--color-primary)',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            letterSpacing: '2px',
        },
        title: {
            fontSize: '3rem',
        },
        grid: {
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '280px',
        },
        imageWrapper: {
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            border: '2px solid var(--color-primary)', // Subtle border
            transition: 'transform 0.3s, box-shadow 0.3s',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
            transition: 'filter 0.3s',
        },
        name: {
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
        },
        role: {
            color: 'var(--color-primary)',
            fontSize: '0.9rem',
            fontWeight: '700',
            marginBottom: '1rem',
            textTransform: 'uppercase',
        },
        desc: {
            fontSize: '0.9rem',
            color: '#aaa',
            lineHeight: '1.5',
        }
    };

    return (
        <section id="trainers" style={styles.section}>
            <div style={styles.header}>
                <h4 style={styles.smallTitle}>WORLD CLASS COACHES</h4>
                <h2 style={styles.title}>MEET THE <span style={{ color: 'var(--color-primary)' }}>ELITE</span></h2>
            </div>

            <div style={styles.grid}>
                {trainers.map((trainer, index) => (
                    <div key={index} style={styles.card} className="trainer-card">
                        <div style={styles.imageWrapper}>
                            <img src={trainer.img} alt={trainer.name} style={styles.image} className="trainer-img" />
                        </div>
                        <h3 style={styles.name}>{trainer.name}</h3>
                        <span style={styles.role}>{trainer.role}</span>
                        <p style={styles.desc}>{trainer.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trainers;
