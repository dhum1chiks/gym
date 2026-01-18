import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
    const styles = {
        card: {
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            border: '1px solid #333',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: '100%',
        },
        imageContainer: {
            height: '220px',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))',
        },
        priceTag: {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            fontWeight: '700',
            fontSize: '0.9rem',
            zIndex: 2,
        },
        content: {
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
        },
        title: {
            fontSize: '1.5rem',
            color: '#fff',
            fontWeight: '700',
            marginBottom: '0.5rem',
        },
        description: {
            color: '#aaa',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            lineHeight: '1.5',
            flex: 1, // Pushes footer down
        },
        metaRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
            borderTop: '1px solid #333',
            paddingTop: '1rem',
        },
        metaItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#888',
            fontSize: '0.85rem',
        },
        avatar: {
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        button: {
            width: '100%',
            padding: '0.8rem',
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '700',
            fontSize: '1rem',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 0.2s',
        }
    };

    return (
        <div style={styles.card}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={styles.imageContainer}>
                <img src={program.image} alt={program.title} style={styles.image} />
                <div style={styles.overlay}></div>
                <div style={styles.priceTag}>${program.price} / mo</div>
            </div>

            <div style={styles.content}>
                <h3 style={styles.title}>{program.title}</h3>
                <p style={styles.description}>{program.description}</p>

                <div style={styles.metaRow}>
                    <div style={styles.metaItem}>
                        <img src={program.trainerAvatar} alt={program.trainerName} style={styles.avatar} />
                        <span>{program.trainerName}</span>
                    </div>
                    <div style={styles.metaItem}>
                        <FaClock style={{ color: 'var(--color-primary)' }} />
                        <span>{program.schedule}</span>
                    </div>
                </div>

                <Link to={`/programs/${program.id}`} style={{ textDecoration: 'none' }}>
                    <button style={styles.button}>Join Program</button>
                </Link>
            </div>
        </div>
    );
};

export default ProgramCard;
