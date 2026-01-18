import React from 'react';
import { FaThLarge, FaUsers, FaDumbbell, FaClipboardList, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    const styles = {
        sidebar: {
            width: '280px',
            backgroundColor: '#1E1E1E',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            borderRight: '1px solid #333',
            zIndex: 1000,
        },
        logoContainer: {
            padding: '2rem',
            borderBottom: '1px solid #333',
            marginBottom: '1rem',
        },
        logoText: {
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        },
        icon: {
            color: 'var(--color-primary)',
        },
        nav: {
            flex: 1,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
        },
        link: (isActive) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            borderRadius: '8px',
            textDecoration: 'none',
            color: isActive ? '#111' : '#aaa',
            backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
            fontWeight: isActive ? '700' : '500',
            transition: 'all 0.3s',
        }),
        footer: {
            padding: '2rem',
            borderTop: '1px solid #333',
        },
        userProfile: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '1.5rem',
        },
        avatar: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#333',
        },
        userInfo: {
            display: 'flex',
            flexDirection: 'column',
        },
        userName: {
            color: '#fff',
            fontSize: '0.9rem',
            fontWeight: '700',
        },
        userRole: {
            color: '#888',
            fontSize: '0.8rem',
        }
    };

    return (
        <div style={styles.sidebar}>
            <div style={styles.logoContainer}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div style={styles.logoText}>
                        <FaDumbbell style={styles.icon} /> IronPulse Admin
                    </div>
                </Link>
            </div>

            <div style={styles.nav}>
                <a href="#" style={styles.link(true)}>
                    <FaThLarge /> Dashboard
                </a>
                <a href="#" style={styles.link(false)}>
                    <FaUsers /> Members
                </a>
                <a href="#" style={styles.link(false)}>
                    <FaDumbbell /> Trainers
                </a>
                <a href="#" style={styles.link(false)}>
                    <FaClipboardList /> Programs
                </a>
                <a href="#" style={styles.link(false)}>
                    <FaChartLine /> Finances
                </a>
            </div>

            <div style={styles.footer}>
                <a href="#" style={{ ...styles.link(false), padding: '0.5rem 0' }}>
                    <FaCog /> Settings
                </a>

                <div style={styles.userProfile}>
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" alt="Admin" style={styles.avatar} />
                    <div style={styles.userInfo}>
                        <span style={styles.userName}>Alex Morgan</span>
                        <span style={styles.userRole}>Super Admin</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
