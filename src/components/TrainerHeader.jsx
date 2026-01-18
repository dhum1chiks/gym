import React from 'react';

const TrainerHeader = () => {
    const styles = {
        section: {
            padding: '8rem 5% 3rem',
            backgroundColor: '#111',
            textAlign: 'left',
        },
        title: {
            fontSize: '3.5rem',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: '900',
            lineHeight: '1',
            marginBottom: '1.5rem',
        },
        description: {
            color: '#aaa',
            fontSize: '1.1rem',
            maxWidth: '600px',
            lineHeight: '1.6',
        }
    };

    return (
        <section style={styles.section}>
            <h1 style={styles.title}>Meet Our Expert Trainers</h1>
            <p style={styles.description}>
                Guiding you towards your fitness goals with passion and expertise. Our certified professionals are here to push your limits.
            </p>
        </section>
    );
};

export default TrainerHeader;
