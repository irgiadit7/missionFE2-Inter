import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DarkMode } from '../context/DarkMode';
import { useLogin } from '../hooks/useLogin';
import { allCoursesData } from '../data/courses';

const CertificatePage = () => {
    const { id } = useParams();
    const { isDarkMode } = useContext(DarkMode);
    const username = useLogin();
    const [certificateData, setCertificateData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const course = allCoursesData.find(c => c.id === parseInt(id));
        if (course) {
            setCertificateData(course);
        }
    }, [id]);

    const handlePrint = () => {
        window.print();
    };

    const formatDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('id-ID', options);
    };

    if (!certificateData) {
        return (
            <div className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                <h1 className="text-2xl font-bold">Sertifikat Tidak Ditemukan</h1>
                <Link to="/" className="mt-4 text-green-600 hover:underline">Kembali ke Beranda</Link>
            </div>
        );
    }
    
    const displayName = username.toUpperCase() || "PESERTA VIDEO COURSE";

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 md:p-8 print:p-0`}>
            
            <div className='max-w-4xl mx-auto'>
                {/* Tombol Aksi - Sembunyikan saat mencetak */}
                <div className="flex justify-end space-x-2 md:space-x-4 mb-6 print:hidden">
                    <button onClick={handlePrint} className="bg-blue-600 text-white py-2 px-3 md:px-4 rounded-lg hover:bg-blue-700 text-sm md:text-base">Cetak</button>
                    <Link to={`/learn/${id}`} className="bg-gray-500 text-white py-2 px-3 md:px-4 rounded-lg hover:bg-gray-600 text-sm md:text-base">Kembali</Link>
                </div>

                {/* Sertifikat Card */}
                <div id="certificate" className={`bg-white border-8 border-yellow-500 shadow-2xl p-6 md:p-12 text-center`}>
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-yellow-600 mb-2">SERTIFIKAT PENCAPAIAN</h1>
                    <p className="text-base md:text-lg mb-4 md:mb-6">Diberikan kepada</p>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-6 md:mb-8 font-serif uppercase">{displayName}</h2>
                    
                    <p className="text-base md:text-xl mb-4">Atas keberhasilan menyelesaikan kursus video interaktif</p>
                    
                    <h3 className="text-xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800 italic">"{certificateData.title}"</h3>
                    
                    <div className="flex justify-around items-end mt-4">
                        <div className="text-center">
                            <p className="font-semibold mb-2 text-sm md:text-base">Diberikan pada</p>
                            <p className="text-sm md:text-lg italic">{formatDate()}</p>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold mb-6 md:mb-10 text-sm md:text-base">Instruktur</p>
                            <div className="w-24 md:w-32 h-0.5 md:h-1 bg-gray-400 mx-auto"></div>
                            <p className="font-bold text-sm md:text-lg mt-2">{certificateData.author}</p>
                        </div>
                    </div>

                    <p className="text-xs mt-8 md:mt-10 text-gray-400">ID Sertifikat: VC-{id}-{new Date().getFullYear()}{new Date().getMonth() + 1}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CertificatePage;