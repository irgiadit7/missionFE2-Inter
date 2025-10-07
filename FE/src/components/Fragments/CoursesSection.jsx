import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // <-- Impor useSelector untuk mengambil data dari Redux
import { DarkMode } from '../../context/DarkMode';

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
    const tutorImage = `/images/tutor/${course.id}.webp`;

    return (
        <Link to={`/products/${course.id}`} className={`course-card rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className={`w-full h-48 flex justify-center items-center p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <img src={course.image} alt={course.title} className="w-full h-full rounded-md object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className={`text-lg font-semibold mb-2 group-hover:text-yellow-500 h-14 overflow-hidden ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{course.title}</h3>
                <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <img src={tutorImage} alt="author" className="w-6 h-6 rounded-full inline-block mr-2" />
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
                    <span className="text-lg font-bold text-green-600">{`Rp ${course.price}k`}</span>
                </div>
            </div>
        </Link>
    );
};

const CoursesSection = () => {
    const { isDarkMode } = useContext(DarkMode);
    const [activeFilter, setActiveFilter] = useState('semua');

    // Mengambil data produk dari Redux store, bukan dari import file lagi
    const courseData = useSelector((state) => state.products.data);

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