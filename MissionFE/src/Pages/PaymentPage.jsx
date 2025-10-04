import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Layouts/Header';
import { DarkMode } from '../context/DarkMode';

// NOTE: Dalam aplikasi nyata, data ini sebaiknya diambil dari satu sumber data terpusat.
const courseData = [
    { id: 1, category: 'bisnis', title: 'Big 4 Auditor Financial Analyst', author: 'Jenna Ortega', rating: 5.0, price: 300, image: '/images/ProductsList/bisnis/Big 4 Auditor Financial Analyst.webp' },
    { id: 2, category: 'pemasaran', title: 'Digital Marketing Fundamental', author: 'John Doe', rating: 4.9, price: 350, image: '/images/ProductsList/pemasaran/Digital Marketing Fundamental.webp' },
    { id: 3, category: 'desain', title: 'UI/UX Design Basics', author: 'Jane Smith', rating: 4.7, price: 250, image: '/images/ProductsList/desain/UI UX Design Basics.webp' },
    { id: 4, category: 'pengembangan-diri', title: 'Public Speaking Mastery', author: 'Jenna Ortega', rating: 3.0, price: 300, image: '/images/ProductsList/pengembangan-diri/Public Speaking Mastery.webp' },
    { id: 5, category: 'bisnis', title: 'Financial Planning for Beginners', author: 'Mike Ross', rating: 5.0, price: 280, image: '/images/ProductsList/bisnis/Financial Planning for Beginners.webp' },
    { id: 6, category: 'pemasaran', title: 'Social Media Marketing Strategy', author: 'Emily White', rating: 4.6, price: 275, image: '/images/ProductsList/pemasaran/Social Media Marketing Strategy.webp' },
    { id: 7, category: 'desain', title: 'Design Fundamentals', author: 'Chris Green', rating: 4.9, price: 320, image: '/images/ProductsList/desain/Design Fundamentals.webp' },
    { id: 8, category: 'pengembangan-diri', title: 'Time Management Hacks', author: 'David Chen', rating: 3.3, price: 310, image: '/images/ProductsList/pengembangan-diri/Time Management Hacks.webp' },
    { id: 9, category: 'bisnis', title: 'Entrepreneurship 101', author: 'David Chen', rating: 1.2, price: 310, image: '/images/ProductsList/bisnis/Entrepreneurship 101.webp' },
];

const paymentOptions = {
    bank: [{ name: 'Bank BCA' }, { name: 'Bank Mandiri' }, { name: 'Bank BRI' }],
    ewallet: [{ name: 'Gopay' }, { name: 'OVO' }, { name: 'DANA' }, { name: 'LinkAja' }, { name: 'Shopee Pay'}],
    card: [{ name: 'Kartu Kredit / Debit' }]
};

// --- Icon Components ---
const CheckIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const DocumentIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const LanguageIcon = () => <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 13l4-16M11 21L7 5m12 16a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// --- Main Components ---
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

const PaymentAccordion = ({ title, children, isOpen, onClick, isDarkMode }) => (
    <div className={`border rounded-lg ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button onClick={onClick} className="w-full flex justify-between items-center p-4 text-left font-semibold">
            <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>{title}</span>
            <svg className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""} ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className={`p-4 border-t space-y-3 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{children}</div>
        </div>
    </div>
);

const PaymentPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { isDarkMode } = useContext(DarkMode);
    const [selectedPayment, setSelectedPayment] = useState('');
    const [openAccordion, setOpenAccordion] = useState('bank');

    useEffect(() => {
        window.scrollTo(0, 0);
        const productData = courseData.find((p) => p.id === parseInt(id));
        setProduct(productData);
    }, [id]);

    if (!product) {
        return <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-[#FFFDF3]'}`}>Loading...</div>;
    }
    
    const adminFee = 7.500;
    const totalPrice = product.price + adminFee;

    const handleAccordionClick = (accordion) => {
        setOpenAccordion(openAccordion === accordion ? null : accordion);
    };

    return (
        <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FFFDF3]'}>
            <Header simple={true} />
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* --- Left Column --- */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Payment Methods Container */}
                        <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Metode Pembayaran</h1>
                            <div className="space-y-4">
                                <PaymentAccordion title="Transfer Bank" isOpen={openAccordion === 'bank'} onClick={() => handleAccordionClick('bank')} isDarkMode={isDarkMode}>
                                    {paymentOptions.bank.map(opt => (
                                        <div key={opt.name} onClick={() => setSelectedPayment(opt.name)} className={`p-3 flex items-center justify-between border rounded-lg cursor-pointer transition-colors ${selectedPayment === opt.name ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                                            <div className="flex items-center">
                                                <div className={`w-16 h-8 rounded mr-4 flex items-center justify-center text-xs ${isDarkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>Logo</div>
                                                <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{opt.name}</span>
                                            </div>
                                            <input type="radio" name="payment" readOnly checked={selectedPayment === opt.name} className="form-radio text-green-500 focus:ring-green-500" />
                                        </div>
                                    ))}
                                </PaymentAccordion>
                                <PaymentAccordion title="E-Wallet" isOpen={openAccordion === 'ewallet'} onClick={() => handleAccordionClick('ewallet')} isDarkMode={isDarkMode}>
                                    {paymentOptions.ewallet.map(opt => (
                                        <div key={opt.name} onClick={() => setSelectedPayment(opt.name)} className={`p-3 flex items-center justify-between border rounded-lg cursor-pointer transition-colors ${selectedPayment === opt.name ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                                            <div className="flex items-center">
                                                <div className={`w-16 h-8 rounded mr-4 flex items-center justify-center text-xs ${isDarkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>Logo</div>
                                                <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{opt.name}</span>
                                            </div>
                                            <input type="radio" name="payment" readOnly checked={selectedPayment === opt.name} className="form-radio text-green-500 focus:ring-green-500" />
                                        </div>
                                    ))}
                                </PaymentAccordion>
                                <PaymentAccordion title="Kartu Kredit/Debit" isOpen={openAccordion === 'card'} onClick={() => handleAccordionClick('card')} isDarkMode={isDarkMode}>
                                    {paymentOptions.card.map(opt => (
                                        <div key={opt.name} onClick={() => setSelectedPayment(opt.name)} className={`p-3 flex items-center justify-between border rounded-lg cursor-pointer transition-colors ${selectedPayment === opt.name ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                                            <div className="flex items-center">
                                                <div className={`w-16 h-8 rounded mr-4 flex items-center justify-center text-xs ${isDarkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>Logo</div>
                                                <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{opt.name}</span>
                                            </div>
                                            <input type="radio" name="payment" readOnly checked={selectedPayment === opt.name} className="form-radio text-green-500 focus:ring-green-500" />
                                        </div>
                                    ))}
                                </PaymentAccordion>
                            </div>
                        </div>

                        {/* Order Summary Container */}
                        <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                             <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ringkasan Pesanan</h2>
                             <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <div className="flex justify-between items-start">
                                    <p className="w-3/4">{product.title}</p>
                                    <p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(product.price * 1000)}</p>
                                </div>
                                 <div className="flex justify-between">
                                    <p>Biaya Admin</p>
                                    <p className="font-semibold">Rp{new Intl.NumberFormat('id-ID').format(adminFee * 1000)}</p>
                                </div>
                                <div className={`border-t pt-4 mt-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                                 <div className={`flex justify-between font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    <p>Total Pembayaran</p>
                                    <p>Rp{new Intl.NumberFormat('id-ID').format(totalPrice * 1000)}</p>
                                </div>
                                </div>
                             </div>
                             <button className="mt-6 w-full rounded-md bg-green-600 text-white py-3 font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400" disabled={!selectedPayment}>
                                Beli Sekarang
                             </button>
                        </div>
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