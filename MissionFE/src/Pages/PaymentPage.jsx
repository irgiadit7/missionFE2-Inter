import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Layouts/Header';
import { DarkMode } from '../context/DarkMode';

// --- DATA (DUMMY) ---
const courseData = [
    { id: 1, category: 'bisnis', title: 'Big 4 Auditor Financial Analyst', author: 'Jenna Ortega', rating: 5.0, price: 300, image: '/images/ProductsList/bisnis/Big 4 Auditor Financial Analyst.webp' },
    { id: 2, category: 'pemasaran', title: 'Digital Marketing Fundamental', author: 'John Doe', rating: 4.9, price: 350, image: '/images/ProductsList/pemasaran/Digital Marketing Fundamental.webp' },
    { id: 3, category: 'desain', title: 'UI/UX Design Basics', author: 'Jane Smith', rating: 4.7, price: 250, image: '/images/ProductsList/desain/UI UX Design Basics.webp' },
    { id: 4, category: 'pengembangan-diri', title: 'Public Speaking Mastery', author: 'Jenna Ortega', rating: 3.0, price: 300, image: '/images/ProductsList/pengembangan-diri/Public Speaking Mastery.webp' },
    { id: 5, category: 'bisnis', title: 'Financial Planning for Beginners', author: 'Mike Ross', rating: 5.0, price: 280, image: '/images/ProductsList/bisnis/Financial Planning for Beginners.webp' },
    { id: 6, category: 'pemasaran', title: 'Social Media Marketing Strategy', author: 'Emily White', rating: 4.6, price: 275, image: '/images/ProductsList/pemasaran/Social Media Marketing Strategy.webp' },
    { id: 7, category: 'desain', title: 'Design Fundamentals', author: 'Chris Green', rating: 4.9, price: 320, image: '/images/ProductsList/desain/Design Fundamentals.webp' },
    { id: 8, category: 'pengembangan-diri', title: 'Time Management Hacks', author: 'David Chen', rating: 3.3, price: 310, image: '/images/ProductsList/pengembangan-diri/Time Management Hacks.webp' },
    { id: 9, category: 'bisnis', title: 'Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.', author: 'David Chen', rating: 4.8, price: 767.500, image: '/images/ProductsList/bisnis/Entrepreneurship 101.webp' },
];

const paymentOptions = {
    bank: [{ name: 'Bank BCA' }, { name: 'Bank Mandiri' }, { name: 'Bank BRI' }],
    ewallet: [{ name: 'Gopay' }, { name: 'OVO' }, { name: 'DANA' }, { name: 'LinkAja' }, { name: 'Shopee Pay'}],
    card: [{ name: 'Kartu Kredit / Debit' }]
};

// --- ICON COMPONENTS ---
const CheckIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const DocumentIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const LanguageIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 13l4-16M11 21L7 5m12 16a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// --- HELPER COMPONENTS ---
const CountdownTimer = ({ isDarkMode }) => {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = () => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return <span className={`font-bold ${isDarkMode ? 'text-red-400' : 'text-red-500'}`}>{formatTime()}</span>;
};

const CourseSummaryCard = ({ course, isDarkMode }) => (
    <div className={`rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <img src={course.image} alt={course.title} className="rounded-md w-full h-48 object-cover mb-4" />
        <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{course.title}</h3>
        <div className="flex items-baseline mb-4">
            <p className="text-2xl font-bold text-green-600 mr-2">{`Rp ${course.price}k`}</p>
            <p className="line-through text-gray-500">{`Rp ${course.price * 2}k`}</p>
        </div>
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Kelas Ini Sudah Termasuk:</p>
            <ul className="list-none space-y-2">
                <li className='flex items-center'><CheckIcon /> Ujian Akhir</li>
                <li className='flex items-center'><DocumentIcon /> 7 Dokumen</li>
                <li className='flex items-center'><CheckIcon /> Pretest</li>
                <li className='flex items-center'><DocumentIcon /> Sertifikat</li>
            </ul>
        </div>
        <div className={`border-t my-4 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}></div>
         <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Bahasa Pengantar:</p>
            <p className='flex items-center'><LanguageIcon /> Bahasa Indonesia</p>
        </div>
    </div>
);

const Accordion = ({ title, children, isOpen, onClick, isDarkMode }) => (
    <div className={`border rounded-lg ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button onClick={onClick} className="w-full flex justify-between items-center p-4 text-left font-semibold">
            <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>{title}</span>
            <svg className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""} ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} space-y-3`}>{children}</div>
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---
const PaymentPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { isDarkMode } = useContext(DarkMode);
    const [selectedPayment, setSelectedPayment] = useState('');
    const [openAccordion, setOpenAccordion] = useState('bank');
    const [view, setView] = useState('selection');
    const [copySuccess, setCopySuccess] = useState('');

    const vaNumber = "8708-0403-1458-7890";

    useEffect(() => {
        window.scrollTo(0, 0);
        const productData = courseData.find((p) => p.id === parseInt(id));
        setProduct(productData);
    }, [id]);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(vaNumber.replace(/-/g, '')).then(() => {
            setCopySuccess('Disalin!');
            setTimeout(() => setCopySuccess(''), 2000);
        });
    };

    if (!product) {
        return <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-[#FFFDF3]'}`}>Loading...</div>;
    }
    
    const adminFee = 7.000;
    const totalPrice = product.price + adminFee;

    // --- RENDER ---
    return (
        <div className={isDarkMode ? 'bg-gray-900' : 'bg-[#FFFDF3]'}>
            <Header simple={true} />
            <main className="container mx-auto px-4 py-12">
                {view === 'instruction' && (
                     <div className={`p-4 rounded-lg shadow-md mb-8 flex justify-between items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <p className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                            Selesaikan pembayaran dalam <CountdownTimer isDarkMode={isDarkMode} />
                        </p>
                        <button onClick={() => setView('selection')} className={`font-semibold ${isDarkMode ? 'text-red-400 hover:text-red-500' : 'text-red-500 hover:text-red-700'}`}>Batal</button>
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* --- Left Column --- */}
                    <div className="lg:col-span-2 space-y-8">
                        {view === 'selection' ? (
                            <>
                                <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Metode Pembayaran</h1>
                                    <div className="space-y-4">
                                        {Object.entries(paymentOptions).map(([key, options]) => (
                                            <Accordion key={key} title={key.replace(/^\w/, c => c.toUpperCase()).replace('ewallet', 'E-Wallet')} isOpen={openAccordion === key} onClick={() => setOpenAccordion(openAccordion === key ? null : key)} isDarkMode={isDarkMode}>
                                                {options.map(opt => (
                                                    <div key={opt.name} onClick={() => setSelectedPayment(opt.name)} className={`p-3 flex items-center justify-between border rounded-lg cursor-pointer transition-colors ${selectedPayment === opt.name ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                                                        <div className="flex items-center">
                                                            <div className={`w-16 h-8 rounded mr-4 flex items-center justify-center text-xs ${isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>Logo</div>
                                                            <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{opt.name}</span>
                                                        </div>
                                                        <input type="radio" name="payment" readOnly checked={selectedPayment === opt.name} className="form-radio text-green-500 focus:ring-green-500" />
                                                    </div>
                                                ))}
                                            </Accordion>
                                        ))}
                                    </div>
                                </div>
                                <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ringkasan Pesanan</h2>
                                    <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <div className="flex justify-between items-start"><p className="w-3/4">{product.title}</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(product.price * 1000)}</p></div>
                                        <div className="flex justify-between"><p>Biaya Admin</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(adminFee * 1000)}</p></div>
                                        <div className={`border-t pt-4 mt-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}><div className={`flex justify-between font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}><p>Total Pembayaran</p><p>Rp{new Intl.NumberFormat('id-ID').format(totalPrice * 1000)}</p></div></div>
                                    </div>
                                    <button onClick={() => setView('instruction')} className="mt-6 w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400" disabled={!selectedPayment}>Beli Sekarang</button>
                                </div>
                            </>
                        ) : (
                            <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="text-center">
                                    <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Bayar Melalui Virtual Account {selectedPayment}</h2>
                                    <p className={`text-3xl font-bold my-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{vaNumber}</p>
                                    <button onClick={handleCopyToClipboard} className={`text-sm font-semibold ${isDarkMode ? 'text-green-400 hover:underline' : 'text-green-600 hover:underline'}`}>{copySuccess || 'Salin'}</button>
                                </div>
                                <div className={`border-t my-8 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}></div>
                                <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ringkasan Pesanan</h2>
                                <div className={`space-y-3 mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="flex justify-between items-start"><p className="w-3/4">{product.title}</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(product.price * 1000)}</p></div>
                                    <div className="flex justify-between"><p>Biaya Admin</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(adminFee * 1000)}</p></div>
                                    <div className={`border-t pt-4 mt-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}><div className={`flex justify-between font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}><p>Total Pembayaran</p><p>Rp{new Intl.NumberFormat('id-ID').format(totalPrice * 1000)}</p></div></div>
                                </div>
                                <div className="flex space-x-4">
                                    <button onClick={() => setView('selection')} className={`w-full py-3 rounded-full font-semibold border transition-colors ${isDarkMode ? 'border-green-500 text-green-500 hover:bg-green-500/10' : 'border-green-600 text-green-600 hover:bg-green-50'}`}>Ganti Metode Pembayaran</button>
                                    <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700">Cek Status Pembayaran</button>
                                </div>
                                <div className="mt-8">
                                    <Accordion title="Tata Cara Pembayaran" isOpen={true} isDarkMode={isDarkMode}>
                                        <div className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <p>1. Masukkan kartu ATM dan PIN.</p>
                                            <p>2. Pilih menu ‘Transaksi Lainnya’ – ‘Transfer’ – ‘Ke Rekening BCA Virtual Account’.</p>
                                            <p>3. Masukkan nomor BCA Virtual Account di atas dan pilih ‘Benar’.</p>
                                            <p>4. Pastikan data yang dimasukkan sudah benar, lalu pilih 'Ya'.</p>
                                        </div>
                                    </Accordion>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* --- Right Column --- */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                           <CourseSummaryCard course={product} isDarkMode={isDarkMode} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaymentPage;