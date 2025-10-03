import React from 'react';

const Hero = ({ overlayOpacity = 80 }) => {
    // Pastikan nilai opacity berada di antara 0 dan 100
    const opacityValue = Math.max(0, Math.min(100, overlayOpacity)) / 100;

    return (
        <section className="container mx-auto px-4">
            {/* Kontainer Utama dengan posisi relatif */}
            <div className="relative rounded-lg overflow-hidden flex items-center justify-center min-h-[400px] mt-18 text-white text-center p-8">
                
                {/* 1. Gambar Latar */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    // Ganti dengan path gambar yang benar di folder public Anda
                    style={{ backgroundImage: "url('/images/HeroImage.jpg')" }}
                ></div>

                {/* 2. Overlay Transparan */}
                <div 
                    className="absolute inset-0"
                    style={{ backgroundColor: `rgba(0, 0, 0, ${opacityValue})` }}
                ></div>

                {/* 3. Konten Teks dan Tombol */}
                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>
                    <p className="text-base md:text-md mb-8 max-w-6xl mx-auto">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda
                    </p>
                    <a href="#" className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg">
                        Temukan Video Course Terbaik Sekarang!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;