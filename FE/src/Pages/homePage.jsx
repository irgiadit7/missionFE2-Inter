import React, { useContext } from 'react';
import Header from '../components/Layouts/Header';
import Hero from '../components/Fragments/Hero';
import CoursesSection from '../components/Fragments/CoursesSection';
import CtaSection from '../components/Fragments/CtaSection';
import Footer from '../components/Layouts/Footer';
import { DarkMode } from '../context/DarkMode';
import ChatAssistant from '../components/Fragments/ChatAssistant'; 

const HomePage = () => {
    const { isDarkMode } = useContext(DarkMode);

    return (
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#FFFDF3]'} text-gray-800`}>
            <Header />
            <main>
                <Hero />
                <CoursesSection />
                <CtaSection />
            </main>
            <Footer />
            <ChatAssistant /> 
        </div>
    );
};

export default HomePage;