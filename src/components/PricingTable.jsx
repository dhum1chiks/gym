import React from 'react';
import { FaCheck, FaMinus } from 'react-icons/fa';

const PricingTable = ({ billingCycle }) => {
    // Helper to calculate price
    const getPrice = (basePrice) => {
        if (basePrice === 'Custom') return 'Custom';
        if (billingCycle === 'Monthly') return basePrice;
        // 20% discount for yearly
        return Math.floor(basePrice * 0.8);
    };

    const categories = [
        {
            title: "Gym Access",
            rows: [
                { label: "Access Hours", starter: "Off-peak", athlete: "24/7 Access", legend: "24/7 Access" },
                { label: "Home Gym Access", starter: true, athlete: true, legend: true },
                { label: "Global Access (All Locations)", starter: false, athlete: true, legend: true },
            ]
        },
        {
            title: "Training & Amenities",
            rows: [
                { label: "Group Classes", starter: "Pay per class", athlete: "Unlimited", legend: "Priority Booking" },
                { label: "Guest Passes", starter: "0", athlete: "2 / month", legend: "Unlimited" },
                { label: "Sauna & Steam Room", starter: false, athlete: true, legend: true },
                { label: "Towel Service", starter: false, athlete: true, legend: true },
            ]
        },
        {
            title: "VIP Services",
            rows: [
                { label: "Personal Training", starter: "Add-on", athlete: "1 Session / mo", legend: "4 Sessions / mo" },
                { label: "Nutrition Plan", starter: false, athlete: false, legend: true },
                { label: "Private Locker", starter: false, athlete: false, legend: true },
            ]
        }
    ];

    const renderCell = (value) => {
        if (value === true) return <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ backgroundColor: 'var(--color-primary)', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111', fontSize: '12px' }}><FaCheck /></div></div>;
        if (value === false) return <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ width: '24px', height: '1px', backgroundColor: '#444' }}></div></div>;
        return <span style={{ color: '#ddd', fontSize: '0.9rem' }}>{value}</span>;
    };

    const styles = {
        container: {
            padding: '0 5% 6rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        tableWrapper: {
            backgroundColor: '#1E1E1E',
            borderRadius: '16px',
            border: '1px solid #333',
            overflow: 'hidden',
        },
        // Header Grid
        headerGrid: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            borderBottom: '1px solid #333',
        },
        headerCell: {
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid #2a2a2a', // Subtle divider
            position: 'relative',
        },
        planName: {
            fontSize: '1.5rem',
            fontWeight: '800',
            color: '#fff',
            marginBottom: '0.5rem',
        },
        bestValue: {
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--color-primary)', // Yellow Badge
            color: '#111',
            padding: '0.2rem 1rem',
            fontSize: '0.7rem',
            fontWeight: '800',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            textTransform: 'uppercase',
        },
        price: {
            fontSize: '2.5rem',
            fontWeight: '900',
            color: '#fff',
        },
        period: {
            fontSize: '0.9rem',
            color: '#888',
            fontWeight: '400',
        },

        // Category Row
        categoryRow: {
            backgroundColor: '#181818',
            padding: '1rem 2rem',
            color: '#888',
            fontWeight: '800',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            letterSpacing: '1px',
            borderBottom: '1px solid #333',
        },

        // Data Row
        dataRow: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            borderBottom: '1px solid #333',
            transition: 'background 0.2s',
        },
        labelCell: {
            padding: '1.5rem 2rem',
            color: '#fff',
            fontWeight: '600',
            fontSize: '0.95rem',
            borderRight: '1px solid #2a2a2a',
        },
        dataCell: {
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRight: '1px solid #2a2a2a',
        },

        // Footer Actions
        footerGrid: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            padding: '2rem',
            backgroundColor: '#1E1E1E',
        },
        btnCell: {
            padding: '0 1rem',
        },
        btnFilled: {
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--color-primary)', // Yellow
            color: '#111',
            border: 'none',
            borderRadius: '50px',
            fontWeight: '800',
            fontSize: '0.9rem',
            cursor: 'pointer',
        },
        btnOutline: {
            width: '100%',
            padding: '1rem',
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #555',
            borderRadius: '50px',
            fontWeight: '700',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'border 0.2s',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.tableWrapper} className="pricing-table-wrapper">
                {/* Header Row */}
                <div style={styles.headerGrid} className="pricing-grid">
                    <div style={{ ...styles.headerCell, alignItems: 'flex-start', borderRight: 'none' }}>
                        <span style={{ color: '#888', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px' }}>COMPARE PLANS</span>
                    </div>
                    <div style={styles.headerCell}>
                        <div style={styles.planName}>Starter</div>
                    </div>
                    <div style={{ ...styles.headerCell, backgroundColor: 'rgba(244, 208, 63, 0.05)' }}> {/* Slight yellow tint for active col */}
                        <div style={styles.bestValue}>Best Value</div>
                        <div style={styles.planName}>Athlete</div>
                    </div>
                    <div style={{ ...styles.headerCell, borderRight: 'none' }}>
                        <div style={styles.planName}>Legend</div>
                    </div>

                    {/* Price Row (Sub-header) */}
                    <div style={{ ...styles.headerCell, alignItems: 'flex-start', borderRight: 'none', paddingTop: 0 }}>
                        <span style={{ color: '#fff', fontWeight: '700' }}>Monthly Price</span>
                    </div>
                    <div style={{ ...styles.headerCell, paddingTop: 0 }}>
                        <div style={styles.price}>
                            ${getPrice(29)}<span style={styles.period}>/mo</span>
                        </div>
                    </div>
                    <div style={{ ...styles.headerCell, backgroundColor: 'rgba(244, 208, 63, 0.05)', paddingTop: 0 }}>
                        <div style={styles.price}>
                            ${getPrice(59)}<span style={styles.period}>/mo</span>
                        </div>
                    </div>
                    <div style={{ ...styles.headerCell, borderRight: 'none', paddingTop: 0 }}>
                        <div style={styles.price}>Custom</div>
                    </div>
                </div>

                {/* Rows */}
                {categories.map((cat, catIdx) => (
                    <div key={catIdx}>
                        <div style={styles.categoryRow}>{cat.title}</div>
                        {cat.rows.map((row, rowIdx) => (
                            <div key={rowIdx} style={styles.dataRow} className="pricing-grid">
                                <div style={{ ...styles.labelCell, borderRight: 'none' }}>{row.label}</div>
                                <div style={styles.dataCell}>{renderCell(row.starter)}</div>
                                <div style={{ ...styles.dataCell, backgroundColor: 'rgba(244, 208, 63, 0.05)' }}>{renderCell(row.athlete)}</div>
                                <div style={{ ...styles.dataCell, borderRight: 'none' }}>{renderCell(row.legend)}</div>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Footer Buttons */}
                <div style={styles.footerGrid} className="pricing-grid">
                    <div style={{ borderRight: 'none' }}></div>
                    <div style={styles.btnCell}>
                        <button style={styles.btnOutline} onMouseEnter={(e) => e.target.style.borderColor = '#fff'} onMouseLeave={(e) => e.target.style.borderColor = '#555'}>Select Starter</button>
                    </div>
                    <div style={{ ...styles.btnCell, backgroundColor: 'rgba(244, 208, 63, 0.05)' }}>
                        <button style={styles.btnFilled}>Select Athlete</button>
                    </div>
                    <div style={{ ...styles.btnCell, borderRight: 'none' }}>
                        <button style={styles.btnOutline} onMouseEnter={(e) => e.target.style.borderColor = '#fff'} onMouseLeave={(e) => e.target.style.borderColor = '#555'}>Contact Us</button>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .pricing-table-wrapper {
                        overflow-x: auto;
                    }
                    .pricing-grid {
                        min-width: 800px; /* Force visual width to keep alignment */
                    }
                }
            `}</style>
        </div>
    );
};

export default PricingTable;
