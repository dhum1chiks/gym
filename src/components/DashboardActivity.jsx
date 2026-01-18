import React from 'react';
import { FaCheckCircle, FaDollarSign, FaUserPlus, FaCalendarPlus, FaSignInAlt } from 'react-icons/fa';

const DashboardActivity = () => {
    const activities = [
        { title: "Member Checked In", desc: "John Doe • 2 mins ago", icon: FaCheckCircle, color: "#4bb543" },
        { title: "Payment Received - $50", desc: "Monthly Subscription • 15 mins ago", icon: FaDollarSign, color: "var(--color-primary)" }, // Payment usually green, but making key action yellow is fine or blue. Use yellow for branding continuity where blue was used.
        { title: "New Registration", desc: "Sarah L. (Pending) • 1 hour ago", icon: FaUserPlus, color: "#FFA500" },
        { title: "Class Started: Yoga", desc: "Studio B • 1 hour ago", icon: FaCalendarPlus, color: "#9c27b0" },
        { title: "Trainer Logged In", desc: "Mike T. • 2 hours ago", icon: FaSignInAlt, color: "#777" },
    ];

    const styles = {
        container: {
            backgroundColor: '#1E1E1E',
            borderRadius: '12px',
            border: '1px solid #333',
            padding: '1.5rem',
            flex: 1,
            minWidth: '300px',
        },
        title: {
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
        },
        item: {
            display: 'flex',
            gap: '1rem',
            position: 'relative',
        },
        // Vertical line
        line: {
            position: 'absolute',
            left: '16px',
            top: '30px',
            bottom: '-24px',
            width: '2px',
            backgroundColor: '#333',
            zIndex: 0,
        },
        iconBox: (color) => ({
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: '#2A2A2A',
            border: `2px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
            zIndex: 1,
            fontSize: '0.8rem',
        }),
        content: {
            display: 'flex',
            flexDirection: 'column',
        },
        activityTitle: {
            color: '#fff',
            fontSize: '0.95rem',
            fontWeight: '600',
            marginBottom: '0.2rem',
        },
        activityDesc: {
            color: '#888',
            fontSize: '0.8rem',
        }
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Recent Activity</h3>
            <div style={styles.list}>
                {activities.map((item, index) => (
                    <div key={index} style={styles.item}>
                        {index !== activities.length - 1 && <div style={styles.line}></div>}
                        <div style={styles.iconBox(item.color)}>
                            <item.icon />
                        </div>
                        <div style={styles.content}>
                            <span style={styles.activityTitle}>{item.title}</span>
                            <span style={styles.activityDesc}>{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardActivity;
