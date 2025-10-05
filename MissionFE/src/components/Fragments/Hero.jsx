import React from 'react';

const Hero = ({ overlayOpacity = 80 }) => {
    // Pastikan nilai opacity berada di antara 0 dan 100
    const opacityValue = Math.max(0, Math.min(100, overlayOpacity)) / 100;

    return (
        <section className="container mx-auto px-4">
            {/* Kontainer Utama */}
            <div className="relative rounded-2xl overflow-hidden flex items-center justify-center mt-8 xl:mt-20 text-white text-center px-5 py-12 md:p-8 md:min-h-[400px]">
                
                {/* 1. Gambar Latar */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/HeroImage.jpg')" }}
                ></div>

                {/* 2. Overlay Transparan */}
                <div 
                    className="absolute inset-0"
                    style={{ backgroundColor: `rgba(0, 0, 0, ${opacityValue})` }}
                ></div>

                {/* 3. Konten Teks dan Tombol */}
                <div className="relative z-10 max-w-sm md:max-w-3xl">
                    {/* Judul untuk Mobile (dengan <br />) - disembunyikan di desktop */}
                    <h1 className="text-2xl font-bold mb-5 leading-tight md:hidden">
                        Revolusi <br />
                        Pembelajaran: <br />
                        Temukan Ilmu Baru <br />
                        melalui Platform <br />
                        Video Interaktif!
                    </h1>
                    {/* Judul untuk Desktop (tanpa <br />) - disembunyikan di mobile */}
                    <h1 className="hidden md:block text-5xl font-bold mb-4 leading-tight">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>

                    {/* Paragraf deskripsi */}
                    <p className="text-sm md:text-md mb-6 mx-auto">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda
                    </p>
                    
                    {/* Tombol */}
                    <a href="#" className="inline-block bg-green-500 text-white px-3 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm md:text-lg">
                        Temukan Video Course untuk Dipelajari!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;