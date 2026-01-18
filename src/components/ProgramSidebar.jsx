import React from 'react';
import { FaStar, FaCheck, FaUserCircle } from 'react-icons/fa';

const ProgramSidebar = () => {
    const styles = {
        card: {
            backgroundColor: '#1E1E1E',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #333',
            position: 'sticky',
            top: '100px', // Adjust based on navbar height
        },
        header: {
            marginBottom: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #333',
        },
        subtitle: {
            color: '#aaa',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
        },
        priceRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
        price: {
            fontSize: '2.5rem',
            fontWeight: '900',
            color: '#fff',
        },
        period: {
            fontSize: '1rem',
            color: '#888',
        },
        stars: {
            color: 'var(--color-primary)',
            display: 'flex',
            gap: '2px',
        },
        rating: {
            color: '#fff',
            marginLeft: '0.5rem',
            fontWeight: '700',
        },
        detailsList: {
            listStyle: 'none',
            padding: 0,
            marginBottom: '2rem',
        },
        listItem: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            color: '#ddd',
            fontSize: '0.9rem',
        },
        label: {
            color: '#888',
        },
        button: {
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '800',
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            cursor: 'pointer',
            marginBottom: '1rem',
            transition: 'transform 0.2s',
        },
        guarantee: {
            color: '#666',
            fontSize: '0.75rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
        },
        trainerBox: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: '#2A2A2A',
            borderRadius: '4px',
        },
        trainerImg: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        trainerInfo: {
            display: 'flex',
            flexDirection: 'column',
        },
        trainerLabel: {
            fontSize: '0.75rem',
            color: '#aaa',
        },
        trainerName: {
            color: '#fff',
            fontWeight: '700',
            fontSize: '0.9rem',
        },
        profileLink: {
            color: 'var(--color-primary)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginLeft: 'auto',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <div style={styles.subtitle}>Monthly Access</div>
                <div style={styles.priceRow}>
                    <div>
                        <span style={styles.price}>$49</span>
                        <span style={styles.period}>/mo</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={styles.stars}>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <span style={styles.rating}>4.9</span>
                    </div>
                </div>
            </div>

            <ul style={styles.detailsList}>
                <li style={styles.listItem}>
                    <span style={styles.label}>Duration</span>
                    <span>4 Weeks</span>
                </li>
                <li style={styles.listItem}>
                    <span style={styles.label}>Frequency</span>
                    <span>5 Days/Week</span>
                </li>
                <li style={styles.listItem}>
                    <span style={styles.label}>Level</span>
                    <span>Advanced</span>
                </li>
                <li style={styles.listItem}>
                    <span style={styles.label}>Access</span>
                    <span>Lifetime</span>
                </li>
            </ul>

            <button style={styles.button}>Enroll Now</button>
            <p style={styles.guarantee}>30-day money-back guarantee. Cancel anytime.</p>

            <div style={styles.trainerBox}>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" alt="Trainer" style={styles.trainerImg} />
                <div style={styles.trainerInfo}>
                    <span style={styles.trainerLabel}>Led by</span>
                    <span style={styles.trainerName}>Alex Mercer</span>
                </div>
                <span style={styles.profileLink}>View Profile</span>
            </div>
        </div>
    );
};

export default ProgramSidebar;
