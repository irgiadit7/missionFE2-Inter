import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DarkMode } from '../context/DarkMode';
import { useLogin } from '../hooks/useLogin';

// Data kursus yang sama (untuk mengambil nama kursus)
const allCoursesData = [
    { id: 1, title: "Big 4 Auditor Financial Analyst", author: "Jenna Ortega" },
    { id: 4, title: "Public Speaking Mastery", author: "Jenna Ortega" },
    // Tambahkan data kursus lain di sini jika diperlukan
];

const CertificatePage = () => {
    const { id } = useParams();
    const { isDarkMode } = useContext(DarkMode);
    const username = useLogin(); // Mengambil username dari custom hook useLogin
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
    
    // Nama yang akan ditampilkan di sertifikat (gunakan huruf kapital)
    const displayName = username.toUpperCase() || "PESERTA VIDEO COURSE";

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-8 print:p-0`}>
            
            <div className='max-w-4xl mx-auto'>
                {/* Tombol Aksi - Sembunyikan saat mencetak */}
                <div className="flex justify-end space-x-4 mb-6 print:hidden">
                    <button onClick={handlePrint} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Cetak Sertifikat</button>
                    <Link to={`/learn/${id}`} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">Kembali ke Kelas</Link>
                </div>

                {/* Sertifikat Card */}
                <div id="certificate" className="bg-white border-8 border-yellow-500 shadow-2xl p-10 md:p-20 text-center landscape:h-[700px]">
                    <h1 className="text-3xl font-serif font-bold text-yellow-600 mb-2">SERTIFIKAT PENCAPAIAN</h1>
                    <p className="text-lg mb-6">Diberikan kepada</p>
                    
                    <h2 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-8 font-serif uppercase">{displayName}</h2>
                    
                    <p className="text-xl mb-4">Atas keberhasilan menyelesaikan kursus video interaktif</p>
                    
                    <h3 className="text-3xl font-bold mb-10 text-gray-800 italic">"{certificateData.title}"</h3>
                    
                    <div className="flex justify-around items-end">
                        <div className="text-center">
                            <p className="font-semibold mb-2">Diberikan pada</p>
                            <p className="text-lg italic">{formatDate()}</p>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold mb-10">Instruktur</p>
                            <div className="w-32 h-1 bg-gray-400 mx-auto"></div>
                            <p className="font-bold text-lg mt-2">{certificateData.author}</p>
                        </div>
                    </div>

                    <p className="text-xs mt-10 text-gray-400">ID Sertifikat: VC-{id}-{new Date().getFullYear()}{new Date().getMonth() + 1}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CertificatePage;