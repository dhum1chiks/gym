import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const TrainerFilters = ({ selectedFilter, setSelectedFilter }) => {
    const filters = ["All Expertise", "Strength", "Yoga & Mobility", "Cardio & HIIT"];

    const styles = {
        container: {
            padding: '0 5% 3rem',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
        },
        pill: (isActive) => ({
            padding: '0.6rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '700',
            cursor: 'pointer',
            border: isActive ? 'none' : '1px solid #333',
            backgroundColor: isActive ? 'var(--color-primary)' : '#1E1E1E',
            color: isActive ? '#111' : '#aaa',
            transition: 'all 0.3s ease',
            textTransform: 'capitalize',
        }),
        availabilityBtn: {
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid #333',
            backgroundColor: '#1E1E1E',
            color: '#aaa',
            fontSize: '0.9rem',
            fontWeight: '700',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.container}>
            {filters.map(filter => (
                <button
                    key={filter}
                    style={styles.pill(selectedFilter === filter)}
                    onClick={() => setSelectedFilter(filter)}
                >
                    {filter}
                </button>
            ))}

            <button style={styles.availabilityBtn}>
                <FaCalendarAlt /> Availability
            </button>
        </div>
    );
};

export default TrainerFilters;
