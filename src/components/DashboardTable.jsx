import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const DashboardTable = () => {
    const rows = [
        { name: "Sarah Jenkins", email: "sarah.j@example.com", date: "Oct 24, 2023", plan: "Pro Plan", status: "Pending", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
        { name: "Michael Chen", email: "m.chen@example.com", date: "Oct 23, 2023", plan: "Standard", status: "Pending", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
        { name: "Jessica Alba", email: "j.alba@test.com", date: "Oct 23, 2023", plan: "Elite", status: "Pending", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
    ];

    const styles = {
        container: {
            backgroundColor: '#1E1E1E',
            borderRadius: '12px',
            border: '1px solid #333',
            padding: '1.5rem',
            flex: 2,
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
        },
        title: {
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '700',
        },
        viewAll: {
            color: 'var(--color-primary)',
            fontSize: '0.9rem',
            cursor: 'pointer',
        },
        table: {
            width: '100%',
            color: '#ccc',
            fontSize: '0.9rem',
            borderCollapse: 'collapse',
        },
        th: {
            textAlign: 'left',
            paddingBottom: '1rem',
            color: '#666',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        td: {
            padding: '1rem 0',
            verticalAlign: 'middle',
        },
        userInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
        },
        avatar: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        name: {
            display: 'block',
            color: '#fff',
            fontWeight: '600',
        },
        email: {
            fontSize: '0.8rem',
            color: '#888',
        },
        planBadge: {
            backgroundColor: '#333',
            padding: '0.3rem 0.8rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            color: '#ddd',
        },
        status: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--color-primary)', // Yellow text for "Pending"
        },
        dot: {
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
        },
        actionBtn: (type) => ({
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginLeft: '0.5rem',
            backgroundColor: type === 'approve' ? 'var(--color-primary)' : '#333',
            color: type === 'approve' ? '#111' : '#aaa',
        })
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h3 style={styles.title}>Pending Registrations</h3>
                <span style={styles.viewAll}>View All</span>
            </div>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Applicant</th>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Plan</th>
                        <th style={styles.th}>Status</th>
                        <th style={{ ...styles.th, textAlign: 'right' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} style={{ borderBottom: index !== rows.length - 1 ? '1px solid #333' : 'none' }}>
                            <td style={styles.td}>
                                <div style={styles.userInfo}>
                                    <img src={row.img} alt={row.name} style={styles.avatar} />
                                    <div>
                                        <span style={styles.name}>{row.name}</span>
                                        <span style={styles.email}>{row.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td style={styles.td}>{row.date}</td>
                            <td style={styles.td}>
                                <span style={styles.planBadge}>{row.plan}</span>
                            </td>
                            <td style={styles.td}>
                                <div style={styles.status}>
                                    <div style={styles.dot}></div> {row.status}
                                </div>
                            </td>
                            <td style={{ ...styles.td, textAlign: 'right' }}>
                                <button style={styles.actionBtn('reject')}><FaTimes /></button>
                                <button style={styles.actionBtn('approve')}><FaCheck /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardTable;
