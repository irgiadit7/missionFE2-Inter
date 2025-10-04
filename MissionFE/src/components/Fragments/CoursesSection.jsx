import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';


const courseData = [
    { id: 1, category: 'bisnis', title: 'Big 4 Auditor Financial Analyst', author: 'Jenna Ortega', rating: 5.0, price: 'Rp 300k', image: '/images/ProductsList/bisnis/Big 4 Auditor Financial Analyst.webp', desc: 'Mulai transformasi karir Anda di bidang keuangan dengan kursus intensif ini. Anda akan mempelajari proses audit, analisis laporan keuangan, dan valuasi bisnis seperti yang diterapkan di firma audit Big Four. Cocok untuk mahasiswa akuntansi atau profesional muda yang ingin berkarir sebagai analis keuangan atau auditor ternama.' },
    { id: 2, category: 'pemasaran', title: 'Digital Marketing Fundamental', author: 'John Doe', rating: 4.9, price: 'Rp 350k', image: '/images/ProductsList/pemasaran/Digital Marketing Fundamental.webp', desc: 'Kuasai dunia pemasaran digital dari nol. Kursus ini mencakup semua dasar-dasar penting, mulai dari Search Engine Optimization (SEO), Search Engine Marketing (SEM), media sosial, hingga email marketing. Pelajari cara membangun strategi yang efektif untuk meningkatkan brand awareness dan mendorong penjualan secara online.' },
    { id: 3, category: 'desain', title: 'UI/UX Design Basics', author: 'Jane Smith', rating: 4.7, price: 'Rp 250k', image: '/images/ProductsList/desain/UI UX Design Basics.webp', desc: 'Masuki dunia desain produk digital dengan menguasai prinsip dasar UI (User Interface) dan UX (User Experience). Anda akan belajar proses desain dari riset pengguna, membuat wireframe, hingga prototipe interaktif menggunakan alat desain populer seperti Figma. Ciptakan aplikasi dan website yang tidak hanya indah, tetapi juga ramah pengguna.' },
    { id: 4, category: 'pengembangan-diri', title: 'Public Speaking Mastery', author: 'Jenna Ortega', rating: 3.0, price: 'Rp 300k', image: '/images/ProductsList/pengembangan-diri/Public Speaking Mastery.webp', desc: 'Ubah rasa gugup menjadi kepercayaan diri saat berbicara di depan umum. Kursus ini akan membekali Anda dengan teknik komunikasi yang efektif, cara menyusun pidato yang memukau, mengontrol gestur tubuh, dan berinteraksi dengan audiens. Ideal untuk profesional, mahasiswa, atau siapa saja yang ingin lebih persuasif.' },
    { id: 5, category: 'bisnis', title: 'Financial Planning for Beginners', author: 'Mike Ross', rating: 5.0, price: 'Rp 280k', image: '/images/ProductsList/bisnis/Financial Planning for Beginners.webp', desc: 'Ambil kendali atas masa depan keuangan Anda. Pelajari cara mengatur keuangan pribadi secara efektif, membuat anggaran bulanan yang realistis, merencanakan dana darurat, dan mulai berinvestasi untuk mencapai tujuan finansial jangka panjang, seperti membeli rumah atau mempersiapkan pensiun.' },
    { id: 6, category: 'pemasaran', title: 'Social Media Marketing Strategy', author: 'Emily White', rating: 4.6, price: 'Rp 275k', image: '/images/ProductsList/pemasaran/Social Media Marketing Strategy.webp', desc: 'Manfaatkan kekuatan media sosial untuk bisnis Anda. Kursus ini akan mengajarkan cara membangun strategi konten yang menarik, menumbuhkan followers secara organik, menjalankan iklan berbayar yang efektif, dan menganalisis performa kampanye di berbagai platform seperti Instagram, Facebook, dan TikTok.' },
    { id: 7, category: 'desain', title: 'Design Fundamentals', author: 'Chris Green', rating: 4.9, price: 'Rp 320k', image: '/images/ProductsList/desain/Design Fundamentals.webp', desc: 'Kuasai fondasi desain grafis untuk menciptakan visual yang berdampak. Materi mencakup teori warna, tipografi, komposisi, dan prinsip-prinsip desain lainnya. Dengan panduan praktis, Anda akan mampu membuat konten visual yang menarik untuk media sosial, presentasi, atau materi pemasaran lainnya.' },
    { id: 8, category: 'pengembangan-diri', title: 'Time Management Hacks', author: 'David Chen', rating: 3.3, price: 'Rp 310k', image: '/images/ProductsList/pengembangan-diri/Time Management Hacks.webp', desc: 'Hentikan prokrastinasi dan maksimalkan produktivitas Anda setiap hari. Pelajari berbagai teknik manajemen waktu modern, cara memprioritaskan tugas menggunakan metode Eisenhower Matrix, mengelola jadwal secara efektif, dan membangun kebiasaan yang mendukung tujuan Anda.' },
    { id: 9, category: 'bisnis', title: 'Entrepreneurship 101', author: 'David Chen', rating: 1.2, price: 'Rp 310k', image: '/images/ProductsList/bisnis/Entrepreneurship 101.webp', desc: 'Wujudkan ide bisnis Anda menjadi kenyataan. Kursus ini memberikan panduan langkah demi langkah untuk memulai bisnis, mulai dari validasi ide, riset pasar, menyusun model bisnis, strategi pemasaran awal, hingga dasar-dasar manajemen tim dan keuangan untuk para pendiri startup.' },
];

const categories = ['semua', 'pemasaran', 'desain', 'pengembangan-diri', 'bisnis'];

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>);
        } else {
            stars.push(<svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>);
        }
    }
    return <div className="flex items-center">{stars}</div>;
};


const CourseCard = ({ course }) => {
    const { isDarkMode } = useContext(DarkMode);
    return (
        <Link to={`/products/${course.id}`} className={`course-card rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className={`w-full h-48 flex justify-center items-center p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <img src={course.image} alt={course.title} className="w-full h-full rounded-md object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className={`text-lg font-semibold mb-2 group-hover:text-yellow-500 h-14 overflow-hidden ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{course.title}</h3>
                <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <img src="/images/avatar.png" alt="author" className="w-6 h-6 rounded-full inline-block mr-2" />
                    <span>{course.author}</span>
                </p>
                <p className={`text-sm mb-3 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {course.desc.length > 100 ? `${course.desc.substring(0, 100)}...` : course.desc}
                </p>
                <div className={`flex justify-between items-center mt-auto pt-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                    <div className="flex items-center">
                        <StarRating rating={course.rating} />
                        <span className={`text-xs ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>({course.rating})</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{course.price}</span>
                </div>
            </div>
        </Link>
    );
};

const CoursesSection = () => {
    const { isDarkMode } = useContext(DarkMode);
    const [activeFilter, setActiveFilter] = useState('semua');

    const filteredCourses = activeFilter === 'semua'
        ? courseData
        : courseData.filter(course => course.category === activeFilter);

    return (
        <section className="courses-section py-12 px-4 container mx-auto">
            <h2 className={`text-3xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Koleksi Video Pembelajaran Unggulan</h2>
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`capitalize px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeFilter === category
                                ? 'bg-gray-800 text-white dark:bg-yellow-500 dark:text-black'
                                : `bg-white text-gray-700 hover:bg-gray-200 ${isDarkMode ? 'dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600' : ''}`
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