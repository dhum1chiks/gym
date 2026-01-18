import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import DashboardStats from '../components/DashboardStats';
import DashboardTable from '../components/DashboardTable';
import DashboardActivity from '../components/DashboardActivity';
import { FaCalendarAlt, FaPlus } from 'react-icons/fa';

const AdminDashboard = () => {
    const styles = {
        page: {
            display: 'flex',
            backgroundColor: '#111',
            minHeight: '100vh',
            color: '#fff',
        },
        mainContent: {
            marginLeft: '280px', // Matches sidebar width
            padding: '2rem',
            flex: 1,
            width: 'calc(100% - 280px)',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            alignItems: 'center',
        },
        title: {
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
        },
        subtitle: {
            color: '#888',
        },
        actions: {
            display: 'flex',
            gap: '1rem',
        },
        dateBtn: {
            backgroundColor: '#1E1E1E',
            border: '1px solid #333',
            color: '#fff',
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
        },
        addBtn: {
            backgroundColor: 'var(--color-primary)',
            border: 'none',
            color: '#111',
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
        },
        contentRow: {
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
        }
    };

    return (
        <div style={styles.page}>
            <AdminSidebar />

            <div style={styles.mainContent}>
                <div style={styles.header}>
                    <div>
                        <h1 style={styles.title}>Dashboard Overview</h1>
                        <p style={styles.subtitle}>Welcome back, here's what's happening today.</p>
                    </div>

                    <div style={styles.actions}>
                        <button style={styles.dateBtn}><FaCalendarAlt /> Oct 24, 2023</button>
                        <button style={styles.addBtn}><FaPlus /> Add Member</button>
                    </div>
                </div>

                <DashboardStats />

                <div style={styles.contentRow}>
                    <DashboardTable />
                    <DashboardActivity />
                </div>
            </div>

            {/* Mobile Sidebar Overlay would go here if we were implementing mobile responsiveness for admin */}
            <style>{`
                @media (max-width: 1024px) {
                    .content-row {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
