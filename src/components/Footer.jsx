import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#0a0a0a',
            padding: '4rem 5% 2rem',
            color: '#fff',
            borderTop: '1px solid #222',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '800',
            fontStyle: 'italic',
            color: '#fff',
            marginBottom: '1rem',
            display: 'block',
        },
        desc: {
            color: '#888',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            maxWidth: '300px',
        },
        socials: {
            display: 'flex',
            gap: '1rem',
        },
        socialIcon: {
            backgroundColor: '#222',
            padding: '0.5rem',
            borderRadius: '4px',
            color: '#fff',
            cursor: 'pointer',
        },
        columnTitle: {
            fontSize: '1rem',
            marginBottom: '1.5rem',
            color: '#fff',
        },
        linkList: {
            listStyle: 'none',
            padding: 0,
        },
        linkItem: {
            marginBottom: '0.8rem',
        },
        link: {
            color: '#888',
            fontSize: '0.9rem',
            transition: 'color 0.3s',
        },
        mapPlaceholder: {
            width: '100%',
            height: '150px',
            backgroundColor: '#222',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#555',
            fontSize: '0.8rem',
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.grid}>
                {/* Brand Column */}
                <div>
                    <a href="#" style={styles.logo}>
                        <span style={{ color: 'var(--color-primary)' }}>IRON</span> REVOLUTION
                    </a>
                    <p style={styles.desc}>
                        Forging elite fitness through community, equipment, and expert guidance. Join us today.
                    </p>
                    <div style={styles.socials}>
                        <div style={styles.socialIcon}><FaFacebook /></div>
                        <div style={styles.socialIcon}><FaInstagram /></div>
                        <div style={styles.socialIcon}><FaTwitter /></div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={styles.columnTitle}>Quick Links</h4>
                    <ul style={styles.linkList}>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>About Us</a></li>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>Programs</a></li>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>Schedule</a></li>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>Careers</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 style={styles.columnTitle}>Support</h4>
                    <ul style={styles.linkList}>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>Member Login</a></li>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>Contact Support</a></li>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>Privacy Policy</a></li>
                        <li style={styles.linkItem}><a href="#" style={styles.link}>Terms of Service</a></li>
                    </ul>
                </div>

                {/* Visit Us */}
                <div>
                    <h4 style={styles.columnTitle}>Visit Us</h4>
                    <ul style={styles.linkList}>
                        <li style={{ ...styles.linkItem, color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            123 Iron Street, <br /> Fitness District, NY 10001
                        </li>
                        <li style={{ ...styles.linkItem, color: '#888', fontSize: '0.9rem' }}>
                            Mon - Sun: 24 Hours
                        </li>
                    </ul>
                    <div style={styles.mapPlaceholder}>Map Integration</div>
                </div>
            </div>

            <div style={{ textAlign: 'center', color: '#444', fontSize: '0.8rem', paddingTop: '2rem', borderTop: '1px solid #1a1a1a' }}>
                © 2026 Iron Revolution. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
