import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHeader from '../components/ContactHeader';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/MapSection';

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactHeader />
            <ContactForm />
            <MapSection />
            <Footer />
        </>
    );
};

export default Contact;
