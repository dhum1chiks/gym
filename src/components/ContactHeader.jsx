import React from 'react';

const ContactHeader = () => {
    const styles = {
        section: {
            padding: '8rem 5% 4rem',
            backgroundColor: '#111',
            textAlign: 'left',
        },
        title: {
            fontSize: '4rem',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: '900',
            lineHeight: '1',
            marginBottom: '1rem',
        },
        subtitle: {
            fontSize: '1.2rem',
            color: '#aaa',
            maxWidth: '600px',
        }
    };

    return (
        <section style={styles.section}>
            <h1 style={styles.title}>Contact Us</h1>
            <p style={styles.subtitle}>We'd love to hear from you. Let's start your journey.</p>
        </section>
    );
};

export default ContactHeader;
