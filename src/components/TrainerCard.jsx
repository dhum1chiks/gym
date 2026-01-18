import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrainerCard = ({ trainer }) => {
    const styles = {
        card: {
            backgroundColor: '#1E1E1E', // Dark grey background
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
            border: '1px solid #2A2A2A', // Subtle border
        },
        imageContainer: {
            height: '350px',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'transform 0.4s ease',
        },
        // Using a gradient overlay at the bottom of the image for better text readability if we were placing text on image,
        // but design has text below. However, let's add a subtle inner shadow to blend image with card body if needed.
        // Actually, the generic "card" look usually has image top, content bottom.

        content: {
            padding: '1.5rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundImage: 'linear-gradient(to top, #1E1E1E 0%, #151515 100%)',
        },
        name: {
            fontSize: '1.5rem',
            fontWeight: '800',
            color: '#fff',
            marginBottom: '0.2rem',
        },
        role: {
            fontSize: '0.8rem',
            color: '#aaa',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: '700',
            marginBottom: '1rem',
        },
        certRow: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
        },
        certIcon: {
            color: 'var(--color-primary)', // Yellow Badge
            fontSize: '0.9rem',
        },
        certText: {
            color: '#888',
            fontSize: '0.8rem',
        },
        button: {
            width: '100%',
            padding: '0.8rem',
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            border: 'none',
            borderRadius: '6px', // Slightly more rounded than usual
            fontWeight: '700',
            fontSize: '0.9rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            transition: 'background 0.2s',
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img src={trainer.image} alt={trainer.name} style={styles.image} />
            </div>
            <div style={styles.content}>
                <h3 style={styles.name}>{trainer.name}</h3>
                <div style={styles.role}>{trainer.role}</div>

                <div style={styles.certRow}>
                    <FaCheckCircle style={styles.certIcon} />
                    <span style={styles.certText}>{trainer.certification}</span>
                </div>

                <Link to={`/trainers/${trainer.id}`} style={{ textDecoration: 'none' }}>
                    <button style={styles.button}>
                        View Profile <FaArrowRight size={12} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TrainerCard;
