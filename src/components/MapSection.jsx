import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapSection = () => {
    const styles = {
        section: {
            height: '400px',
            width: '100%',
            backgroundColor: '#222',
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")', // Simple placeholder map pattern
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            filter: 'grayscale(100%) contrast(1.2)', // Grayscale effect
            borderTop: '1px solid #333',
        },
        overlay: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', // Darken map
        },
        pinContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
        },
        pin: {
            fontSize: '3rem',
            color: 'var(--color-primary)',
            filter: 'drop-shadow(0 0 10px rgba(244, 208, 63, 0.5))',
        },
        tooltip: {
            backgroundColor: '#1E1E1E',
            padding: '0.8rem 1.5rem',
            borderRadius: '4px',
            marginTop: '1rem',
            textAlign: 'center',
            border: '1px solid #333',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        },
        tooltipTitle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: '1rem',
            marginBottom: '0.2rem',
        },
        tooltipText: {
            color: '#aaa',
            fontSize: '0.8rem',
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.overlay}></div>
            <div style={styles.pinContainer}>
                <FaMapMarkerAlt style={styles.pin} />
                <div style={styles.tooltip}>
                    <div style={styles.tooltipTitle}>Iron Revolution HQ</div>
                    <div style={styles.tooltipText}>Muscle City, MC 90210</div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
