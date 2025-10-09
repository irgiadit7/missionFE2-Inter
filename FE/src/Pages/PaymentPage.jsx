import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Header from '../components/Layouts/Header';
import { DarkMode } from '../context/DarkMode';
import { addCourses } from '../redux/slices/myCoursesSlice';
import { removeItems } from '../redux/slices/cartSlice';

// --- DATA (DUMMY) ---
const paymentOptions = {
    bank: [
        { name: 'Bank BCA', image: '/images/payment/bank/bca.webp' },
        { name: 'Bank BNI', image: '/images/payment/bank/bni.webp' },
        { name: 'Bank BRI', image: '/images/payment/bank/bri.webp' },
        { name: 'Bank Mandiri', image: '/images/payment/bank/mandiri.webp' }
    ],
    ewallet: [
        { name: 'DANA', image: '/images/payment/e-wallet/dana.webp' },
        { name: 'OVO', image: '/images/payment/e-wallet/ovo.webp' },
        { name: 'LinkAja', image: '/images/payment/e-wallet/linkAja.webp' },
        { name: 'Shopee Pay', image: '/images/payment/e-wallet/shoppe.webp'}
    ],
    card: [{ name: 'Kartu Kredit/Debit', images: ['/images/payment/visa1.webp', '/images/payment/visa2.webp', '/images/payment/visa3.webp'] }]
};

// --- ICON COMPONENTS ---
const CheckIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const DocumentIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const LanguageIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 13l4-16M11 21L7 5m12 16a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const GreenCheckCircleIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11.5" fill="white" stroke="#16A34A"/><path d="M17.3337 8.5L10.0003 15.8333L6.66699 12.5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

// --- HELPER COMPONENTS ---
const CountdownTimer = ({ isDarkMode }) => {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
    useEffect(() => {
        if (timeLeft <= 0) return;
        const intervalId = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = () => {
        const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
        const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
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
            <svg className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""} ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} space-y-3`}>{children}</div>
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---
const PaymentPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(DarkMode);
    
    const [selectedPayment, setSelectedPayment] = useState('');
    const [openAccordion, setOpenAccordion] = useState('bank');
    const [view, setView] = useState('selection');
    const [copySuccess, setCopySuccess] = useState('');

    const allProducts = useSelector(state => state.products.data);
    const product = allProducts.find((p) => p.id === parseInt(id));

    const cartTotalPrice = location.state?.totalPrice;
    const vaNumber = "8708-0403-1458-7890";

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(vaNumber.replace(/-/g, '')).then(() => {
            setCopySuccess('Disalin!');
            setTimeout(() => setCopySuccess(''), 2000);
        });
    };

    const handleConfirmPayment = () => {
        const itemsToPurchase = location.state?.itemsToPurchase;

        const showSuccessToast = () => {
            toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10`}
                >
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <svg className="h-10 w-10 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Pembayaran Berhasil!
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Kursus telah ditambahkan ke profil Anda.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              ), { duration: 4000 }
            );
        };

        if (itemsToPurchase && itemsToPurchase.length > 0) {
            dispatch(addCourses(itemsToPurchase));
            const idsToRemove = itemsToPurchase.map(item => item.id);
            dispatch(removeItems(idsToRemove));
            showSuccessToast();
            navigate('/profile?tab=courses');
        } else if (product) {
            const singleItem = [{ id: product.id, qty: 1 }];
            dispatch(addCourses(singleItem));
            dispatch(removeItems([product.id]));
            showSuccessToast();
            navigate('/profile?tab=courses');
        } else {
            toast.error("Terjadi kesalahan. Tidak ada produk untuk dibeli.");
            navigate('/cart');
        }
    };

    if (!product) {
        return <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-[#FFFDF3]'}`}>Loading...</div>;
    }
    
    const adminFee = 7.000;
    const basePrice = cartTotalPrice !== undefined ? cartTotalPrice : product.price;
    const totalPrice = basePrice + adminFee;

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-[#FFFDF3]'}`}>
            <Header simple={true} />
            <main className="container mx-auto px-4 py-12">
                {view === 'instruction' && (
                     <div className={`p-4 rounded-lg shadow-md mb-8 flex justify-between items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <p className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>Selesaikan pembayaran dalam <CountdownTimer isDarkMode={isDarkMode} /></p>
                        <button onClick={() => setView('selection')} className={`font-semibold ${isDarkMode ? 'text-red-400 hover:text-red-500' : 'text-red-500 hover:text-red-700'}`}>Batal</button>
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {view === 'selection' ? (
                            <>
                                <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Metode Pembayaran</h1>
                                    <div className="space-y-4">
                                        {Object.entries(paymentOptions).map(([key, options]) => (
                                            <Accordion key={key} title={key.replace(/^\w/, c => c.toUpperCase()).replace('ewallet', 'E-Wallet')} isOpen={openAccordion === key} onClick={() => setOpenAccordion(openAccordion === key ? null : key)} isDarkMode={isDarkMode}>
                                                {options.map(opt => (
                                                    <div key={opt.name} onClick={() => setSelectedPayment(opt.name)} className={`p-4 flex items-center justify-between border rounded-lg cursor-pointer transition-colors ${selectedPayment === opt.name ? 'border-green-500' : isDarkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-50'}`}>
                                                        <div className="flex items-center">
                                                            {key === 'card' && opt.images ? (
                                                                <div className="flex items-center space-x-2 mr-4">
                                                                    {opt.images.map((imgSrc, idx) => (<img key={idx} src={imgSrc} alt={`${opt.name} ${idx + 1}`} className="max-h-4 object-contain" />))}
                                                                </div>
                                                            ) : opt.image && (
                                                                <div className="w-10 flex items-center justify-center mr-4"><img src={opt.image} alt={opt.name} className="max-h-4 object-contain" /></div>
                                                            )}
                                                            <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{opt.name}</span>
                                                        </div>
                                                        {selectedPayment === opt.name && <GreenCheckCircleIcon />}
                                                    </div>
                                                ))}
                                            </Accordion>
                                        ))}
                                    </div>
                                </div>
                                <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ringkasan Pesanan</h2>
                                    <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {cartTotalPrice !== undefined ? (
                                            <div className="flex justify-between"><p>Total Belanja</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(basePrice * 1000)}</p></div>
                                        ) : (
                                            <div className="flex justify-between items-start"><p className="w-3/4">{product.title}</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(basePrice * 1000)}</p></div>
                                        )}
                                        <div className="flex justify-between"><p>Biaya Admin</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(adminFee * 1000)}</p></div>
                                        <div className={`border-t pt-4 mt-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}><div className={`flex justify-between font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}><p>Total Pembayaran</p><p>Rp{new Intl.NumberFormat('id-ID').format(totalPrice * 1000)}</p></div></div>
                                    </div>
                                    <button onClick={() => setView('instruction')} className="mt-6 w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400" disabled={!selectedPayment}>Bayar Sekarang</button>
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
                                    {cartTotalPrice !== undefined ? (
                                        <div className="flex justify-between"><p>Total Belanja</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(basePrice * 1000)}</p></div>
                                    ) : (
                                        <div className="flex justify-between items-start"><p className="w-3/4">{product.title}</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(basePrice * 1000)}</p></div>
                                    )}
                                    <div className="flex justify-between"><p>Biaya Admin</p><p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(adminFee * 1000)}</p></div>
                                    <div className={`border-t pt-4 mt-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}><div className={`flex justify-between font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}><p>Total Pembayaran</p><p>Rp{new Intl.NumberFormat('id-ID').format(totalPrice * 1000)}</p></div></div>
                                </div>
                                <div className="flex space-x-4">
                                    <button onClick={() => setView('selection')} className={`w-full py-3 rounded-full font-semibold border transition-colors ${isDarkMode ? 'border-green-500 text-green-500 hover:bg-green-500/10' : 'border-green-600 text-green-600 hover:bg-green-50'}`}>Ganti Metode Pembayaran</button>
                                    <button onClick={handleConfirmPayment} className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700">Konfirmasi Pembayaran</button>
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