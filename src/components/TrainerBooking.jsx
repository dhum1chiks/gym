import React from 'react';
import { FaStar, FaEnvelope, FaGlobe, FaShareAlt, FaArrowRight } from 'react-icons/fa';

const TrainerBooking = () => {
    const styles = {
        card: {
            backgroundColor: '#1E1E1E',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid #333',
            position: 'sticky',
            top: '100px',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '0.5rem',
        },
        label: {
            color: '#aaa',
            fontSize: '0.9rem',
        },
        rating: {
            color: 'var(--color-primary)', // Yellow Star
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
        },
        priceRow: {
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.5rem',
            marginBottom: '1.5rem',
        },
        price: {
            fontSize: '3rem',
            fontWeight: '800',
            color: '#fff',
        },
        perHour: {
            color: '#888',
            fontSize: '1rem',
        },
        bookBtn: {
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--color-primary)', // Yellow Button
            color: '#111',
            border: 'none',
            borderRadius: '50px',
            fontWeight: '800',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
        },
        socialRow: {
            display: 'flex',
            gap: '1rem',
            marginBottom: '3rem',
            justifyContent: 'center',
        },
        iconBtn: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#2A2A2A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ccc',
            cursor: 'pointer',
            transition: 'all 0.2s',
        },
        storiesTitle: {
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '1.5rem',
        },
        storyCard: {
            backgroundColor: '#252525',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '1rem',
        },
        storyHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
        },
        avatar: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        clientName: {
            color: '#fff',
            fontWeight: '700',
            fontSize: '0.95rem',
        },
        clientResult: {
            color: '#888',
            fontSize: '0.8rem',
        },
        storyText: {
            color: '#ddd',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            lineHeight: '1.5',
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <span style={styles.label}>Private Session</span>
                <span style={styles.rating}><FaStar /> 4.98</span>
            </div>

            <div style={styles.priceRow}>
                <span style={styles.price}>$85</span>
                <span style={styles.perHour}>/ hour</span>
            </div>

            <button style={styles.bookBtn}>
                Book Now <FaArrowRight />
            </button>

            <div style={styles.socialRow}>
                <div style={styles.iconBtn}><FaEnvelope /></div>
                <div style={styles.iconBtn}><FaGlobe /></div>
                <div style={styles.iconBtn}><FaShareAlt /></div>
            </div>

            <h3 style={styles.storiesTitle}>Client Stories</h3>

            <div style={styles.storyCard}>
                <div style={styles.storyHeader}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Client" style={styles.avatar} />
                    <div>
                        <div style={styles.clientName}>Mark D.</div>
                        <div style={styles.clientResult}>Lost 30lbs</div>
                    </div>
                </div>
                <p style={styles.storyText}>
                    "Sarah changed my life! Her attention to detail on my form prevented injuries I've dealt with for years."
                </p>
            </div>

            <div style={styles.storyCard}>
                <div style={styles.storyHeader}>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" alt="Client" style={styles.avatar} />
                    <div>
                        <div style={styles.clientName}>Elena R.</div>
                        <div style={styles.clientResult}>Marathon Runner</div>
                    </div>
                </div>
                <p style={styles.storyText}>
                    "The best coach I've ever had. She pushed me to qualify for Boston next year!"
                </p>
            </div>
        </div>
    );
};

export default TrainerBooking;
