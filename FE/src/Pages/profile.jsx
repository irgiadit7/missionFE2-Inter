import React, { useState, useContext } from 'react';
import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';
import { useLogin } from '../hooks/useLogin';
import { DarkMode } from '../context/DarkMode';
import { Link, useSearchParams } from 'react-router-dom';
import { dummyOrders, dummyCourses } from '../data/courses';

// --- ICONS (Simple SVG components for demonstration) ---
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const ClipboardListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
);
const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h14a2 2 0 002-2v-7" /></svg>
);


const ProfileContent = ({ user, isDarkMode }) => (
    <div className={`p-6 md:p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center mb-8">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
                {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
        </div>
        <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Nama Lengkap</label>
                    <input type="text" defaultValue={user.name} className={`text-sm border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-slate-200' : 'bg-white border-gray-300 text-slate-900'}`} />
                </div>
                <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Email</label>
                    <input type="email" defaultValue={user.email} className={`text-sm border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-slate-200' : 'bg-white border-gray-300 text-slate-900'}`} />
                </div>
                 <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Nomor Telepon</label>
                    <input type="tel" defaultValue={user.phone} className={`text-sm border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-slate-200' : 'bg-white border-gray-300 text-slate-900'}`} />
                </div>
            </div>
            <div className="mt-8 text-right">
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">Simpan Perubahan</button>
            </div>
        </form>
    </div>
);

const OrderHistoryContent = ({ isDarkMode }) => {
    const [filter, setFilter] = useState('Semua');
    const filters = ['Semua', 'Selesai', 'Belum Dibayar', 'Gagal'];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Selesai': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'Belum Dibayar': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Gagal': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    const filteredOrders = filter === 'Semua' ? dummyOrders : dummyOrders.filter(o => o.status === filter);

    return (
        <div className={`p-6 md:p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-bold mb-4">Daftar Pesanan</h2>
            <div className="flex flex-wrap gap-2 border-b mb-6 pb-4 dark:border-gray-700">
                {filters.map(f => (
                    <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? 'bg-green-600 text-white' : isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        {f}
                    </button>
                ))}
            </div>
            <div className="space-y-4">
                {filteredOrders.map(order => (
                    <div key={order.id} className={`p-4 border rounded-lg ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                            <div>
                                <p className="font-bold">{order.invoice}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{order.date}</p>
                            </div>
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full mt-2 sm:mt-0 ${getStatusClass(order.status)}`}>{order.status}</span>
                        </div>
                        <div className="border-t my-2 dark:border-gray-600"></div>
                        <div className="flex flex-col sm:flex-row justify-between items-end">
                             <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Belajar {order.course}</p>
                                <p className="font-semibold">Total Pembayaran</p>
                            </div>
                            <p className="font-bold text-green-600 mt-2 sm:mt-0">Rp {order.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MyCoursesContent = ({ isDarkMode }) => (
    <div className={`p-6 md:p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-xl font-bold mb-6">Kelas Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dummyCourses.map(course => (
                <div key={course.id} className={`rounded-lg overflow-hidden border ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200'}`}>
                    <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h3 className="font-bold h-12">{course.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">oleh {course.author}</p>
                        <Link to={`/learn/${course.id}`} className="block w-full text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Masuk Kelas
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


// --- MAIN PAGE COMPONENT ---
const ProfilePages = () => {
    const username = useLogin();
    const { isDarkMode } = useContext(DarkMode);
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'profile';
    
    const user = { name: username, email: `${username}@example.com`, phone: '081234567890' };

    const handleTabClick = (tabName) => {
        setSearchParams({ tab: tabName });
    };

    const getTabClass = (tabName) => {
        const baseClass = `flex items-center w-full text-left p-4 rounded-lg transition-colors`;
        if (activeTab === tabName) {
            return `${baseClass} ${isDarkMode ? 'bg-green-800 text-white' : 'bg-green-100 text-green-800 font-semibold'}`;
        }
        return `${baseClass} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`;
    };

    return (
        <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FFFDF3] text-gray-800 min-h-screen flex flex-col'}>
            <Header />
            <main className="container mx-auto px-4 py-8 md:py-12 flex-grow">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* Sidebar */}
                    <aside className="md:w-1-4 lg:w-1/5">
                        <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <nav className="space-y-2">
                                <button onClick={() => handleTabClick('profile')} className={getTabClass('profile')}>
                                    <UserIcon /> Profil Saya
                                </button>
                                <button onClick={() => handleTabClick('courses')} className={getTabClass('courses')}>
                                    <AcademicCapIcon /> Kelas Saya
                                </button>
                                <button onClick={() => handleTabClick('orders')} className={getTabClass('orders')}>
                                    <ClipboardListIcon /> Pesanan Saya
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <section className="flex-1">
                        {activeTab === 'profile' && <ProfileContent user={user} isDarkMode={isDarkMode} />}
                        {activeTab === 'orders' && <OrderHistoryContent isDarkMode={isDarkMode} />}
                        {activeTab === 'courses' && <MyCoursesContent isDarkMode={isDarkMode} />}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePages;