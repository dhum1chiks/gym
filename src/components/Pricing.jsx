import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Pricing = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const plans = [
        {
            name: "Basic",
            price: "29",
            features: [
                "Gym Access (Off-peak hours)",
                "Locker Room Access",
                "1 Free Training Session",
                false, // No Group classes
                false  // No Sauna
            ],
            highlight: false
        },
        {
            name: "Revolution Pro",
            price: "49",
            features: [
                "24/7 Unlimited Gym Access",
                "Unlimited Group Classes",
                "Sauna & Steam Room",
                "Free Guest Pass (1/mo)",
                "Nutrition Guide App"
            ],
            highlight: true
        },
        {
            name: "Elite",
            price: "89",
            features: [
                "All Pro Benefits",
                "2x Personal Training /mo",
                "Private Locker",
                "Towel Service",
                "Smoothie Bar Discount (20%)"
            ],
            highlight: false
        }
    ];

    const styles = {
        section: {
            padding: '6rem 5%',
            backgroundColor: 'var(--color-bg)',
            textAlign: 'center',
        },
        header: {
            marginBottom: '4rem',
        },
        title: {
            fontSize: '3rem',
            marginBottom: '1rem',
        },
        subtitle: {
            color: '#aaa',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center', // Aligns vertically
        },
        card: (isHighlight, isHovered) => ({
            backgroundColor: 'var(--color-bg-light)',
            padding: '3rem 2rem',
            borderRadius: '8px',
            border: isHovered ? '2px solid var(--color-primary)' : '1px solid #333',
            position: 'relative',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            zIndex: isHovered ? '10' : '1',
            boxShadow: isHovered ? '0 0 30px rgba(244, 208, 63, 0.1)' : 'none',
            transition: 'all 0.3s ease',
        }),
        badge: {
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'var(--color-primary)',
            color: '#111',
            padding: '0.2rem 1rem',
            fontWeight: '700',
            fontSize: '0.8rem',
            borderBottomLeftRadius: '8px',
            borderTopRightRadius: '6px', // Matches card
        },
        planName: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
        price: {
            fontSize: '3.5rem',
            fontWeight: '800',
            color: 'var(--color-primary)',
            marginBottom: '0.5rem',
        },
        perMonth: {
            fontSize: '1rem',
            color: '#aaa',
            fontWeight: '400',
        },
        features: {
            listStyle: 'none',
            margin: '2rem 0',
            textAlign: 'left',
            minHeight: '200px', // Ensures alignment
        },
        featureItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '1rem',
            color: '#ddd',
            fontSize: '0.95rem',
        },
        icon: {
            color: 'var(--color-primary)',
        },
        iconDim: {
            color: '#444',
        },
        strikethrough: {
            textDecoration: 'line-through',
            color: '#555',
        },
        button: (isHighlight, isHovered) => ({
            width: '100%',
            padding: '1rem',
            backgroundColor: isHighlight || isHovered ? 'var(--color-primary)' : 'transparent',
            color: isHighlight || isHovered ? '#111' : '#fff',
            border: isHighlight || isHovered ? 'none' : '1px solid #555',
            borderRadius: '4px',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginTop: '1rem',
            transition: 'all 0.3s',
            cursor: 'pointer',
        })
    };

    return (
        <section id="pricing" style={styles.section}>
            <div style={styles.header}>
                <h2 style={styles.title}>MEMBERSHIP <span style={{ color: 'var(--color-primary)' }}>PLANS</span></h2>
                <p style={styles.subtitle}>No hidden fees. No long-term contracts. Just results.</p>
            </div>

            <div style={styles.grid}>
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        style={styles.card(plan.highlight, hoveredIndex === index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {plan.highlight && <div style={styles.badge}>MOST POPULAR</div>}
                        <h3 style={styles.planName}>{plan.name}</h3>
                        <div style={styles.price}>
                            ${plan.price}<span style={styles.perMonth}>/mo</span>
                        </div>

                        <ul style={styles.features}>
                            {plan.features.map((feature, i) => (
                                <li key={i} style={styles.featureItem}>
                                    {feature ? (
                                        <>
                                            <FaCheck style={styles.icon} /> {feature}
                                        </>
                                    ) : (
                                        <>
                                            <FaTimes style={styles.iconDim} /> <span style={styles.strikethrough}>Not Available</span>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <button style={styles.button(plan.highlight, hoveredIndex === index)}>
                            {plan.highlight ? 'Join Revolution' : `Select ${plan.name}`}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
