import React from 'react';
import { FaClock, FaSignal, FaUserFriends, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProgramHero = () => {
    const styles = {
        hero: {
            position: 'relative',
            height: '60vh',
            minHeight: '500px',
            width: '100%',
            backgroundImage: 'url("https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))',
        },
        content: {
            position: 'relative',
            zIndex: 1,
            padding: '0 5%',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        breadcrumbs: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#aaa',
            fontSize: '0.9rem',
            marginBottom: '2rem',
        },
        breadcrumbLink: {
            color: '#aaa',
            textDecoration: 'none',
        },
        tags: {
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
        },
        tag: {
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            padding: '0.3rem 0.8rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
        },
        tagOutline: {
            border: '1px solid #fff',
            color: '#fff',
            padding: '0.3rem 0.8rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
        },
        title: {
            fontSize: '4.5rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            lineHeight: '1',
            marginBottom: '1rem',
        },
        titleHighlight: {
            color: 'var(--color-primary)',
        },
        description: {
            color: '#ddd',
            maxWidth: '700px',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '3rem',
        },
        metaRow: {
            display: 'flex',
            gap: '3rem',
        },
        metaItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
        },
        metaIcon: {
            color: 'var(--color-primary)',
            fontSize: '1.5rem',
        },
        metaText: {
            display: 'flex',
            flexDirection: 'column',
        },
        metaLabel: {
            color: '#888',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
        },
        metaValue: {
            color: '#fff',
            fontWeight: '700',
            fontSize: '1.1rem',
        }
    };

    return (
        <section style={styles.hero}>
            <div style={styles.overlay}></div>
            <div style={styles.content}>
                <div style={styles.breadcrumbs}>
                    <Link to="/" style={styles.breadcrumbLink}>Home</Link>
                    <FaChevronRight size={10} />
                    <Link to="/programs" style={styles.breadcrumbLink}>Programs</Link>
                    <FaChevronRight size={10} />
                    <span style={{ color: '#fff' }}>HIIT Revolution</span>
                </div>

                <div style={styles.tags}>
                    <span style={styles.tag}>High Intensity</span>
                    <span style={styles.tagOutline}>Advanced</span>
                </div>

                <h1 style={styles.title}>
                    <span style={{ color: '#fff' }}>HIIT</span> <br />
                    <span style={styles.titleHighlight}>REVOLUTION</span>
                </h1>

                <p style={styles.description}>
                    Maximize fat burn in 30 minutes. This explosive program combines cardio spikes with strength movements to redefine your limits.
                </p>

                <div style={styles.metaRow}>
                    <div style={styles.metaItem}>
                        <FaClock style={styles.metaIcon} />
                        <div style={styles.metaText}>
                            <span style={styles.metaValue}>4 Weeks</span>
                            <span style={styles.metaLabel}>Duration</span>
                        </div>
                    </div>
                    <div style={styles.metaItem}>
                        <FaSignal style={styles.metaIcon} />
                        <div style={styles.metaText}>
                            <span style={styles.metaValue}>Advanced</span>
                            <span style={styles.metaLabel}>Level</span>
                        </div>
                    </div>
                    <div style={styles.metaItem}>
                        <FaUserFriends style={styles.metaIcon} />
                        <div style={styles.metaText}>
                            <span style={styles.metaValue}>1,204</span>
                            <span style={styles.metaLabel}>Enrolled</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramHero;
