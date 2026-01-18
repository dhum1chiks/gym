import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const styles = {
        page: {
            minHeight: '100vh',
            width: '100%',
            backgroundColor: '#111',
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            paddingTop: '6rem', // Account for fixed navbar
            backgroundImage: 'radial-gradient(circle at center, #1a1a1a 0%, #111 70%)',
        }
    };

    return (
        <div style={styles.page}>
            <Navbar />
            <div style={styles.content}>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
