import React from 'react';
import { FaUsers, FaDollarSign, FaDumbbell, FaChartPie } from 'react-icons/fa';

const DashboardStats = () => {
    const stats = [
        { label: "Total Members", value: "1,240", change: "+5.2%", icon: FaUsers },
        { label: "Monthly Revenue", value: "$45,200", change: "+12%", icon: FaDollarSign },
        { label: "Active Trainers", value: "18", change: "0%", icon: FaDumbbell },
        { label: "Gym Occupancy", value: "65%", change: "+2%", icon: FaChartPie },
    ];

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
        },
        card: {
            backgroundColor: '#1E1E1E',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid #333',
            display: 'flex',
            flexDirection: 'column',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
        },
        iconBox: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: 'rgba(244, 208, 63, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)',
        },
        badge: {
            backgroundColor: 'rgba(75, 181, 67, 0.2)',
            color: '#4bb543',
            fontSize: '0.8rem',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            height: 'fit-content',
        },
        label: {
            color: '#888',
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
        },
        value: {
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: '800',
        },
        // Simple distinct visual for the 4th card (Occupancy) to match design "Progress Circle" style roughly
        progressRing: {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '3px solid #333',
            borderTopColor: 'var(--color-primary)',
        }
    };

    return (
        <div style={styles.grid}>
            {stats.map((item, index) => (
                <div key={index} style={styles.card}>
                    <div style={styles.header}>
                        <div style={styles.iconBox}>
                            <item.icon />
                        </div>
                        <span style={styles.badge}>{item.change}</span>
                    </div>
                    <span style={styles.label}>{item.label}</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={styles.value}>{item.value}</span>
                        {index === 3 && <div style={styles.progressRing}></div>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
