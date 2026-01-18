import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramHeader from '../components/ProgramHeader';
import ProgramFilters from '../components/ProgramFilters';
import ProgramGrid from '../components/ProgramGrid';

const Programs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const styles = {
        page: {
            minHeight: '100vh',
            width: '100%',
            backgroundColor: '#111',
        }
    };

    return (
        <div style={styles.page}>
            <Navbar />
            <ProgramHeader />
            <ProgramFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <ProgramGrid selectedCategory={selectedCategory} />
            <Footer />
        </div>
    );
};

export default Programs;
