import React from 'react';
import { FaQuoteLeft, FaLock, FaUser, FaEnvelope, FaRedo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignupCard = () => {
    const styles = {
        card: {
            display: 'flex',
            backgroundColor: '#1E1E1E',
            borderRadius: '12px',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '900px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            border: '1px solid #333',
            minHeight: '600px',
        },
        imageCol: {
            flex: '1',
            backgroundImage: 'url("https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1587&auto=format&fit=crop")', // Fitness Model
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '3rem',
            minHeight: '400px',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)', // Darken image slightly
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
        },
        quoteContainer: {
            position: 'relative',
            zIndex: 1,
        },
        quoteIcon: {
            fontSize: '3rem',
            color: 'var(--color-primary)', // Yellow Quotes
            marginBottom: '1rem',
        },
        quoteText: {
            fontSize: '2rem',
            color: '#fff',
            fontWeight: '800',
            lineHeight: '1.2',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            fontStyle: 'italic',
        },
        quoteDash: {
            width: '40px',
            height: '4px',
            backgroundColor: 'var(--color-primary)',
            borderRadius: '2px',
        },
        formCol: {
            flex: '1',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#1E1E1E', // Match card bg
        },
        title: {
            fontSize: '2rem',
            color: '#fff',
            fontWeight: '800',
            marginBottom: '0.5rem',
        },
        subtitle: {
            color: '#aaa',
            fontSize: '0.9rem',
            marginBottom: '2rem',
            lineHeight: '1.5',
        },
        formGroup: {
            marginBottom: '1.2rem',
        },
        label: {
            display: 'block',
            color: '#fff',
            marginBottom: '0.5rem',
            fontSize: '0.85rem',
            fontWeight: '700',
        },
        inputWrapper: {
            position: 'relative',
        },
        inputIcon: {
            position: 'absolute',
            top: '50%',
            left: '1rem',
            transform: 'translateY(-50%)',
            color: '#666',
        },
        input: {
            width: '100%',
            padding: '1rem 1rem 1rem 3rem', // Left padding for icon
            backgroundColor: '#2A2A2A',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.3s',
        },
        checkboxGroup: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: '#aaa',
        },
        link: {
            color: 'var(--color-primary)',
            textDecoration: 'none',
            marginLeft: '0.2rem',
            cursor: 'pointer',
        },
        button: {
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--color-primary)', // Yellow Button
            color: '#111',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '700',
            fontSize: '1rem',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
        },
        loginLink: {
            textAlign: 'center',
            marginTop: '2rem',
            color: '#aaa',
            fontSize: '0.9rem',
        }
    };

    return (
        <div style={styles.card} className="signup-card">
            {/* Left Column: Image & Quote */}
            <div style={styles.imageCol} className="signup-image">
                <div style={styles.overlay}></div>
                <div style={styles.quoteContainer}>
                    <FaQuoteLeft style={styles.quoteIcon} />
                    <h2 style={styles.quoteText}>
                        "The only bad <br /> workout is the one <br /> that didn't <br /> happen."
                    </h2>
                    <div style={styles.quoteDash}></div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div style={styles.formCol}>
                <h2 style={styles.title}>Create Account</h2>
                <p style={styles.subtitle}>Join the Iron Revolution community and start your transformation today.</p>

                <form>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Full Name</label>
                        <div style={styles.inputWrapper}>
                            <FaUser style={styles.inputIcon} />
                            <input
                                type="text"
                                placeholder="John Doe"
                                style={styles.input}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email Address</label>
                        <div style={styles.inputWrapper}>
                            <FaEnvelope style={styles.inputIcon} />
                            <input
                                type="email"
                                placeholder="john@example.com"
                                style={styles.input}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ ...styles.formGroup, flex: 1 }}>
                            <label style={styles.label}>Password</label>
                            <div style={styles.inputWrapper}>
                                <FaLock style={styles.inputIcon} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    style={styles.input}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = '#333'}
                                />
                            </div>
                        </div>
                        <div style={{ ...styles.formGroup, flex: 1 }}>
                            <label style={styles.label}>Confirm Password</label>
                            <div style={styles.inputWrapper}>
                                <FaRedo style={styles.inputIcon} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    style={styles.input}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = '#333'}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={styles.checkboxGroup}>
                        <input type="checkbox" style={{ accentColor: 'var(--color-primary)' }} />
                        <span>
                            I agree to the <a href="#" style={styles.link}>Terms of Service</a> and <a href="#" style={styles.link}>Privacy Policy</a>
                        </span>
                    </div>

                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Create Account
                    </button>
                </form>

                <p style={styles.loginLink}>
                    Already have an account?
                    <Link to="/login" style={{ ...styles.link, fontWeight: '700' }}>Log In</Link>
                </p>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .signup-card {
                        flex-direction: column !important;
                        max-width: 500px !important;
                    }
                    .signup-image {
                        min-height: 250px !important;
                        padding: 2rem !important;
                    }
                    .signup-image h2 {
                        font-size: 1.5rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default SignupCard;
