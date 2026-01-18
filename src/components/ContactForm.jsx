import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
    const styles = {
        section: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '0 5% 6rem',
            backgroundColor: '#111',
            gap: '4rem',
        },
        infoColumn: {
            flex: '1',
            minWidth: '300px',
        },
        formColumn: {
            flex: '1.5',
            minWidth: '350px',
        },
        sectionTitle: {
            fontSize: '2rem',
            color: '#fff',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            fontWeight: '800',
        },
        infoText: {
            color: '#aaa',
            marginBottom: '3rem',
            lineHeight: '1.6',
        },
        infoCard: {
            backgroundColor: '#1E1E1E',
            padding: '1.5rem',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '1.5rem',
        },
        iconBox: {
            width: '50px',
            height: '50px',
            backgroundColor: 'rgba(51, 51, 51, 0.5)',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2rem',
            color: 'var(--color-primary)',
        },
        infoLabel: {
            fontSize: '0.8rem',
            color: '#888',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginBottom: '0.3rem',
            letterSpacing: '1px',
        },
        infoValue: {
            color: '#fff',
            fontWeight: '600',
            fontSize: '1.1rem',
        },
        socialRow: {
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
        },
        socialBtn: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s',
        },
        formCard: {
            backgroundColor: '#1E1E1E',
            padding: '3rem',
            borderRadius: '8px',
        },
        row: {
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '1.5rem',
        },
        col: {
            flex: 1,
        },
        label: {
            display: 'block',
            color: '#fff',
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: '0.9rem',
        },
        input: {
            width: '100%',
            padding: '1rem',
            backgroundColor: '#2A2A2A',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
        },
        select: {
            width: '100%',
            padding: '1rem',
            backgroundColor: '#2A2A2A',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            appearance: 'none', // Simple normalization
        },
        textarea: {
            width: '100%',
            padding: '1rem',
            backgroundColor: '#2A2A2A',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            resize: 'vertical',
            minHeight: '150px',
        },
        button: {
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '700',
            fontSize: '1rem',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'transform 0.2s',
        }
    };

    return (
        <section style={styles.section}>
            {/* Left Column: Info */}
            <div style={styles.infoColumn}>
                <h2 style={styles.sectionTitle}>Get in Touch</h2>
                <p style={styles.infoText}>
                    Ready to transform your body and mind? Reach out to us today for membership info, class schedules, or just to say hi.
                </p>

                <div style={styles.infoCard}>
                    <div style={styles.iconBox}><FaMapMarkerAlt /></div>
                    <div>
                        <div style={styles.infoLabel}>Visit Us</div>
                        <div style={styles.infoValue}>123 Iron Street, Muscle City, MC 90210</div>
                    </div>
                </div>

                <div style={styles.infoCard}>
                    <div style={styles.iconBox}><FaPhoneAlt /></div>
                    <div>
                        <div style={styles.infoLabel}>Call Us</div>
                        <div style={styles.infoValue}>+1 (555) 123-4567</div>
                    </div>
                </div>

                <div style={styles.infoCard}>
                    <div style={styles.iconBox}><FaEnvelope /></div>
                    <div>
                        <div style={styles.infoLabel}>Email Us</div>
                        <div style={styles.infoValue}>hello@ironrevolution.com</div>
                    </div>
                </div>

                <div style={styles.socialRow}>
                    <div style={styles.socialBtn}><FaInstagram /></div>
                    <div style={styles.socialBtn}><FaFacebookF /></div>
                    <div style={styles.socialBtn}><FaTwitter /></div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div style={styles.formColumn}>
                <div style={styles.formCard}>
                    <h3 style={{ ...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '2rem' }}>Send us a Message</h3>

                    <div style={styles.row}>
                        <div style={styles.col}>
                            <label style={styles.label}>Full Name</label>
                            <input type="text" placeholder="John Doe" style={styles.input} />
                        </div>
                        <div style={styles.col}>
                            <label style={styles.label}>Phone Number</label>
                            <input type="text" placeholder="+1 (555) 000-0000" style={styles.input} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={styles.label}>Email Address</label>
                        <input type="email" placeholder="john@example.com" style={styles.input} />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={styles.label}>Subject</label>
                        <select style={styles.select}>
                            <option>Membership Inquiry</option>
                            <option>Personal Training</option>
                            <option>Class Schedule</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={styles.label}>Message</label>
                        <textarea placeholder="How can we help you achieve your goals?" style={styles.textarea}></textarea>
                    </div>

                    <button style={styles.button}>Send Message ➤</button>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
