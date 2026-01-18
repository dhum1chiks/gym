import React from 'react';

const ProgramSchedule = () => {
    const schedule = [
        { day: "Monday", focus: "Full Body Power", duration: "45 Min", equipment: "Dumbbells" },
        { day: "Tuesday", focus: "Sprint Intervals", duration: "30 Min", equipment: "None" },
        { day: "Wednesday", focus: "Active Recovery & Core", duration: "40 Min", equipment: "Mat" },
        { day: "Thursday", focus: "Upper Body Strength", duration: "50 Min", equipment: "Dumbbells, Bench" },
        { day: "Friday", focus: "Metabolic Conditioning", duration: "35 Min", equipment: "Kettlebell" },
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
            color: '#fff',
            fontWeight: '800',
        },
        downloadLink: {
            color: 'var(--color-primary)',
            fontSize: '0.9rem',
            fontWeight: '700',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        tableContainer: {
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #333',
        },
        tableHeader: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr 2fr',
            padding: '1rem 2rem',
            backgroundColor: '#2A2A2A',
            borderBottom: '1px solid #333',
            color: '#aaa',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        tableRow: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr 2fr',
            padding: '1.5rem 2rem',
            borderBottom: '1px solid #333',
            color: '#ddd',
            fontSize: '0.9rem',
            alignItems: 'center',
        },
        lastRow: {
            borderBottom: 'none',
        },
        day: {
            fontWeight: '700',
            color: '#fff',
        }
    };

    return (
        <div style={styles.section}>
            <div style={styles.headerRow}>
                <h2 style={styles.title}>Weekly Schedule</h2>
                <span style={styles.downloadLink}>Download PDF</span>
            </div>

            <div style={styles.tableContainer}>
                <div style={styles.tableHeader}>
                    <div>Day</div>
                    <div>Focus</div>
                    <div>Duration</div>
                    <div>Equipment</div>
                </div>

                {schedule.map((row, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.tableRow,
                            ...(index === schedule.length - 1 ? styles.lastRow : {})
                        }}
                    >
                        <div style={styles.day}>{row.day}</div>
                        <div>{row.focus}</div>
                        <div>{row.duration}</div>
                        <div>{row.equipment}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramSchedule;
