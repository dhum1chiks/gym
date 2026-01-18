import React from 'react';

const Hero = () => {
    const styles = {
        hero: {
            height: '100vh',
            width: '100%',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '15vh 5% 4rem', // Push content down with top padding
            position: 'relative',
            marginTop: '0'
        },
        badge: {
            backgroundColor: 'rgba(244, 208, 63, 0.2)',
            color: 'var(--color-primary)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            display: 'inline-block',
            border: '1px solid var(--color-primary)'
        },
        heading: {
            fontSize: '5rem',
            lineHeight: '1',
            marginBottom: '1.5rem',
            maxWidth: '900px',
            textTransform: 'uppercase',
            fontStyle: 'italic',
        },
        highlight: {
            color: 'var(--color-primary)',
        },
        subtext: {
            fontSize: '1.2rem',
            color: '#ddd',
            maxWidth: '600px',
            marginBottom: '3rem',
            lineHeight: '1.6',
            letterSpacing: '0.5px',
        },
        btnGroup: {
            display: 'flex',
            gap: '1.5rem',
        },
        primaryBtn: {
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: '700',
            border: 'none',
            textTransform: 'uppercase',
            borderRadius: '2px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
        },
        secondaryBtn: {
            backgroundColor: 'transparent',
            color: '#fff',
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: '700',
            border: '2px solid rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            borderRadius: '2px',
            cursor: 'pointer',
            transition: 'background 0.2s',
        },
        stats: {
            marginTop: 'auto',
            display: 'flex',
            gap: '4rem',
            paddingTop: '3rem',
        },
        statItem: {
            display: 'flex',
            flexDirection: 'column',
        },
        statNumber: {
            fontSize: '2rem',
            fontWeight: '800',
            color: '#fff',
        },
        statLabel: {
            fontSize: '0.8rem',
            color: '#aaa',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        }
    };

    return (
        <section id="home" style={styles.hero} >
            <div style={styles.badge}>New Location Open in Downtown</div>

            <h1 style={styles.heading}>
                JOIN THE <br />
                <span style={styles.highlight}>REVOLUTION</span>
            </h1>

            <p style={styles.subtext}>
                Transform your body and mind at the city's premier fitness facility.
                Elite equipment, expert coaching, and a community that pushes you further.
            </p>

            <div style={styles.btnGroup}>
                <button style={styles.primaryBtn}>Start Free Trial</button>
                <button style={styles.secondaryBtn}>View Schedule</button>
            </div>

            <div style={styles.stats}>
                <div style={styles.statItem}>
                    <span style={styles.statNumber}>2.5k+</span>
                    <span style={styles.statLabel}>Active Members</span>
                </div>
                <div style={styles.statItem}>
                    <span style={styles.statNumber}>15+</span>
                    <span style={styles.statLabel}>Expert Trainers</span>
                </div>
                <div style={styles.statItem}>
                    <span style={styles.statNumber}>24/7</span>
                    <span style={styles.statLabel}>Gym Access</span>
                </div>
            </div>
        </section >
    );
};

export default Hero;
