import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { DarkMode } from "../context/DarkMode";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const courseData = [
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

const StarRating = ({ rating, size = "w-4 h-4" }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const isHalf = i - 0.5 === rating;
        if (i <= rating) {
            stars.push(<svg key={i} className={`${size} text-yellow-400 fill-current`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>);
        } else if (isHalf) {
             stars.push(
                <svg key={i} className={`${size} text-yellow-400`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    <path fillRule="evenodd" d="M10 0v15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0z" clipRule="evenodd" fill="lightgray"/>
                </svg>
            );
        } else {
            stars.push(<svg key={i} className={`${size} text-gray-300 fill-current`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>);
        }
    }
    return <div className="flex items-center">{stars}</div>;
};

const AccordionItem = ({ title, children, isOpen, onClick }) => (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        <button onClick={onClick} className="w-full flex justify-between items-center py-4 text-left text-green-600 font-semibold">
            <span>{title}</span>
            <svg className={`w-5 h-5 transform transition-transform text-gray-500 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
            <div className="pl-4">{children}</div>
        </div>
    </div>
);

const CourseCard = ({ course, isDarkMode }) => (
    <Link 
        to={`/products/${course.id}`} 
        className={`course-card rounded-lg shadow-sm border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${isDarkMode ? 'bg-slate-900 border-gray-700' : 'bg-white border-gray-200'}`}
    >
        <div className={`w-full h-48 flex justify-center items-center p-4 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
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
                <span className="text-lg font-bold text-green-500">{`Rp ${course.price}k`}</span>
            </div>
        </div>
    </Link>
);


const DetailProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { isDarkMode } = useContext(DarkMode);
    const [openAccordion, setOpenAccordion] = useState(0);
    const dispatch = useDispatch();

    const courseMaterials = [
        { title: "Introduction to Course 1: Foundations of User Experience Design", videos: [{ title: "The basics of user experience design", duration: "12 Menit" }, { title: "Jobs in the field of user experience", duration: "12 Menit" }, { title: "The product development life cycle", duration: "12 Menit" }] },
        { title: "Universal design, inclusive design, and equity-focused design", videos: [] },
        { title: "Introduction to design sprints", videos: [] },
        { title: "Introduction to UX research", videos: [] },
    ];
    
    const reviews = [
        { name: "Gregorius Edrik Lawanto", batch: "Alumni Batch 2", reviewText: "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.", avatar: "/images/avatar.png", rating: 3.5 },
        { name: "Alexandra Daddario", batch: "Alumni Batch 4", reviewText: "Kursus ini sangat membantu saya dalam memahami fundamental desain. Materinya mudah diikuti dan instrukturnya sangat profesional. Sangat direkomendasikan!", avatar: "/images/avatar.png", rating: 4.5 },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        const productData = courseData.find((p) => p.id === parseInt(id));
        if (productData) {
            setProduct({ ...productData, description: productData.desc });
        }
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart({ id: product.id, qty: 1 }));
    };

    if (!product) {
        return <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#FFFDF3] text-gray-800'}`}>Loading...</div>;
    }

    const relatedProducts = courseData.filter(p => p.id !== product.id).sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FFFDF3] text-gray-800'}>
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Link to="/" className="hover:text-yellow-500">Beranda</Link> &gt; 
                    <span className="capitalize"> {product.category} </span> &gt; 
                    <span> {product.title}</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="relative rounded-lg overflow-hidden mb-8 text-white shadow-lg min-h-[300px] bg-gray-800"><img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-40" /><div className="relative z-10 p-8 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[300px]"><h1 className="text-3xl md:text-4xl font-bold mb-3">{product.title}</h1><p className="text-base mb-4">Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.</p><div className="flex items-center justify-center"><StarRating rating={product.rating} size="w-5 h-5" /><span className="ml-2 text-sm">({product.rating})</span></div></div></div>
                        <div className="space-y-10">
                            <div><h2 className="text-2xl font-bold mb-3">Deskripsi</h2><p className="text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p></div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Belajar bersama Tutor Profesional</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className={`p-6 border rounded-lg ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'bg-white'}`}><div className="flex items-center gap-4"><img src="/images/avatar.png" alt={product.author} className="w-12 h-12 rounded-full" /><div><h3 className="font-bold text-lg">{product.author}</h3><p className="text-sm text-gray-500">Tutor di bidang {product.category}</p></div></div><p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Berpengalaman lebih dari 5 tahun di industri dan telah membantu ratusan siswa mencapai impian karir mereka.</p></div>
                                    <div className={`p-6 border rounded-lg ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'bg-white'}`}><div className="flex items-center gap-4"><img src="/images/avatar.png" alt="Jane Doe" className="w-12 h-12 rounded-full" /><div><h3 className="font-bold text-lg">Jane Doe</h3><p className="text-sm text-gray-500">Asisten Tutor</p></div></div><p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Spesialis dalam memberikan feedback dan membantu siswa mengatasi kesulitan belajar.</p></div>
                                </div>
                            </div>
                            <div><h2 className="text-2xl font-bold mb-3">Kamu akan Mempelajari</h2><div className={`rounded-lg border p-4 ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'bg-white'}`}>{courseMaterials.map((item, index) => (<AccordionItem key={index} title={item.title} isOpen={openAccordion === index} onClick={() => setOpenAccordion(openAccordion === index ? null : index)}><div className="space-y-4">{item.videos.length > 0 ? (item.videos.map((video, videoIndex) => (<div key={videoIndex} className="flex justify-between items-center text-gray-600 dark:text-gray-400"><div className="flex items-center"><svg className="w-6 h-6 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className="font-medium">{video.title}</span></div><span className="text-sm font-medium">{video.duration}</span></div>))) : (<p className="text-sm text-gray-400">Detail untuk bab ini akan segera tersedia.</p>)}</div></AccordionItem>))}</div></div>
                            <div><h2 className="text-2xl font-bold mb-4">Rating dan Review</h2><div className={`p-6 border rounded-lg shadow-md ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'bg-white'}`}><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{reviews.map((review, index) => (<div key={index} ><div className="flex items-center gap-4 mb-3"><img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" /><div><h3 className="font-bold text-lg">{review.name}</h3><p className="text-sm text-gray-500">{review.batch}</p></div></div><p className="text-gray-600 dark:text-gray-400 my-4 text-sm">"{review.reviewText}"</p><div className="flex items-center gap-2"><StarRating rating={review.rating} /><span className="text-sm font-bold">{review.rating}</span></div></div>))}</div></div></div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                         <div className="sticky top-24">
                            <div className={`border rounded-lg shadow-lg p-6 ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'bg-white'}`}>
                                <h2 className="font-bold text-xl mb-4">Gapai Karier Impianmu</h2>
                                <p className="text-3xl font-bold text-green-600 mb-4">{`Rp ${product.price}k`}</p>
                                <div className="space-y-3">
                                    <Link to={`/payment/${product.id}`} className="block w-full text-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg">
                                        Beli Sekarang
                                    </Link>
                                    <button onClick={handleAddToCart} className="w-full bg-transparent border border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors text-lg">
                                        Tambah ke Keranjang
                                    </button>
                                </div>
                                <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                    <p><span className="font-bold">Termasuk:</span></p>
                                    <ul className="list-disc list-inside">
                                        <li>12 Video Pembelajaran</li>
                                        <li>7 Latihan Praktis</li>
                                        <li>Sertifikat Penyelesaian</li>
                                        <li>Akses Selamanya</li>
                                        <li>Grup Komunitas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-2 text-center">Video Pembelajaran Terkait Lainnya</h2>
                    <p className="text-center text-gray-500 mb-8">Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProducts.length > 0 ? (relatedProducts.map(course => (
                            <CourseCard key={course.id} course={course} isDarkMode={isDarkMode} />
                        ))) : (
                            <p className="text-center col-span-3 text-gray-500">Tidak ada kursus terkait lainnya di kategori ini.</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DetailProductPage;