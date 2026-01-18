import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramGrid = ({ selectedCategory }) => {
    // Mock Data based on the reference image description
    const programs = [
        {
            id: 1,
            title: "Crossfit Elite",
            description: "High-intensity functional movements designed to build strength, stamina, and agility.",
            price: 120,
            category: "Crossfit",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
            trainerName: "Alex Stone",
            trainerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
            schedule: "Mon-Sat: 6AM"
        },
        {
            id: 2,
            title: "Yoga Flow",
            description: "Restore balance and flexibility with our guided Vinyasa and Hatha yoga sessions.",
            price: 80,
            category: "Yoga",
            image: "https://images.unsplash.com/photo-1544367563-121910aace75?q=80&w=2000&auto=format&fit=crop",
            trainerName: "Sarah Lee",
            trainerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
            schedule: "Tue/Thu: 7PM"
        },
        {
            id: 3,
            title: "Pro Bodybuilding",
            description: "Focus on hypertrophy and muscle definition with personalized lifting routines.",
            price: 100,
            category: "Bodybuilding",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000&auto=format&fit=crop",
            trainerName: "Mike Ross",
            trainerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
            schedule: "Daily: Open Gym"
        },
        {
            id: 4,
            title: "HIIT Blast",
            description: "Burn calories fast with interval training that keeps your heart rate up.",
            price: 90,
            category: "HIIT",
            image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop",
            trainerName: "Jenna K",
            trainerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
            schedule: "M/W/F: 6PM"
        },
        {
            id: 5,
            title: "Fight Club",
            description: "Master technique, footwork, and conditioning in our professional boxing classes.",
            price: 110,
            category: "Boxing",
            image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1887&auto=format&fit=crop",
            trainerName: "David C",
            trainerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
            schedule: "Tue/Thu/Sat: 5PM"
        },
        {
            id: 6,
            title: "Street Workout",
            description: "Bodyweight mastery focusing on control, leverage, and core stability.",
            price: 85,
            category: "Bodyweight",
            image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
            trainerName: "Marcus G",
            trainerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
            schedule: "Mon/Wed: 8PM"
        }
    ];

    const filteredPrograms = selectedCategory === 'All'
        ? programs
        : programs.filter(p => p.category === selectedCategory);

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
            padding: '2rem 5% 6rem',
        },
        noResults: {
            color: '#aaa',
            textAlign: 'center',
            fontSize: '1.2rem',
            gridColumn: '1 / -1',
            padding: '4rem',
        }
    };

    return (
        <div style={styles.grid}>
            {filteredPrograms.length > 0 ? (
                filteredPrograms.map(program => (
                    <ProgramCard key={program.id} program={program} />
                ))
            ) : (
                <div style={styles.noResults}>
                    No programs found for this category.
                </div>
            )}
        </div>
    );
};

export default ProgramGrid;
