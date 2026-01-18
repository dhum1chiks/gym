import React from 'react';

const AboutHero = () => {
    const styles = {
        section: {
            height: '70vh',
            width: '100%',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 5%',
            position: 'relative'
        },
        title: {
            fontSize: '5rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '1rem',
            position: 'relative',
        },
        underline: {
            content: '""',
            display: 'block',
            width: '100px',
            height: '6px',
            backgroundColor: 'var(--color-primary)',
            margin: '0 auto 2rem',
            borderRadius: '3px',
        },
        text: {
            fontSize: '1.2rem',
            color: '#ddd',
            maxWidth: '700px',
            lineHeight: '1.6',
        }
    };

    return (
        <section style={styles.section}>
            <h1 style={styles.title}>Our Story</h1>
            <div style={styles.underline}></div>
            <p style={styles.text}>
                Forging elite fitness since 2015. We started with a squat rack and a dream in a garage. Today, we are the standard.
            </p>
        </section>
    );
};

export default AboutHero;
