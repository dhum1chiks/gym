import React from 'react';

const TrainerSchedule = () => {
    const schedule = [
        { day: "Mon", class: "Metabolic Conditioning", location: "Studio A", time: "06:00 AM" },
        { day: "Tue", class: "Power Lifting 101", location: "Weight Room", time: "05:30 PM" },
        { day: "Thu", class: "Advanced HIIT", location: "Studio B", time: "07:00 AM" },
        { day: "Sat", class: "Mobility & Recovery", location: "Yoga Deck", time: "09:00 AM" },
    ];

    const styles = {
        section: {
            marginBottom: '4rem',
        },
        headerRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '2rem',
        },
        title: {
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#fff',
            borderLeft: '4px solid var(--color-primary)',
            paddingLeft: '1rem',
        },
        timezone: {
            color: '#888',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
        },
        tableContainer: {
            backgroundColor: '#1E1E1E',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #333',
        },
        tableHeader: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            padding: '1rem 2rem',
            backgroundColor: '#252525',
            borderBottom: '1px solid #333',
            color: '#aaa',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        tableRow: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            padding: '1.5rem 2rem',
            borderBottom: '1px solid #333',
            alignItems: 'center',
            transition: 'background 0.2s',
            cursor: 'default',
        },
        day: {
            color: '#fff',
            fontWeight: '800',
        },
        classTitle: {
            color: '#fff',
            fontWeight: '700',
            marginBottom: '0.3rem',
            display: 'block',
        },
        location: {
            color: '#888',
            fontSize: '0.8rem',
        },
        time: {
            color: 'var(--color-primary)',
            fontWeight: '700',
            fontFamily: 'monospace',
            textAlign: 'right',
        }
    };

    return (
        <div style={styles.section}>
            <div style={styles.headerRow}>
                <h2 style={styles.title}>Weekly Schedule</h2>
                <span style={styles.timezone}>Timezone: EST</span>
            </div>

            <div style={styles.tableContainer}>
                <div style={styles.tableHeader}>
                    <div>Day</div>
                    <div>Class</div>
                    <div style={{ textAlign: 'right' }}>Time</div>
                </div>

                {schedule.map((row, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.tableRow,
                            borderBottom: index === schedule.length - 1 ? 'none' : '1px solid #333'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#252525'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <div style={styles.day}>{row.day}</div>
                        <div>
                            <span style={styles.classTitle}>{row.class}</span>
                            <span style={styles.location}>{row.location}</span>
                        </div>
                        <div style={styles.time}>{row.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainerSchedule;
