import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Philosophy = () => {
    const styles = {
        section: {
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: '#111',
            minHeight: '600px',
        },
        imageContainer: {
            flex: '1',
            minWidth: '400px',
            backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
        },
        contentContainer: {
            flex: '1',
            minWidth: '400px',
            padding: '5rem 5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        label: {
            fontSize: '1.2rem',
            color: '#fff',
            marginBottom: '0.5rem',
            fontWeight: '600',
        },
        title: {
            fontSize: '3rem',
            color: 'var(--color-primary)',
            lineHeight: '1.1',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            fontWeight: '800',
        },
        text: {
            color: '#ccc',
            marginBottom: '1.5rem',
            lineHeight: '1.6',
            fontSize: '1rem',
            maxWidth: '600px',
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '700',
            marginTop: '1rem',
            cursor: 'pointer',
            transition: 'color 0.3s',
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.imageContainer}></div>
            <div style={styles.contentContainer}>
                <h4 style={styles.label}>Our Philosophy:</h4>
                <h2 style={styles.title}>More Than Just Iron.</h2>
                <p style={styles.text}>
                    We believe in a holistic approach to health that combines strength, endurance, and mental fortitude. It's not just about how much you lift, but how you lift it, and who you become in the process.
                </p>
                <p style={styles.text}>
                    Every workout is designed to push your boundaries. We strip away the distractions and focus on pure performance. No gimmicks, just results driven by science and sweat.
                </p>
                <a href="#" style={styles.link}>
                    Read our manifesto <FaArrowRight style={{ color: 'var(--color-primary)' }} />
                </a>
            </div>
        </section>
    );
};

export default Philosophy;
