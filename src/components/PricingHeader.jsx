import React from 'react';

const PricingHeader = ({ billingCycle, setBillingCycle }) => {
    const styles = {
        section: {
            padding: '8rem 5% 4rem',
            backgroundColor: '#111',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        title: {
            fontSize: '3.5rem',
            color: '#fff',
            fontWeight: '900',
            marginBottom: '1rem',
        },
        subtitle: {
            color: '#aaa',
            fontSize: '1.2rem',
            marginBottom: '3rem',
            maxWidth: '600px',
        },
        toggleContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            backgroundColor: '#1E1E1E',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            border: '1px solid #333',
        },
        toggleLabel: (isActive) => ({
            color: isActive ? '#fff' : '#888',
            fontWeight: '700',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'color 0.3s',
        }),
        switch: {
            width: '50px',
            height: '26px',
            backgroundColor: billingCycle === 'Yearly' ? 'var(--color-primary)' : '#444',
            borderRadius: '50px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background 0.3s',
        },
        switchKnob: {
            width: '20px',
            height: '20px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            position: 'absolute',
            top: '3px',
            left: billingCycle === 'Yearly' ? '27px' : '3px',
            transition: 'left 0.3s',
        },
        discountBadge: {
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            fontSize: '0.7rem',
            fontWeight: '800',
            padding: '0.2rem 0.6rem',
            borderRadius: '50px',
            marginLeft: '0.5rem',
        }
    };

    return (
        <div style={styles.section}>
            <h1 style={styles.title}>Unlock Your Potential</h1>
            <p style={styles.subtitle}>
                Transparent pricing for every fitness level. No hidden fees, cancel anytime.
            </p>

            <div style={styles.toggleContainer}>
                <span
                    style={styles.toggleLabel(billingCycle === 'Monthly')}
                    onClick={() => setBillingCycle('Monthly')}
                >
                    Monthly
                </span>

                <div
                    style={styles.switch}
                    onClick={() => setBillingCycle(prev => prev === 'Monthly' ? 'Yearly' : 'Monthly')}
                >
                    <div style={styles.switchKnob}></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span
                        style={styles.toggleLabel(billingCycle === 'Yearly')}
                        onClick={() => setBillingCycle('Yearly')}
                    >
                        Yearly
                    </span>
                    <span style={styles.discountBadge}>SAVE 20%</span>
                </div>
            </div>
        </div>
    );
};

export default PricingHeader;
