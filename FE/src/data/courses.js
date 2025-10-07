export const courseData = [
    { id: 1, category: 'bisnis', title: 'Big 4 Auditor Financial Analyst', author: 'Jenna Ortega', rating: 5.0, price: 300, image: '/images/ProductsList/bisnis/Big 4 Auditor Financial Analyst.webp', desc: 'Mulai transformasi karir Anda di bidang keuangan dengan kursus intensif ini. Anda akan mempelajari proses audit, analisis laporan keuangan, dan valuasi bisnis seperti yang diterapkan di firma audit Big Four. Cocok untuk mahasiswa akuntansi atau profesional muda yang ingin berkarir sebagai analis keuangan atau auditor ternama.' },
    { id: 2, category: 'pemasaran', title: 'Digital Marketing Fundamental', author: 'John Doe', rating: 4.9, price: 350, image: '/images/ProductsList/pemasaran/Digital Marketing Fundamental.webp', desc: 'Kuasai dunia pemasaran digital dari nol. Kursus ini mencakup semua dasar-dasar penting, mulai dari Search Engine Optimization (SEO), Search Engine Marketing (SEM), media sosial, hingga email marketing. Pelajari cara membangun strategi yang efektif untuk meningkatkan brand awareness dan mendorong penjualan secara online.' },
    { id: 3, category: 'desain', title: 'UI/UX Design Basics', author: 'Jane Smith', rating: 4.7, price: 250, image: '/images/ProductsList/desain/UI UX Design Basics.webp', desc: 'Masuki dunia desain produk digital dengan menguasai prinsip dasar UI (User Interface) dan UX (User Experience). Anda akan belajar proses desain dari riset pengguna, membuat wireframe, hingga prototipe interaktif menggunakan alat desain populer seperti Figma. Ciptakan aplikasi dan website yang tidak hanya indah, tetapi juga ramah pengguna.' },
    { id: 4, category: 'pengembangan-diri', title: 'Public Speaking Mastery', author: 'Jenna Ortega', rating: 3.0, price: 300, image: '/images/ProductsList/pengembangan-diri/Public Speaking Mastery.webp', desc: 'Ubah rasa gugup menjadi kepercayaan diri saat berbicara di depan umum. Kursus ini akan membekali Anda dengan teknik komunikasi yang efektif, cara menyusun pidato yang memukau, mengontrol gestur tubuh, dan berinteraksi dengan audiens. Ideal untuk profesional, mahasiswa, atau siapa saja yang ingin lebih persuasif.' },
    { id: 5, category: 'bisnis', title: 'Financial Planning for Beginners', author: 'Mike Ross', rating: 5.0, price: 280, image: '/images/ProductsList/bisnis/Financial Planning for Beginners.webp', desc: 'Ambil kendali atas masa depan keuangan Anda. Pelajari cara mengatur keuangan pribadi secara efektif, membuat anggaran bulanan yang realistis, merencanakan dana darurat, dan mulai berinvestasi untuk mencapai tujuan finansial jangka panjang, seperti membeli rumah atau mempersiapkan pensiun.' },
    { id: 6, category: 'pemasaran', title: 'Social Media Marketing Strategy', author: 'Emily White', rating: 4.6, price: 275, image: '/images/ProductsList/pemasaran/Social Media Marketing Strategy.webp', desc: 'Manfaatkan kekuatan media sosial untuk bisnis Anda. Kursus ini akan mengajarkan cara membangun strategi konten yang menarik, menumbuhkan followers secara organik, menjalankan iklan berbayar yang efektif, dan menganalisis performa kampanye di berbagai platform seperti Instagram, Facebook, dan TikTok.' },
    { id: 7, category: 'desain', title: 'Design Fundamentals', author: 'Chris Green', rating: 4.9, price: 320, image: '/images/ProductsList/desain/Design Fundamentals.webp', desc: 'Kuasai fondasi desain grafis untuk menciptakan visual yang berdampak. Materi mencakup teori warna, tipografi, komposisi, dan prinsip-prinsip desain lainnya. Dengan panduan praktis, Anda akan mampu membuat konten visual yang menarik untuk media sosial, presentasi, atau materi pemasaran lainnya.' },
    { id: 8, category: 'pengembangan-diri', title: 'Time Management Hacks', author: 'David Chen', rating: 3.3, price: 310, image: '/images/ProductsList/pengembangan-diri/Time Management Hacks.webp', desc: 'Hentikan prokrastinasi dan maksimalkan produktivitas Anda setiap hari. Pelajari berbagai teknik manajemen waktu modern, cara memprioritaskan tugas menggunakan metode Eisenhower Matrix, mengelola jadwal secara efektif, dan membangun kebiasaan yang mendukung tujuan Anda.' },
    { id: 9, category: 'bisnis', title: 'Entrepreneurship 101', author: 'David Chen', rating: 1.2, price: 310, image: '/images/ProductsList/bisnis/Entrepreneurship 101.webp', desc: 'Wujudkan ide bisnis Anda menjadi kenyataan. Kursus ini memberikan panduan langkah demi langkah untuk memulai bisnis, mulai dari validasi ide, riset pasar, menyusun model bisnis, strategi pemasaran awal, hingga dasar-dasar manajemen tim dan keuangan untuk para pendiri startup.' },
];

export const allCoursesData = [
    {
        id: 1,
        title: "Big 4 Auditor Financial Analyst",
        author: "Jenna Ortega",
        rating: 5.0,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: Intro to Auditing', duration: '22 Menit', videoUrl: 'https://www.youtube.com/embed/KIvWYWS3VUk' },
            {
                type: 'quiz',
                title: 'Quiz: Auditing Fundamentals (10 Soal)',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Apa tujuan utama dari audit laporan keuangan?", options: ["Menemukan semua penipuan (fraud)", "Memberikan opini atas kewajaran laporan keuangan", "Menjamin perusahaan akan profit", "Mengevaluasi kinerja CEO"], correctAnswer: "Memberikan opini atas kewajaran laporan keuangan" },
                    { id: 2, text: "Jenis opini audit apa yang paling diinginkan oleh perusahaan?", options: ["Wajar Tanpa Pengecualian (Unqualified)", "Wajar Dengan Pengecualian (Qualified)", "Tidak Wajar (Adverse)", "Tidak Memberikan Pendapat (Disclaimer)"], correctAnswer: "Wajar Tanpa Pengecualian (Unqualified)" },
                    // ... (soal kuis lainnya)
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
        ]
    },
    {
        id: 4,
        title: "Public Speaking Mastery",
        author: "Jenna Ortega",
        rating: 4.7,
        modules: [
            { type: 'video', title: 'Video: Overcoming Stage Fright', duration: '18 Menit', videoUrl: 'https://www.youtube.com/embed/-QIncK5GDTA' },
            { type: 'video', title: 'Video: Structuring Your Speech', duration: '25 Menit', videoUrl: 'https://www.youtube.com/embed/Q4K0SnRlik0' },
            {
                type: 'quiz',
                title: 'Quiz: Public Speaking Basics',
                duration: '5 Soal',
                questions: [
                    { id: 1, text: "Elemen kunci dari komunikasi yang efektif adalah...", options: ["Hanya berbicara", "Berbicara dan mendengarkan", "Menggunakan slide presentasi yang rumit", "Berbicara dengan cepat"], correctAnswer: "Berbicara dan mendengarkan" },
                    // ... (soal kuis lainnya)
                ]
            },
            { type: 'congrats', title: 'Selamat! Anda Hebat!', duration: '3 Menit' },
        ]
    }
];

// Data untuk halaman profil
export const dummyOrders = [
    { id: 1, invoice: 'INV/2025/001', course: 'Big 4 Auditor Financial Analyst', price: '300.000', status: 'Selesai', date: '10 Jun 2025, 14:17' },
    { id: 2, invoice: 'INV/2025/002', course: 'Digital Marketing Fundamental', price: '350.000', status: 'Belum Dibayar', date: '11 Jun 2025, 10:30' },
    { id: 3, invoice: 'INV/2025/003', course: 'UI/UX Design Basics', price: '250.000', status: 'Gagal', date: '12 Jun 2025, 09:00' },
    { id: 4, invoice: 'INV/2025/004', course: 'Public Speaking Mastery', price: '300.000', status: 'Selesai', date: '13 Jun 2025, 11:00' },
];

export const dummyCourses = [
    { id: 1, title: 'Big 4 Auditor Financial Analyst', author: 'Jenna Ortega', image: '/images/ProductsList/bisnis/Big 4 Auditor Financial Analyst.webp' },
    { id: 4, title: 'Public Speaking Mastery', author: 'Jenna Ortega', image: '/images/ProductsList/pengembangan-diri/Public Speaking Mastery.webp' },
];