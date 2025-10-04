import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Tambahkan useNavigate
import { DarkMode } from '../context/DarkMode';

// --- DATABASE KURSUS (DUMMY) DENGAN DATA KUIS ---
const allCoursesData = [
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
                    { id: 3, text: "Siapakah yang bertanggung jawab atas penyusunan laporan keuangan?", options: ["Auditor Eksternal", "Pemerintah", "Manajemen Perusahaan", "Investor"], correctAnswer: "Manajemen Perusahaan" },
                    { id: 4, text: "Apa yang dimaksud dengan 'materialitas' dalam konteks audit?", options: ["Semua kesalahan, sekecil apapun", "Informasi yang jika salah saji dapat memengaruhi keputusan pengguna laporan", "Jumlah total aset perusahaan", "Pendapatan bersih perusahaan"], correctAnswer: "Informasi yang jika salah saji dapat memengaruhi keputusan pengguna laporan" },
                    { id: 5, text: "Bukti audit yang paling andal biasanya berasal dari...", options: ["Manajemen internal", "Pihak ketiga yang independen", "Perhitungan ulang oleh auditor", "Observasi langsung oleh auditor"], correctAnswer: "Pihak ketiga yang independen" },
                    // Soal tambahan untuk mencapai 10
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
                    { id: 2, text: "Kontak mata dengan audiens penting untuk...", options: ["Menghafal materi", "Membangun koneksi dan kepercayaan", "Melihat siapa yang tidak memperhatikan", "Menghindari melihat catatan"], correctAnswer: "Membangun koneksi dan kepercayaan" },
                    { id: 3, text: "Bagian pembukaan pidato yang baik harus...", options: ["Menjelaskan semua isi pidato", "Menarik perhatian audiens", "Berisi lelucon yang panjang", "Meminta maaf jika Anda gugup"], correctAnswer: "Menarik perhatian audiens" },
                    { id: 4, text: "Apa fungsi utama dari gestur tangan saat berpidato?", options: ["Membuat tangan tidak diam", "Menggaruk jika gatal", "Menekankan poin penting dan menambah energi", "Menunjuk orang di audiens"], correctAnswer: "Menekankan poin penting dan menambah energi" },
                    { id: 5, text: "Cara terbaik untuk menutup pidato adalah dengan...", options: ["Berhenti berbicara tiba-tiba", "Mengatakan 'sekian dan terima kasih'", "Memberikan rangkuman singkat dan pesan yang kuat", "Menanyakan apakah ada pertanyaan"], correctAnswer: "Memberikan rangkuman singkat dan pesan yang kuat" }
                ]
            },
            { type: 'congrats', title: 'Selamat! Anda Hebat!', duration: '3 Menit' },
        ]
    }
];


// --- ICON COMPONENTS (Tetap sama) ---
const PlayIcon = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const CheckCircleIcon = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const DocumentTextIcon = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>;
const ArrowRightIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>;

// --- HELPER COMPONENTS (Tetap sama) ---
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    return <div className="flex items-center">{[...Array(fullStars)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}</div>;
};

// --- LEARNING CONTENT COMPONENTS ---
const VideoContent = ({ module, course }) => (
    <div className="space-y-4">
        <div className="aspect-video w-full"><iframe className="w-full h-full rounded-lg" src={module.videoUrl} title={module.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <h2 className="text-2xl font-bold">{module.title}</h2>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Oleh <strong>{course.author}</strong></span>
            <div className="flex items-center gap-1"><StarRating rating={course.rating} /><span>({course.rating})</span></div>
        </div>
        <p>Deskripsi video akan muncul di sini. Pelajari dasar-dasar dari modul ini untuk melanjutkan ke materi berikutnya.</p>
    </div>
);

const RulesContent = ({ module, handleNextModule }) => (
    <div className="space-y-6">
        {/* Anda bisa mengatur tinggi gambar di sini dengan mengubah class `h-72`. Contoh: h-64, h-80, dll. */}
        <div className="h-72 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/images/learn/rules.webp" alt="Rules" className="w-full h-full object-cover"/>
        </div>
        <h3 className="text-2xl font-bold">{module.title}</h3>
        <p>Kerjakan pre-test dengan sebaik mungkin untuk mengukur pemahaman awalmu. Jawablah materi yang sudah kamu pelajari dengan jujur dan sungguh-sungguh.</p>
        {/* Tambahkan tombol untuk langsung ke modul berikutnya jika perlu */}
        <button onClick={handleNextModule} className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700">Mulai Modul Pertama</button>
    </div>
);


// --- KOMPONEN KUIS BARU ---
const QuizContent = ({ module, isDarkMode, handleQuizComplete, courseId }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate();
    
    const isQuizFinished = Object.keys(userAnswers).length === module.questions.length;
    
    const handleSubmitQuiz = () => {
        let correctCount = 0;
        module.questions.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        setShowResult(true);

        // Logic kelulusan: minimal 7 benar
        if (correctCount >= 7) {
            handleQuizComplete(true); // Tandai kuis selesai berhasil
        } else {
            handleQuizComplete(false); // Tandai kuis selesai gagal (misalnya, harus mengulang)
        }
    };

    const handleAnswerSelect = (questionId, answer) => {
        if (!showResult) {
            setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
        }
    };

    const handleNavigateQuestion = (direction) => {
        const newIndex = currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < module.questions.length) {
            setCurrentQuestionIndex(newIndex);
        }
    };

    const handleNextStep = () => {
        if (showResult) {
            let correctCount = 0;
            module.questions.forEach(q => {
                if (userAnswers[q.id] === q.correctAnswer) {
                    correctCount++;
                }
            });

            if (correctCount >= 7) {
                // Navigasi ke halaman sertifikat
                navigate(`/certificate/${courseId}`);
            } else {
                // Reset kuis untuk mengulang
                setShowResult(false);
                setUserAnswers({});
                setCurrentQuestionIndex(0);
                alert("Anda belum mencapai minimum 7 jawaban benar. Silakan ulangi kuis!");
            }
        } else if (currentQuestionIndex < module.questions.length - 1) {
             handleNavigateQuestion(1);
        }
    };


    const currentQuestion = module.questions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestion.id];
    
    const getAnswerClass = (option, questionId) => {
        const userAnswer = userAnswers[questionId];
        const isSelected = userAnswer === option;
        const isCorrect = option === module.questions.find(q => q.id === questionId).correctAnswer;

        if (!showResult) {
            return isSelected 
                ? `border-green-500 bg-green-50 dark:bg-green-900/20 ${isDarkMode ? 'text-white' : 'text-black'}` 
                : `dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`;
        }
        
        // Mode hasil
        if (isCorrect) {
            return 'border-green-500 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200';
        } else if (isSelected && !isCorrect) {
            return 'border-red-500 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200';
        }
        return `dark:border-gray-600 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`;
    };

    if (showResult) {
        let correctCount = 0;
        module.questions.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });
        const isPassed = correctCount >= 7;

        return (
            <div className="text-center p-8 border rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">{isPassed ? 'Selamat! Anda Lulus Kuis!' : 'Maaf, Anda Belum Lulus.'}</h2>
                <p className="text-xl mb-4">Skor Anda: <span className={`font-extrabold ${isPassed ? 'text-green-600' : 'text-red-600'}`}>{correctCount} / {module.questions.length}</span></p>
                <p className="mb-8">{isPassed ? 'Anda berhasil menjawab minimal 7 soal dengan benar. Lanjut untuk mendapatkan sertifikat!' : 'Anda harus menjawab minimal 7 soal dengan benar untuk lulus. Silakan ulangi kuis.'}</p>
                
                {isPassed ? (
                    <button onClick={handleNextStep} className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-600">Cetak Sertifikat</button>
                ) : (
                    <button onClick={handleNextStep} className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700">Ulangi Kuis</button>
                )}
                <button onClick={() => setShowResult(false)} className={`block mx-auto mt-4 font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-green-500`}>Lihat Jawaban</button>
            </div>
        );
    }
    
    // Tampilan Kuis
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">{module.title}</h2>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Question Navigator */}
                <div className="w-full md:w-1/4">
                    <h3 className="font-bold mb-2">List Soal</h3>
                    <div className="grid grid-cols-5 gap-2">
                        {module.questions.map((q, index) => (
                            <button 
                                key={q.id} 
                                onClick={() => setCurrentQuestionIndex(index)} 
                                className={`flex items-center justify-center aspect-square rounded transition-colors ${ 
                                    currentQuestionIndex === index 
                                        ? 'bg-green-600 text-white' 
                                        : (userAnswers[q.id] 
                                            ? (isDarkMode ? 'bg-gray-600 text-white' : 'bg-green-100 text-green-700') 
                                            : (isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-700')) 
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                     <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">Total Soal: {module.questions.length}</p>
                </div>

                {/* Question and Answers */}
                <div className="w-full md:w-3/4">
                    <h3 className="font-bold">Pertanyaan {currentQuestionIndex + 1}</h3>
                    <p className="mt-2 mb-4">{currentQuestion.text}</p>
                    <div className="space-y-3">
                        {currentQuestion.options.map((option) => (
                            <div key={option} onClick={() => handleAnswerSelect(currentQuestion.id, option)} className={`border p-4 rounded-lg cursor-pointer transition-colors flex items-center gap-4 ${getAnswerClass(option, currentQuestion.id)}`}>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${ selectedAnswer === option ? 'border-green-500' : 'border-gray-400'}`}>
                                    {selectedAnswer === option && <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>}
                                </div>
                                <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{option}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-between border-t dark:border-gray-700 pt-4">
                        <button onClick={() => handleNavigateQuestion(-1)} disabled={currentQuestionIndex === 0} className="font-semibold hover:text-green-500 disabled:opacity-50"> &larr; Sebelumnya</button>
                        {currentQuestionIndex === module.questions.length - 1 ? (
                            <button onClick={handleSubmitQuiz} disabled={!isQuizFinished} className="font-semibold px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 disabled:bg-gray-400">Kirim Jawaban</button>
                        ) : (
                            <button onClick={() => handleNavigateQuestion(1)} disabled={!selectedAnswer} className="font-semibold text-green-600 hover:text-green-700 disabled:opacity-50">Selanjutnya &rarr;</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


const CongratsContent = ({ module, activeModuleIndex, courseModulesLength, courseId }) => {
    const navigate = useNavigate();
    const handleNext = () => {
        // Logika untuk navigasi ke Sertifikat jika ini modul terakhir
        if (activeModuleIndex === courseModulesLength - 1) {
            navigate(`/certificate/${courseId}`);
        }
    }
    
    return (
        <div className="text-center p-8">
            {/* Anda bisa mengatur tinggi gambar di sini dengan mengubah class `h-72`. Contoh: h-64, h-80, dll. */}
            <div className="h-72 bg-green-200 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                <img src="/images/learn/congrats.webp" alt="Congratulations" className="w-full h-full object-cover"/>
            </div>
            <p className="text-xl font-semibold">{module.title}</p>
            <p className="mb-4">Teruskan kerja bagusmu dan selesaikan semua modul untuk mendapatkan sertifikat!</p>
             {activeModuleIndex === courseModulesLength - 1 && (
                <button onClick={handleNext} className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-600 mt-4">Klaim Sertifikat</button>
             )}
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const CoursePlayerPage = () => {
    const { id } = useParams();
    const { isDarkMode } = useContext(DarkMode);
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);

    const courseData = allCoursesData.find(course => course.id === parseInt(id));
    const [quizCompleted, setQuizCompleted] = useState(false); // State untuk menandai kuis selesai (lulus)

    useEffect(() => {
        // Reset state kuis ketika ID kursus berubah
        setQuizCompleted(false);
        setActiveModuleIndex(0);
        window.scrollTo(0, 0);
    }, [id]);
    
    const handleQuizComplete = (isSuccess) => {
        if (isSuccess) {
            setQuizCompleted(true);
        } else {
             setQuizCompleted(false);
             // Opsional: Tetap di modul kuis atau pindah ke modul lain
        }
    };


    if (!courseData) {
        return ( <div className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}><h1 className="text-2xl font-bold">Kursus Tidak Ditemukan</h1><Link to="/" className="mt-4 text-green-600 hover:underline">Kembali ke Beranda</Link></div>);
    }

    const activeModule = courseData.modules[activeModuleIndex];
    const progressPercentage = ((activeModuleIndex + 1) / courseData.modules.length) * 100;

    const handleSelectModule = (index) => setActiveModuleIndex(index);
    
    const handleNextModule = () => {
         // Cek apakah kuis di modul sebelumnya sudah selesai/lulus
        const prevModule = courseData.modules[activeModuleIndex];
        
        if (prevModule.type === 'quiz' && !quizCompleted) {
            alert("Anda harus menyelesaikan kuis ini dengan minimal 7 jawaban benar sebelum melanjutkan!");
            return;
        }
        
        setActiveModuleIndex(Math.min(courseData.modules.length - 1, activeModuleIndex + 1));
    };


    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
            <header className={`sticky top-0 z-20 shadow-sm ${isDarkMode ? 'bg-gray-900 border-b border-gray-700' : 'bg-white border-b'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center h-16">
                    <Link to="/profile?tab=courses" className="flex items-center gap-2 font-semibold hover:text-green-500 transition-colors"><ArrowLeftIcon /><span className="hidden md:inline">{courseData.title}</span></Link>
                    <div className="flex-1 flex justify-center items-center gap-4 mx-4">
                        <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"><div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div></div>
                        <span className="text-sm font-semibold text-yellow-500">{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">J</div>
                </div>
            </header>
            <div className="container mx-auto flex flex-col md:flex-row flex-1">
                <aside className={`w-full md:w-[350px] p-4 border-r ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'}`}>
                    <div className="md:h-[calc(100vh-144px)] md:overflow-y-auto pr-2">
                        <h2 className="font-bold text-lg mb-4 px-2">Daftar Modul</h2>
                        <nav className="space-y-1">
                            {courseData.modules.map((module, index) => {
                                const isActive = index === activeModuleIndex;
                                const isCompleted = index < activeModuleIndex;
                                const Icon = isCompleted ? CheckCircleIcon : module.type === 'video' || module.type === 'rules' ? PlayIcon : DocumentTextIcon;
                                return ( <button key={index} onClick={() => handleSelectModule(index)} className={`w-full text-left p-3 rounded-lg flex items-center transition-colors ${ isActive ? 'bg-green-600 text-white' : `hover:bg-gray-100 dark:hover:bg-gray-800 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}` }`}><Icon className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? 'text-white' : (isCompleted ? 'text-green-500' : 'text-gray-500')}`} /><div><p className={`text-sm font-semibold ${isActive ? 'text-white' : (isDarkMode ? 'text-gray-200' : 'text-gray-800')}`}>{module.title}</p><p className={`text-xs ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>{module.duration}</p></div></button> );
                            })}
                        </nav>
                    </div>
                </aside>
                <main className="flex-1 p-6 md:p-10 pb-32 md:h-[calc(100vh-64px)] md:overflow-y-auto">
                    {activeModule.type === 'video' && <VideoContent module={activeModule} course={courseData} />}
                    {activeModule.type === 'rules' && <RulesContent module={activeModule} handleNextModule={handleNextModule} />}
                    {activeModule.type === 'quiz' && <QuizContent module={activeModule} isDarkMode={isDarkMode} handleQuizComplete={handleQuizComplete} courseId={courseData.id} />}
                    {activeModule.type === 'summary' && (<div className="space-y-4"><div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"><p>Konten Interaktif untuk: {activeModule.title}</p></div><h2 className="text-2xl font-bold">{activeModule.title}</h2></div>)}
                    {activeModule.type === 'congrats' && <CongratsContent module={activeModule} activeModuleIndex={activeModuleIndex} courseModulesLength={courseData.modules.length} courseId={courseData.id} />}
                </main>
            </div>
            <footer className={`fixed bottom-0 left-0 right-0 z-10 border-t shadow-[0_-2px_5px_rgba(0,0,0,0.05)] ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                 <div className="container mx-auto flex justify-between items-center p-3">
                    <button onClick={() => handleSelectModule(Math.max(0, activeModuleIndex - 1))} disabled={activeModuleIndex === 0} className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40"><ArrowLeftIcon /> Sebelumnya</button>
                    {activeModule.type !== 'quiz' && activeModule.type !== 'congrats' && activeModule.type !== 'rules' && (
                        <button onClick={handleNextModule} disabled={activeModuleIndex === courseData.modules.length - 1} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-500 dark:disabled:bg-gray-600">Selanjutnya <ArrowRightIcon /></button>
                    )}
                    {activeModule.type === 'congrats' && (
                        <button onClick={handleNextModule} disabled={activeModuleIndex === courseData.modules.length - 1} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-500 dark:disabled:bg-gray-600">Selanjutnya <ArrowRightIcon /></button>
                    )}
                 </div>
            </footer>
        </div>
    );
};

export default CoursePlayerPage;