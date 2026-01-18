import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navStyles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(17, 17, 17, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.2rem 5%',
            zIndex: 1000,
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.8rem',
            fontWeight: '900',
            color: 'var(--color-primary)',
            fontStyle: 'italic',
            letterSpacing: '-1px',
            textDecoration: 'none'
        },
        logoWhite: {
            color: '#fff',
        },
        nav: {
            display: 'flex',
            gap: '2rem',
        },
        link: {
            color: '#fff',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            textDecoration: 'none'
        },
        cta: {
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            padding: '0.7rem 2rem',
            borderRadius: '2px',
            fontWeight: '700',
            textTransform: 'uppercase',
            border: 'none',
            transition: 'all 0.3s ease',
            fontSize: '0.9rem',
        },
        mobileToggle: {
            display: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
        }
    };

    return (
        <header style={navStyles.header}>
            <Link to="/" style={navStyles.logo}>
                <span style={navStyles.logoWhite}>IRON</span> REVOLUTION
            </Link>

            {/* Desktop Nav */}
            <nav style={navStyles.nav} className="desktop-nav">
                <Link to="/" style={navStyles.link}>Home</Link>
                <Link to="/about" style={navStyles.link}>About</Link>
                <Link to="/contact" style={navStyles.link}>Contact</Link>
                <Link to="/programs" style={navStyles.link}>Programs</Link>
                <Link to="/trainers" style={navStyles.link}>Trainers</Link>
                <Link to="/pricing" style={navStyles.link}>Pricing</Link>
            </nav>

            <Link to="/login" style={{ textDecoration: 'none' }}>
                <button style={navStyles.cta} className="desktop-cta">Join Now</button>
            </Link>

            {/* Mobile Toggle */}
            <div style={navStyles.mobileToggle} className="mobile-toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/" style={navStyles.link} onClick={toggleMenu}>Home</Link>
                    <Link to="/about" style={navStyles.link} onClick={toggleMenu}>About</Link>
                    <Link to="/contact" style={navStyles.link} onClick={toggleMenu}>Contact</Link>
                    <Link to="/programs" style={navStyles.link} onClick={toggleMenu}>Programs</Link>
                    <Link to="/trainers" style={navStyles.link} onClick={toggleMenu}>Trainers</Link>
                    <Link to="/pricing" style={navStyles.link} onClick={toggleMenu}>Pricing</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
