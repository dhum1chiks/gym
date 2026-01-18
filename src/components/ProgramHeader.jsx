import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ProgramHeader = () => {
    const styles = {
        header: {
            display: 'flex',
            flexDirection: 'column',
            padding: '8rem 5% 2rem',
            backgroundColor: '#111',
        },
        topRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '1.5rem',
        },
        title: {
            fontSize: '3rem',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: '900',
            lineHeight: '1',
        },
        subtitle: {
            color: '#aaa',
            maxWidth: '600px',
            marginBottom: '2rem',
            fontSize: '1rem',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
        },
        searchWrapper: {
            position: 'relative',
            minWidth: '250px',
        },
        searchIcon: {
            position: 'absolute',
            top: '50%',
            left: '1rem',
            transform: 'translateY(-50%)',
            color: '#666',
        },
        input: {
            width: '100%',
            padding: '0.8rem 1rem 0.8rem 2.5rem',
            backgroundColor: '#2A2A2A',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff',
            outline: 'none',
        },
        sortSelect: {
            padding: '0.8rem 1rem',
            backgroundColor: '#2A2A2A',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff',
            outline: 'none',
            cursor: 'pointer',
        },
        joinBtn: {
            padding: '0.8rem 1.5rem',
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '700',
            textTransform: 'uppercase',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.header}>
            <div style={styles.topRow}>
                <h1 style={styles.title}>Our Elite Programs</h1>

                <div style={styles.controls}>
                    <div style={styles.searchWrapper}>
                        <FaSearch style={styles.searchIcon} />
                        <input type="text" placeholder="Find a program..." style={styles.input} />
                    </div>
                    <button style={styles.joinBtn}>Join Now</button>
                </div>
            </div>

            <p style={styles.subtitle}>
                Expert-led training designed to push your limits. Choose your path to greatness with our specialized programs.
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <span style={{ color: '#888', marginRight: '0.5rem', fontSize: '0.9rem', alignSelf: 'center' }}>Sort by:</span>
                <select style={styles.sortSelect}>
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Duration</option>
                </select>
            </div>
        </div>
    );
};

export default ProgramHeader;
