import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingHeader from '../components/PricingHeader';
import PricingTable from '../components/PricingTable';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('Monthly');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const styles = {
        page: {
            backgroundColor: '#111',
            minHeight: '100vh',
            width: '100%',
            color: '#fff',
        }
    };

    return (
        <div style={styles.page}>
            <Navbar />
            <PricingHeader billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
            <PricingTable billingCycle={billingCycle} />
            <Footer />
        </div>
    );
};

export default Pricing;
