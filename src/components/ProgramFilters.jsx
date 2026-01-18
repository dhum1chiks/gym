import React from 'react';

const ProgramFilters = ({ selectedCategory, setSelectedCategory }) => {
    const categories = ["All", "Crossfit", "Yoga", "Bodybuilding", "HIIT", "Boxing"];

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '0 5% 2rem',
            marginBottom: '1rem',
        },
        pill: (isActive) => ({
            padding: '0.6rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            border: isActive ? 'none' : '1px solid #444',
            backgroundColor: isActive ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
            color: isActive ? '#111' : '#aaa',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
        })
    };

    return (
        <div style={styles.container}>
            {categories.map(category => (
                <button
                    key={category}
                    style={styles.pill(selectedCategory === category)}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ProgramFilters;
