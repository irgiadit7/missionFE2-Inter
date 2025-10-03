import React from 'react';
import Header from '../components/Layouts/Header';
import Hero from '../components/Fragments/Hero';
import CoursesSection from '../components/Fragments/CoursesSection';
import CtaSection from '../components/Fragments/CtaSection';
import Footer from '../components/Layouts/Footer';

const HomePage = () => {
    return (
        // Ganti 'bg-[#FFFDF3]' dengan warna background yang sesuai dari gambar
        <div className="bg-[#FFFDF3] text-gray-800">
            <Header />
            <main>
                <Hero />
                <CoursesSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;