import React, { useState } from 'react';
import TrainerFilters from './TrainerFilters';
import TrainerCard from './TrainerCard';

const TrainerGrid = () => {
    const [selectedFilter, setSelectedFilter] = useState('All Expertise');

    const trainers = [
        {
            id: 1,
            name: "Alex Drago",
            role: "High-Performance Coach",
            certification: "NASM Certified",
            category: "Strength",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Sarah Jenks",
            role: "Yoga Specialist",
            certification: "RYT 500 Certified",
            category: "Yoga & Mobility",
            image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Mike Ross",
            role: "Strength & Conditioning",
            certification: "CrossFit Level 3",
            category: "Strength",
            image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Elena Fisher",
            role: "Cardio Expert",
            certification: "Marathon Coach",
            category: "Cardio & HIIT",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Marcus Thorne",
            role: "Bodybuilding",
            certification: "IFBB Pro",
            category: "Strength",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 6,
            name: "Jessica Lee",
            role: "Pilates & Rehab",
            certification: "Physio Certified",
            category: "Yoga & Mobility",
            // Using a distinct, high quality image
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const filteredTrainers = selectedFilter === 'All Expertise'
        ? trainers
        : trainers.filter(t => t.category === selectedFilter);

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            padding: '0 5% 6rem',
        }
    };

    return (
        <>
            <TrainerFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            <div style={styles.grid}>
                {filteredTrainers.map(trainer => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                ))}
            </div>
        </>
    );
};

export default TrainerGrid;
