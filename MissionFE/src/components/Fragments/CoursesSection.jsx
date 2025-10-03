import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Data sementara untuk kursus, nanti bisa diganti dari API
const courseData = [
    { id: 1, category: 'bisnis', title: 'Big 4 Auditor Financial Analyst', author: 'Jenna Ortega', rating: 5.0 ,price: 'Rp 300k', image: '/images/ProductsList/bisnis/Big 4 Auditor Financial Analyst.webp', desc:'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan materi keuangan yang bisa diaplikasikan di dunia kerja nyata.' },
    { id: 2, category: 'pemasaran', title: 'Digital Marketing Fundamental', author: 'John Doe', rating: 4.9, price: 'Rp 350k', image: '/images/ProductsList/pemasaran/Digital Marketing Fundamental.webp', desc:'Pelajari dasar-dasar digital marketing, mulai dari SEO, iklan online, hingga strategi konten untuk meningkatkan brand awareness.'  },
    { id: 3, category: 'desain', title: 'Manajemen Waktu Efektif', author: 'Jane Smith', rating: 4.7, price: 'Rp 250k', image: '/images/ProductsList/desain/UI UX Design Basics.webp', desc: 'Kuasai prinsip dasar desain antarmuka dan pengalaman pengguna untuk menciptakan aplikasi dan website yang ramah pengguna.' },
    { id: 4, category: 'pengembangan-diri', title: 'Public Speaking Mastery', author: 'Jenna Ortega', rating: 3.0, price: 'Rp 300k', image: '/images/ProductsList/pengembangan-diri/Public Speaking Mastery.webp', desc: 'Tingkatkan kemampuan berbicara di depan umum dengan teknik komunikasi efektif, gestur tubuh, dan kontrol rasa gugup.' },
    { id: 5, category: 'bisnis', title: 'Financial Planning for Beginners', author: 'Mike Ross', rating: 5.0, price: 'Rp 280k', image: '/images/ProductsList/bisnis/Financial Planning for Beginners.webp', desc: 'Belajar mengatur keuangan pribadi, membuat anggaran, dan merencanakan investasi untuk masa depan yang lebih stabil.' },
    { id: 6, category: 'pemasaran', title: 'Social Media Marketing Strategy', author: 'Emily White', rating: 4.6, price: 'Rp 275k', image: '/images/ProductsList/pemasaran/Social Media Marketing Strategy.webp', desc: 'Bangun strategi media sosial yang efektif untuk meningkatkan engagement, followers, dan penjualan bisnis Anda.' },
    { id: 7, category: 'desain', title: 'Design Fundamentals', author: 'Chris Green', rating: 4.9, price: 'Rp 320k', image: '/images/ProductsList/desain/Design Fundamentals.webp', desc: 'Kuasai desain grafis untuk membuat konten visual yang menarik dengan cara mudah dan cepat' },
    { id: 8, category: 'pengembangan-diri', title: 'Time Management Hacks', author: 'David Chen', rating: 3.3, price: 'Rp 310k', image: '/images/ProductsList/pengembangan-diri/Time Management Hacks.webp', desc: 'Maksimalkan produktivitas harian dengan teknik manajemen waktu, prioritas tugas, dan pengelolaan jadwal yang efektif.' },
    { id: 9, category: 'bisnis', title: 'Entrepreneurship 101', author: 'David Chen', rating: 1.2, price: 'Rp 310k', image: '/images/ProductsList/bisnis/Entrepreneurship 101.webp', desc:'Pelajari langkah awal membangun bisnis, mulai dari ide, strategi pemasaran, hingga mengelola tim kecil.' },
];

const categories = ['semua', 'pemasaran', 'desain', 'pengembangan-diri', 'bisnis'];

// Komponen helper baru untuk menampilkan bintang
const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            // Bintang Penuh
            stars.push(<svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            // Bintang Setengah
            stars.push(
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    <path d="M10 0v15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0z" fill="#FFFDF3"/>
                </svg>
            );
        } else {
            // Bintang Kosong
            stars.push(<svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>);
        }
    }
    return <div className="flex items-center">{stars}</div>;
};


const CourseCard = ({ course }) => (
    <Link to={`/products/${course.id}`} className="course-card bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 group">
        
        {/* === PERUBAHAN DI BAWAH INI === */}
        {/* 1. Container luar dibuat menjadi flexbox untuk menengahkan isinya */}
        <div className="w-full h-68 bg-white flex justify-center items-center p-4">
            {/* 2. Gambar dengan sudut membulat */}
            <img src={course.image} alt={course.title} className="w-full h-full rounded-md object-cover" />
        </div>
        {/* =============================== */}

        <div className="p-4 flex flex-col flex-grow -mt-4"> {/* Margin negatif untuk menarik konten ke atas */}
            <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-yellow-600 h-14">{course.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
                <img src="/images/avatar.png" alt="author" className="w-6 h-6 rounded-full inline-block mr-2" />
                <span>{course.author}</span>
            </p>
            <p className="text-sm text-gray-600 mb-3 flex-grow">{course.desc}</p>
            
            <div className="flex justify-between items-center mt-auto pt-2">
                <div className="flex items-center">
                    <StarRating rating={course.rating} />
                    <span className="text-xs text-gray-500 ml-2">({course.rating})</span>
                </div>
                <span className="text-lg font-bold text-green-600">{course.price}</span>
            </div>
        </div>
    </Link>
);


// Komponen utama untuk menampilkan daftar kursus dan filter (TIDAK BERUBAH)
const CoursesSection = () => {
    const [activeFilter, setActiveFilter] = useState('semua');

    const filteredCourses = activeFilter === 'semua'
        ? courseData
        : courseData.filter(course => course.category === activeFilter);

    return (
        <section className="courses-section py-12 px-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Koleksi Video Pembelajaran Unggulan</h2>
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`capitalize px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeFilter === category
                                ? 'bg-gray-800 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {category.replace('-', ' ')}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
};

export default CoursesSection;