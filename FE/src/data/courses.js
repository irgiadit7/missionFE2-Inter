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
                title: 'Quiz: Auditing Fundamentals',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Apa tujuan utama dari audit laporan keuangan?", options: ["Menemukan semua penipuan (fraud)", "Memberikan opini atas kewajaran laporan keuangan", "Menjamin perusahaan akan profit", "Mengevaluasi kinerja CEO"], correctAnswer: "Memberikan opini atas kewajaran laporan keuangan" },
                    { id: 2, text: "Jenis opini audit apa yang paling diinginkan oleh perusahaan?", options: ["Wajar Tanpa Pengecualian (Unqualified)", "Wajar Dengan Pengecualian (Qualified)", "Tidak Wajar (Adverse)", "Tidak Memberikan Pendapat (Disclaimer)"], correctAnswer: "Wajar Tanpa Pengecualian (Unqualified)" },
                    { id: 3, text: "Siapakah yang bertanggung jawab atas penyusunan laporan keuangan?", options: ["Auditor Eksternal", "Pemerintah", "Manajemen Perusahaan", "Investor"], correctAnswer: "Manajemen Perusahaan" },
                    { id: 4, text: "Apa yang dimaksud dengan 'materialitas' dalam konteks audit?", options: ["Semua kesalahan, sekecil apapun", "Informasi yang jika salah saji dapat memengaruhi keputusan pengguna laporan", "Jumlah total aset perusahaan", "Pendapatan bersih perusahaan"], correctAnswer: "Informasi yang jika salah saji dapat memengaruhi keputusan pengguna laporan" },
                    { id: 5, text: "Bukti audit yang paling andal biasanya berasal dari...", options: ["Manajemen internal", "Pihak ketiga yang independen", "Perhitungan ulang oleh auditor", "Observasi langsung oleh auditor"], correctAnswer: "Pihak ketiga yang independen" },
                    { id: 6, text: "Standar yang digunakan auditor di Indonesia adalah...", options: ["IFRS", "SA (Standar Audit)", "GAAP", "PSAK"], correctAnswer: "SA (Standar Audit)" },
                    { id: 7, text: "Tujuan utama pengujian substantif adalah untuk mendeteksi...", options: ["Kesalahan dalam pengendalian internal", "Kekurangan kompetensi staff", "Salah saji material pada saldo akun", "Prosedur akuntansi yang tidak efisien"], correctAnswer: "Salah saji material pada saldo akun" },
                    { id: 8, text: "Pengendalian internal yang kuat dapat mengurangi...", options: ["Jumlah staf akuntansi", "Biaya pemasaran", "Risiko audit", "Jumlah penjualan"], correctAnswer: "Risiko audit" },
                    { id: 9, text: "Laporan Arus Kas diklasifikasikan menjadi 3 aktivitas utama, yaitu...", options: ["Operasi, Pendanaan, dan Investasi", "Operasi, Pemasaran, dan Penjualan", "Pendapatan, Biaya, dan Laba", "Lancar, Tidak Lancar, dan Jangka Panjang"], correctAnswer: "Operasi, Pendanaan, dan Investasi" },
                    { id: 10, text: "Rasio likuiditas yang paling umum digunakan adalah...", options: ["Debt to Equity Ratio", "Return on Asset", "Current Ratio", "Gross Profit Margin"], correctAnswer: "Current Ratio" },
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
        ]
    },
    {
        id: 2,
        title: "Digital Marketing Fundamental",
        author: "John Doe",
        rating: 4.9,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: What Is Digital Marketing?', duration: '15 Menit', videoUrl: 'https://www.youtube.com/embed/nU-IIXBWlS4' },
            {
                type: 'quiz',
                title: 'Quiz: Digital Marketing Basics',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Apa kepanjangan dari SEO?", options: ["Search Engine Optimization", "Social Engine Optimization", "Search Engine Operation", "Social Engagement Office"], correctAnswer: "Search Engine Optimization" },
                    { id: 2, text: "Manakah yang BUKAN termasuk dalam pilar utama digital marketing?", options: ["Content Marketing", "Social Media Marketing", "Print Advertising", "Email Marketing"], correctAnswer: "Print Advertising" },
                    { id: 3, text: "Tujuan utama dari A/B testing dalam digital marketing adalah...", options: ["Meningkatkan jumlah followers", "Membandingkan dua versi dari sesuatu untuk melihat mana yang lebih efektif", "Mengurangi biaya iklan", "Meningkatkan brand awareness"], correctAnswer: "Membandingkan dua versi dari sesuatu untuk melihat mana yang lebih efektif" },
                    { id: 4, text: "Apa itu 'Call to Action' (CTA)?", options: ["Sebuah tautan ke halaman lain", "Sebuah gambar yang menarik", "Sebuah instruksi untuk mendorong audiens melakukan tindakan tertentu", "Sebuah formulir pendaftaran"], correctAnswer: "Sebuah instruksi untuk mendorong audiens melakukan tindakan tertentu" },
                    { id: 5, text: "Metrik 'Conversion Rate' mengukur...", options: ["Jumlah pengunjung website", "Persentase pengunjung yang melakukan tindakan yang diinginkan", "Jumlah 'likes' di media sosial", "Biaya per klik iklan"], correctAnswer: "Persentase pengunjung yang melakukan tindakan yang diinginkan" },
                    { id: 6, text: "Apa keuntungan utama dari email marketing?", options: ["Menjangkau audiens yang sangat luas dengan cepat", "Biaya yang sangat rendah", "Membangun hubungan langsung dengan pelanggan dan prospek", "Mendapatkan feedback instan"], correctAnswer: "Membangun hubungan langsung dengan pelanggan dan prospek" },
                    { id: 7, text: "Manakah platform yang paling cocok untuk B2B (Business-to-Business) marketing?", options: ["TikTok", "Instagram", "LinkedIn", "Pinterest"], correctAnswer: "LinkedIn" },
                    { id: 8, text: "Apa itu 'keyword' dalam konteks SEO?", options: ["Kata sandi untuk mengakses website", "Kata atau frasa yang diketik pengguna di mesin pencari", "Nama domain sebuah website", "Judul halaman website"], correctAnswer: "Kata atau frasa yang diketik pengguna di mesin pencari" },
                    { id: 9, text: "Dalam SEM (Search Engine Marketing), model pembayaran yang paling umum adalah...", options: ["Pay-Per-View (PPV)", "Pay-Per-Impression (PPM)", "Pay-Per-Click (PPC)", "Pay-Per-Month (PPM)"], correctAnswer: "Pay-Per-Click (PPC)" },
                    { id: 10, text: "Apa fungsi dari 'landing page'?", options: ["Halaman utama sebuah website", "Halaman khusus yang dirancang untuk satu tujuan marketing", "Halaman 'About Us'", "Halaman kontak"], correctAnswer: "Halaman khusus yang dirancang untuk satu tujuan marketing" },
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
        ]
    },
    {
        id: 3,
        title: "UI/UX Design Basics",
        author: "Jane Smith",
        rating: 4.7,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: What is UI/UX Design?', duration: '12 Menit', videoUrl: 'https://www.youtube.com/embed/cKsu3-aRJdM' },
            {
                type: 'quiz',
                title: 'Quiz: UI/UX Fundamentals',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Manakah yang lebih fokus pada aspek 'rasa' dan 'pengalaman' pengguna?", options: ["UI (User Interface)", "UX (User Experience)", "Keduanya sama", "Tidak ada yang benar"], correctAnswer: "UX (User Experience)" },
                    { id: 2, text: "Wireframe dalam proses desain UI/UX adalah...", options: ["Desain visual akhir dengan warna dan gambar", "Kerangka dasar tata letak halaman tanpa detail visual", "Prototipe yang bisa diklik", "Dokumentasi teknis untuk developer"], correctAnswer: "Kerangka dasar tata letak halaman tanpa detail visual" },
                    { id: 3, text: "Tujuan utama dari 'user persona' adalah...", options: ["Membuat desain yang disukai oleh semua orang", "Mewakili target pengguna untuk memandu keputusan desain", "Menentukan skema warna aplikasi", "Memilih jenis font yang akan digunakan"], correctAnswer: "Mewakili target pengguna untuk memandu keputusan desain" },
                    { id: 4, text: "Prinsip desain 'Hierarchy' berkaitan dengan...", options: ["Menggunakan banyak warna berbeda", "Menyusun elemen untuk menunjukkan tingkat kepentingannya", "Membuat semua tombol berukuran sama", "Menggunakan font yang sama di seluruh aplikasi"], correctAnswer: "Menyusun elemen untuk menunjukkan tingkat kepentingannya" },
                    { id: 5, text: "Apa itu 'Usability Testing'?", options: ["Menguji apakah aplikasi bebas dari bug", "Mengamati pengguna nyata saat mereka menggunakan produk untuk menemukan masalah", "Membuat survei kepuasan pengguna", "Membandingkan desain dengan kompetitor"], correctAnswer: "Mengamati pengguna nyata saat mereka menggunakan produk untuk menemukan masalah" },
                    { id: 6, text: "Warna komplementer dalam roda warna adalah...", options: ["Warna yang bersebelahan", "Warna yang berlawanan", "Tiga warna yang membentuk segitiga", "Variasi dari satu warna"], correctAnswer: "Warna yang berlawanan" },
                    { id: 7, text: "Istilah 'Whitespace' dalam desain merujuk pada...", options: ["Area kosong di antara elemen desain", "Warna latar belakang putih", "Batas halaman", "Teks berwarna putih"], correctAnswer: "Area kosong di antara elemen desain" },
                    { id: 8, text: "Manakah alat yang paling populer untuk membuat prototipe interaktif saat ini?", options: ["Adobe Photoshop", "Microsoft Word", "Figma", "Blender"], correctAnswer: "Figma" },
                    { id: 9, text: "Apa fungsi dari 'User Flow'?", options: ["Menunjukkan skema warna", "Menggambarkan langkah-langkah yang diambil pengguna untuk menyelesaikan tugas", "Daftar semua fitur aplikasi", "Panduan gaya tipografi"], correctAnswer: "Menggambarkan langkah-langkah yang diambil pengguna untuk menyelesaikan tugas" },
                    { id: 10, text: "Prinsip 'Consistency' dalam desain UI penting untuk...", options: ["Membuat desain terlihat lebih ramai", "Mengurangi kebingungan pengguna dan membuat antarmuka lebih mudah dipelajari", "Menggunakan sebanyak mungkin gaya tombol", "Mengubah ikon di setiap halaman"], correctAnswer: "Mengurangi kebingungan pengguna dan membuat antarmuka lebih mudah dipelajari" },
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
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Elemen kunci dari komunikasi yang efektif adalah...", options: ["Hanya berbicara", "Berbicara dan mendengarkan", "Menggunakan slide presentasi yang rumit", "Berbicara dengan cepat"], correctAnswer: "Berbicara dan mendengarkan" },
                    { id: 2, text: "Kontak mata dengan audiens penting untuk...", options: ["Menghafal materi", "Membangun koneksi dan kepercayaan", "Melihat siapa yang tidak memperhatikan", "Menghindari melihat catatan"], correctAnswer: "Membangun koneksi dan kepercayaan" },
                    { id: 3, text: "Bagian pembukaan pidato yang baik harus...", options: ["Menjelaskan semua isi pidato", "Menarik perhatian audiens", "Berisi lelucon yang panjang", "Meminta maaf jika Anda gugup"], correctAnswer: "Menarik perhatian audiens" },
                    { id: 4, text: "Apa fungsi utama dari gestur tangan saat berpidato?", options: ["Membuat tangan tidak diam", "Menggaruk jika gatal", "Menekankan poin penting dan menambah energi", "Menunjuk orang di audiens"], correctAnswer: "Menekankan poin penting dan menambah energi" },
                    { id: 5, text: "Cara terbaik untuk menutup pidato adalah dengan...", options: ["Berhenti berbicara tiba-tiba", "Mengatakan 'sekian dan terima kasih'", "Memberikan rangkuman singkat dan pesan yang kuat", "Menanyakan apakah ada pertanyaan"], correctAnswer: "Memberikan rangkuman singkat dan pesan yang kuat" },
                    { id: 6, text: "Variasi vokal (intonasi, kecepatan, volume) penting untuk...", options: ["Membuat pidato lebih panjang", "Menjaga audiens tetap terlibat dan tidak bosan", "Menunjukkan bahwa Anda ahli", "Membingungkan audiens"], correctAnswer: "Menjaga audiens tetap terlibat dan tidak bosan" },
                    { id: 7, text: "Apa yang dimaksud dengan 'filler words' (kata-kata pengisi)?", options: ["Kata-kata penting dalam pidato", "Suara atau kata seperti 'umm', 'ahh', 'jadi' yang digunakan saat berpikir", "Istilah teknis yang kompleks", "Kutipan dari orang terkenal"], correctAnswer: "Suara atau kata seperti 'umm', 'ahh', 'jadi' yang digunakan saat berpikir" },
                    { id: 8, text: "Mengapa penting untuk mengetahui siapa audiens Anda sebelum berpidato?", options: ["Agar bisa memanggil nama mereka", "Untuk menyesuaikan konten, bahasa, dan gaya penyampaian", "Supaya tahu berapa banyak kursi yang harus disiapkan", "Tidak terlalu penting"], correctAnswer: "Untuk menyesuaikan konten, bahasa, dan gaya penyampaian" },
                    { id: 9, text: "Struktur pidato klasik yang paling umum adalah...", options: ["Awal, Tengah, Akhir", "Masalah, Solusi, Manfaat", "Pembukaan, Isi, Penutup", "Semua jawaban benar"], correctAnswer: "Semua jawaban benar" },
                    { id: 10, text: "Cara paling efektif untuk mengatasi rasa gugup sebelum pidato adalah...", options: ["Menghindari persiapan", "Membayangkan audiens gagal", "Latihan yang cukup dan persiapan matang", "Minum banyak kopi"], correctAnswer: "Latihan yang cukup dan persiapan matang" }
                ]
            },
            { type: 'congrats', title: 'Selamat! Anda Hebat!', duration: '3 Menit' },
        ]
    },
    {
        id: 5,
        title: "Financial Planning for Beginners",
        author: "Mike Ross",
        rating: 5.0,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: The Basics of Financial Planning', duration: '20 Menit', videoUrl: 'https://www.youtube.com/embed/CvaeEDgLVlI' },
            {
                type: 'quiz',
                title: 'Quiz: Personal Finance 101',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Langkah pertama yang paling penting dalam perencanaan keuangan adalah...", options: ["Berinvestasi di saham", "Membuat anggaran (budgeting)", "Membeli asuransi", "Mengambil pinjaman"], correctAnswer: "Membuat anggaran (budgeting)" },
                    { id: 2, text: "Apa fungsi utama dari dana darurat?", options: ["Untuk liburan mendadak", "Untuk menutupi biaya hidup tak terduga tanpa harus berutang", "Untuk membeli gadget terbaru", "Untuk investasi jangka panjang"], correctAnswer: "Untuk menutupi biaya hidup tak terduga tanpa harus berutang" },
                    { id: 3, text: "Berapa idealnya jumlah dana darurat yang harus dimiliki?", options: ["1 bulan pengeluaran", "1 minggu pengeluaran", "3-6 bulan pengeluaran", "1 tahun pengeluaran"], correctAnswer: "3-6 bulan pengeluaran" },
                    { id: 4, text: "Manakah yang termasuk dalam kategori 'utang baik' (good debt)?", options: ["Utang kartu kredit untuk belanja", "Pinjaman untuk membeli mobil mewah", "Kredit Pemilikan Rumah (KPR)", "Pinjaman untuk liburan"], correctAnswer: "Kredit Pemilikan Rumah (KPR)" },
                    { id: 5, text: "Apa itu 'inflasi'?", options: ["Penurunan harga barang dan jasa", "Kenaikan harga barang dan jasa secara umum dan terus menerus", "Suku bunga bank", "Pajak penghasilan"], correctAnswer: "Kenaikan harga barang dan jasa secara umum dan terus menerus" },
                    { id: 6, text: "Investasi dengan prinsip 'High Risk, High Return' berarti...", options: ["Risiko tinggi, keuntungan rendah", "Risiko rendah, keuntungan tinggi", "Risiko tinggi, potensi keuntungan juga tinggi", "Tidak ada risiko"], correctAnswer: "Risiko tinggi, potensi keuntungan juga tinggi" },
                    { id: 7, text: "Apa tujuan dari diversifikasi dalam investasi?", options: ["Memfokuskan semua uang pada satu saham", "Menyebarkan investasi ke berbagai aset untuk mengurangi risiko", "Menjual semua investasi saat pasar turun", "Hanya berinvestasi pada emas"], correctAnswer: "Menyebarkan investasi ke berbagai aset untuk mengurangi risiko" },
                    { id: 8, text: "Manakah instrumen investasi yang risikonya paling rendah?", options: ["Saham", "Cryptocurrency", "Reksa Dana Pasar Uang", "Properti"], correctAnswer: "Reksa Dana Pasar Uang" },
                    { id: 9, text: "Metode 50/30/20 dalam budgeting mengalokasikan pendapatan untuk...", options: ["50% Keinginan, 30% Kebutuhan, 20% Tabungan", "50% Tabungan, 30% Kebutuhan, 20% Keinginan", "50% Kebutuhan, 30% Keinginan, 20% Tabungan", "50% Kebutuhan, 30% Tabungan, 20% Keinginan"], correctAnswer: "50% Kebutuhan, 30% Keinginan, 20% Tabungan" },
                    { id: 10, text: "Mengapa penting untuk memiliki asuransi kesehatan?", options: ["Agar bisa berobat gratis kapan saja", "Untuk melindungi keuangan dari biaya medis yang tinggi dan tak terduga", "Sebagai syarat membuat KTP", "Untuk mendapatkan diskon di rumah sakit"], correctAnswer: "Untuk melindungi keuangan dari biaya medis yang tinggi dan tak terduga" },
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
        ]
    },
     {
        id: 6,
        title: "Social Media Marketing Strategy",
        author: "Emily White",
        rating: 4.6,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: Building a Social Media Strategy', duration: '18 Menit', videoUrl: 'https://www.youtube.com/embed/s_b-zpCbA2g' },
            {
                type: 'quiz',
                title: 'Quiz: Social Media Strategy',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Langkah pertama dalam membuat strategi media sosial adalah...", options: ["Membuat konten", "Menentukan tujuan (goals)", "Memilih platform", "Menjalankan iklan"], correctAnswer: "Menentukan tujuan (goals)" },
                    { id: 2, text: "Metrik 'Engagement Rate' di media sosial mengukur...", options: ["Jumlah followers", "Seberapa sering Anda memposting", "Tingkat interaksi audiens dengan konten Anda (likes, comments, shares)", "Jumlah orang yang melihat iklan Anda"], correctAnswer: "Tingkat interaksi audiens dengan konten Anda (likes, comments, shares)" },
                    { id: 3, text: "Platform media sosial mana yang paling fokus pada konten visual seperti gambar dan video pendek?", options: ["LinkedIn", "Twitter (X)", "Instagram", "Facebook"], correctAnswer: "Instagram" },
                    { id: 4, text: "Apa itu 'Content Pillar' dalam strategi konten?", options: ["Jadwal posting konten", "Jenis font yang digunakan", "Tema atau topik utama yang menjadi dasar pembuatan konten turunan", "Hashtag yang sedang tren"], correctAnswer: "Tema atau topik utama yang menjadi dasar pembuatan konten turunan" },
                    { id: 5, text: "Mengapa penting untuk melakukan analisis kompetitor di media sosial?", options: ["Untuk meniru semua konten mereka", "Untuk memahami strategi mereka dan mencari celah peluang", "Untuk melaporkan akun mereka", "Tidak penting sama sekali"], correctAnswer: "Untuk memahami strategi mereka dan mencari celah peluang" },
                    { id: 6, text: "Persona audiens (buyer persona) dalam social media marketing digunakan untuk...", options: ["Menentukan logo brand", "Memahami siapa target audiens Anda secara mendalam", "Memilih influencer untuk diajak kerja sama", "Menentukan harga produk"], correctAnswer: "Memahami siapa target audiens Anda secara mendalam" },
                    { id: 7, text: "Manakah format konten yang cenderung mendapatkan engagement paling tinggi di banyak platform saat ini?", options: ["Teks panjang", "Video pendek (Reels, TikTok, Shorts)", "Link ke artikel blog", "Gambar statis dengan banyak teks"], correctAnswer: "Video pendek (Reels, TikTok, Shorts)" },
                    { id: 8, text: "A/B testing pada iklan media sosial biasanya dilakukan untuk menguji...", options: ["Jumlah budget total", "Efektivitas elemen iklan yang berbeda (gambar, headline, CTA)", "Waktu penayangan iklan", "Durasi kampanye"], correctAnswer: "Efektivitas elemen iklan yang berbeda (gambar, headline, CTA)" },
                    { id: 9, text: "Apa fungsi utama dari hashtag (#) di platform seperti Instagram dan Twitter?", options: ["Menghias caption", "Mengelompokkan konten berdasarkan topik dan memudahkan penemuan", "Menandai teman", "Menyembunyikan konten"], correctAnswer: "Mengelompokkan konten berdasarkan topik dan memudahkan penemuan" },
                    { id: 10, text: "Metrik 'Reach' mengukur...", options: ["Jumlah total interaksi", "Jumlah unik orang yang melihat konten Anda", "Seberapa sering konten Anda ditampilkan", "Jumlah klik pada link"], correctAnswer: "Jumlah unik orang yang melihat konten Anda" },
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
        ]
    },
    {
        id: 7,
        title: "Design Fundamentals",
        author: "Chris Green",
        rating: 4.9,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: 7 Principles of Design', duration: '15 Menit', videoUrl: 'https://www.youtube.com/embed/sLA-bV46-2o' },
            {
                type: 'quiz',
                title: 'Quiz: Design Principles',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Prinsip desain yang menciptakan ilusi kedalaman atau jarak pada bidang datar disebut...", options: ["Kontras", "Keseimbangan", "Ruang (Space)", "Hierarki"], correctAnswer: "Ruang (Space)" },
                    { id: 2, text: "Dalam teori warna, warna primer adalah...", options: ["Hijau, Oranye, Ungu", "Merah, Kuning, Biru", "Merah, Hijau, Biru (RGB)", "Cyan, Magenta, Yellow, Black (CMYK)"], correctAnswer: "Merah, Kuning, Biru" },
                    { id: 3, text: "Apa yang dimaksud dengan 'kontras' dalam desain?", options: ["Menggunakan elemen yang serupa", "Perbedaan yang mencolok antara dua elemen untuk menciptakan penekanan", "Mengulang elemen yang sama", "Menyusun elemen secara simetris"], correctAnswer: "Perbedaan yang mencolok antara dua elemen untuk menciptakan penekanan" },
                    { id: 4, text: "Tipografi adalah seni dan teknik...", options: ["Menggambar ilustrasi", "Mengatur huruf agar mudah dibaca dan menarik", "Memilih palet warna", "Membuat logo"], correctAnswer: "Mengatur huruf agar mudah dibaca dan menarik" },
                    { id: 5, text: "Prinsip 'kesatuan' (unity) dalam desain berarti...", options: ["Semua elemen terlihat terpisah", "Semua elemen dalam desain terasa menyatu dan harmonis", "Menggunakan banyak gaya yang berbeda", "Membuat satu elemen sangat menonjol"], correctAnswer: "Semua elemen dalam desain terasa menyatu dan harmonis" },
                    { id: 6, text: "Keseimbangan asimetris dalam desain dicapai dengan...", options: ["Menempatkan elemen yang sama di kedua sisi sumbu tengah", "Menggunakan elemen dengan 'berat visual' yang berbeda untuk menyeimbangkan komposisi", "Menempatkan semua elemen di satu sisi", "Tidak ada keseimbangan sama sekali"], correctAnswer: "Menggunakan elemen dengan 'berat visual' yang berbeda untuk menyeimbangkan komposisi" },
                    { id: 7, text: "Grid atau kisi-kisi dalam desain digunakan untuk...", options: ["Membuat desain terlihat berantakan", "Membantu menyusun elemen secara teratur dan konsisten", "Menambahkan warna pada desain", "Membuat teks sulit dibaca"], correctAnswer: "Membantu menyusun elemen secara teratur dan konsisten" },
                    { id: 8, text: "Warna analogus adalah...", options: ["Warna yang saling berhadapan di roda warna", "Warna-warna yang letaknya bersebelahan di roda warna", "Satu warna dengan berbagai tingkat kecerahan", "Warna hitam dan putih"], correctAnswer: "Warna-warna yang letaknya bersebelahan di roda warna" },
                    { id: 9, text: "Fungsi utama dari 'repetition' (pengulangan) dalam desain adalah...", options: ["Membingungkan audiens", "Menciptakan konsistensi dan memperkuat identitas brand", "Membuat setiap halaman terlihat berbeda", "Menghabiskan ruang kosong"], correctAnswer: "Menciptakan konsistensi dan memperkuat identitas brand" },
                    { id: 10, text: "Hierarki visual membantu pengguna untuk...", options: ["Melihat semua elemen sekaligus dengan kepentingan yang sama", "Memahami alur informasi dari yang paling penting hingga yang kurang penting", "Fokus pada elemen yang paling tidak penting terlebih dahulu", "Mengabaikan informasi penting"], correctAnswer: "Memahami alur informasi dari yang paling penting hingga yang kurang penting" },
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
        ]
    },
    {
        id: 8,
        title: "Time Management Hacks",
        author: "David Chen",
        rating: 3.3,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: How to Manage Your Time', duration: '10 Menit', videoUrl: 'https://www.youtube.com/embed/i_c9i2e_D0' },
            {
                type: 'quiz',
                title: 'Quiz: Time Management Techniques',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Matriks Eisenhower digunakan untuk memprioritaskan tugas berdasarkan...", options: ["Waktu dan Biaya", "Penting dan Mendesak", "Mudah dan Sulit", "Cepat dan Lambat"], correctAnswer: "Penting dan Mendesak" },
                    { id: 2, text: "Menurut Matriks Eisenhower, apa yang harus Anda lakukan dengan tugas yang 'Penting tapi Tidak Mendesak'?", options: ["Kerjakan segera", "Jadwalkan untuk dikerjakan nanti", "Delegasikan kepada orang lain", "Hapus dari daftar tugas"], correctAnswer: "Jadwalkan untuk dikerjakan nanti" },
                    { id: 3, text: "Teknik Pomodoro menyarankan untuk bekerja dalam interval...", options: ["60 menit kerja, 15 menit istirahat", "25 menit kerja, 5 menit istirahat", "90 menit kerja, 30 menit istirahat", "Bekerja terus menerus tanpa istirahat"], correctAnswer: "25 menit kerja, 5 menit istirahat" },
                    { id: 4, text: "Apa itu 'time blocking'?", options: ["Memblokir semua notifikasi", "Mendedikasikan blok waktu tertentu untuk tugas spesifik", "Menghindari pekerjaan pada waktu tertentu", "Bekerja hanya pada malam hari"], correctAnswer: "Mendedikasikan blok waktu tertentu untuk tugas spesifik" },
                    { id: 5, text: "Aturan '2-Menit' menyatakan bahwa jika sebuah tugas bisa diselesaikan dalam waktu kurang dari 2 menit, Anda harus...", options: ["Menundanya", "Mendelegasikannya", "Menjadwalkannya", "Segera melakukannya"], correctAnswer: "Segera melakukannya" },
                    { id: 6, text: "Multitasking seringkali...", options: ["Meningkatkan produktivitas secara signifikan", "Mengurangi efisiensi dan meningkatkan kemungkinan kesalahan", "Merupakan cara terbaik untuk menyelesaikan banyak tugas", "Hanya bisa dilakukan oleh orang-orang tertentu"], correctAnswer: "Mengurangi efisiensi dan meningkatkan kemungkinan kesalahan" },
                    { id: 7, text: "Menetapkan tujuan SMART berarti tujuan tersebut harus...", options: ["Specific, Measurable, Achievable, Relevant, Time-bound", "Simple, Meaningful, Actionable, Rewarding, Timely", "Strategic, Motivating, Ambitious, Realistic, Thoughtful", "Semua jawaban salah"], correctAnswer: "Specific, Measurable, Achievable, Relevant, Time-bound" },
                    { id: 8, text: "Prokrastinasi atau menunda-nunda pekerjaan seringkali disebabkan oleh...", options: ["Terlalu banyak energi", "Rasa takut gagal atau tugas yang terlalu besar", "Motivasi yang berlebihan", "Jadwal yang terlalu longgar"], correctAnswer: "Rasa takut gagal atau tugas yang terlalu besar" },
                    { id: 9, text: "Manfaat dari membuat 'to-do list' setiap hari adalah...", options: ["Memberikan rasa kewalahan", "Memberikan kejelasan dan fokus pada apa yang perlu dicapai", "Membuang-buang waktu", "Hanya untuk orang yang pelupa"], correctAnswer: "Memberikan kejelasan dan fokus pada apa yang perlu dicapai" },
                    { id: 10, text: "Mengatakan 'tidak' pada permintaan atau tugas yang tidak sesuai dengan prioritas Anda adalah bagian penting dari...", options: ["Manajemen waktu yang buruk", "Sikap tidak mau bekerja sama", "Manajemen waktu yang efektif", "Mencari masalah dengan rekan kerja"], correctAnswer: "Manajemen waktu yang efektif" },
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
        ]
    },
    {
        id: 9,
        title: "Entrepreneurship 101",
        author: "David Chen",
        rating: 1.2,
        modules: [
            { type: 'rules', title: 'Aturan & Pengenalan', duration: '5 Menit' },
            { type: 'video', title: 'Video: What is Entrepreneurship?', duration: '11 Menit', videoUrl: 'https://www.youtube.com/embed/8bQYtQ1_A8Q' },
            {
                type: 'quiz',
                title: 'Quiz: Introduction to Entrepreneurship',
                duration: '10 Soal',
                questions: [
                    { id: 1, text: "Apa itu MVP dalam konteks startup?", options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Value Proposition", "Major Venture Partner"], correctAnswer: "Minimum Viable Product" },
                    { id: 2, text: "Tujuan utama dari membuat MVP adalah...", options: ["Membuat produk yang sempurna", "Menghabiskan seluruh dana investasi", "Menguji ide bisnis dengan sumber daya minimal untuk mendapatkan feedback", "Merekrut banyak karyawan"], correctAnswer: "Menguji ide bisnis dengan sumber daya minimal untuk mendapatkan feedback" },
                    { id: 3, text: "'Business Model Canvas' adalah alat untuk...", options: ["Merancang logo perusahaan", "Memvisualisasikan dan merancang model bisnis", "Menulis kode program", "Membuat laporan keuangan"], correctAnswer: "Memvisualisasikan dan merancang model bisnis" },
                    { id: 4, text: "Apa yang dimaksud dengan 'Value Proposition'?", options: ["Harga produk", "Nilai atau manfaat yang ditawarkan produk Anda kepada pelanggan", "Struktur biaya perusahaan", "Sumber pendapatan utama"], correctAnswer: "Nilai atau manfaat yang ditawarkan produk Anda kepada pelanggan" },
                    { id: 5, text: "Bootstraping dalam startup berarti...", options: ["Mendapatkan pendanaan dari Venture Capital", "Memulai bisnis tanpa atau dengan sedikit modal eksternal", "Menjual saham kepada publik", "Mengambil pinjaman bank dalam jumlah besar"], correctAnswer: "Memulai bisnis tanpa atau dengan sedikit modal eksternal" },
                    { id: 6, text: "Riset pasar penting dilakukan sebelum memulai bisnis untuk...", options: ["Menentukan warna logo", "Memahami kebutuhan pelanggan, persaingan, dan potensi pasar", "Menyewa kantor", "Membuat nama perusahaan"], correctAnswer: "Memahami kebutuhan pelanggan, persaingan, dan potensi pasar" },
                    { id: 7, text: "Apa perbedaan antara 'revenue' dan 'profit'?", options: ["Tidak ada perbedaan", "Revenue adalah total pendapatan, profit adalah sisa setelah dikurangi biaya", "Profit adalah total pendapatan, revenue adalah sisa setelah dikurangi biaya", "Keduanya adalah utang perusahaan"], correctAnswer: "Revenue adalah total pendapatan, profit adalah sisa setelah dikurangi biaya" },
                    { id: 8, text: "Istilah 'pivot' dalam dunia startup mengacu pada...", options: ["Mengganti seluruh tim", "Perubahan fundamental dalam strategi bisnis", "Pindah kantor ke lokasi baru", "Mengadakan rapat besar"], correctAnswer: "Perubahan fundamental dalam strategi bisnis" },
                    { id: 9, text: "Siapakah 'angel investor'?", options: ["Bank yang memberikan pinjaman", "Individu kaya yang memberikan modal untuk startup dengan imbalan ekuitas", "Lembaga pemerintah", "Keluarga pendiri"], correctAnswer: "Individu kaya yang memberikan modal untuk startup dengan imbalan ekuitas" },
                    { id: 10, text: "Mengapa 'networking' atau membangun jaringan penting bagi seorang entrepreneur?", options: ["Hanya untuk bersenang-senang", "Untuk membuka peluang, mendapatkan wawasan, dan membangun kemitraan", "Untuk pamer ide bisnis", "Tidak terlalu penting di era digital"], correctAnswer: "Untuk membuka peluang, mendapatkan wawasan, dan membangun kemitraan" },
                ]
            },
            { type: 'congrats', title: 'Selamat! Modul 1 Selesai', duration: '3 Menit' },
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