import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const styles = {
        card: {
            backgroundColor: '#1E1E1E',
            padding: '3rem',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '450px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            textAlign: 'center',
            border: '1px solid #333',
        },
        logoContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2rem',
        },
        iconCircle: {
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(51, 51, 51, 0.5)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.8rem',
            color: 'var(--color-primary)',
            marginBottom: '1rem',
        },
        title: {
            fontSize: '2rem',
            color: '#fff',
            fontWeight: '800',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
        },
        subtitle: {
            color: '#aaa',
            fontSize: '0.9rem',
        },
        formGroup: {
            marginBottom: '1.5rem',
            textAlign: 'left',
        },
        label: {
            display: 'block',
            color: '#fff',
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '600',
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
            transition: 'border-color 0.3s',
        },
        forgotPass: {
            display: 'block',
            textAlign: 'right',
            color: '#888',
            fontSize: '0.8rem',
            marginTop: '0.5rem',
            textDecoration: 'none',
            cursor: 'pointer',
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
            marginTop: '1rem',
            transition: 'transform 0.2s',
        },
        footer: {
            marginTop: '2rem',
            color: '#aaa',
            fontSize: '0.9rem',
        },
        link: {
            color: 'var(--color-primary)',
            textDecoration: 'none',
            fontWeight: '600',
            marginLeft: '0.3rem',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.logoContainer}>
                <div style={styles.iconCircle}>
                    <FaDumbbell />
                </div>
                <h2 style={styles.title}>Iron Gym</h2>
                <p style={styles.subtitle}>Welcome back, athlete.</p>
            </div>

            <form>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        style={styles.input}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = '#333'}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        style={styles.input}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = '#333'}
                    />
                    <a href="#" style={styles.forgotPass}>Forgot Password?</a>
                </div>

                <button
                    type="submit"
                    style={styles.button}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Login
                </button>
            </form>

            <p style={styles.footer}>
                Don't have an account?
                <Link to="/signup" style={styles.link}>Sign Up</Link>
            </p>
        </div>
    );
};

export default LoginForm;
