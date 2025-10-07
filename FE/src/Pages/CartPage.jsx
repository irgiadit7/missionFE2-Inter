import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DarkMode } from '../context/DarkMode';
import { courseData } from '../data/courses';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';
import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';

const CartPage = () => {
    const { isDarkMode } = useContext(DarkMode);
    const cartItems = useSelector((state) => state.cart.data);
    const dispatch = useDispatch();

    const cartDetails = cartItems.map(item => {
        const course = courseData.find(c => c.id === item.id);
        return { ...course, qty: item.qty };
    });

    const totalPrice = cartDetails.reduce((total, item) => total + (item.price * item.qty), 0);

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FFFDF3] text-gray-800'}`}>
            <Header />
            <main className="container mx-auto px-4 py-12 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>
                
                {cartDetails.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Daftar Item */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartDetails.map(item => (
                                <div key={item.id} className={`flex flex-col sm:flex-row items-center p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <img src={item.image} alt={item.title} className="w-32 h-20 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6" />
                                    <div className="flex-grow text-center sm:text-left">
                                        <h2 className="font-bold">{item.title}</h2>
                                        <p className="text-sm text-green-600 font-semibold">Rp {item.price}k</p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                                        <div className="flex items-center border rounded-md">
                                            <button onClick={() => dispatch(decrementQuantity({ id: item.id }))} className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700">-</button>
                                            <span className="px-4">{item.qty}</span>
                                            <button onClick={() => dispatch(incrementQuantity({ id: item.id }))} className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700">+</button>
                                        </div>
                                        <button onClick={() => dispatch(removeFromCart({ id: item.id }))} className="text-red-500 hover:text-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Ringkasan Belanja */}
                        <div className="lg:col-span-1">
                            <div className={`p-6 rounded-lg shadow-lg sticky top-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <h2 className="text-xl font-bold mb-4">Ringkasan</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>Rp {totalPrice}k</span>
                                </div>
                                <div className="border-t my-4 dark:border-gray-700"></div>
                                <div className="flex justify-between font-bold text-lg mb-6">
                                    <span>Total</span>
                                    <span>Rp {totalPrice}k</span>
                                </div>
                                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
                                    Lanjut ke Pembayaran
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold mb-2">Keranjang Anda Kosong</h2>
                        <p className="text-gray-500 mb-6">Sepertinya Anda belum menambahkan kursus apa pun.</p>
                        <Link to="/" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                            Cari Kursus
                        </Link>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;