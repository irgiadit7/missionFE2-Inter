import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DarkMode } from '../context/DarkMode';
import { removeItems, incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';
import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';

const CartPage = () => {
    const { isDarkMode } = useContext(DarkMode);
    const cartItems = useSelector((state) => state.cart.data);
    const allProducts = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedItems, setSelectedItems] = useState([]);

    const cartDetails = cartItems.map(item => {
        const course = allProducts.find(c => c.id === item.id);
        return { ...course, qty: item.qty };
    }).filter(item => item.title);

    const totalPrice = cartDetails
        .filter(item => selectedItems.includes(item.id))
        .reduce((total, item) => total + (item.price * item.qty), 0);
    
    const handleSelectItem = (id) => {
        setSelectedItems(prev => 
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(cartDetails.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleCheckout = () => {
        if (selectedItems.length > 0) {
            const itemsToCheckout = cartDetails.filter(item => selectedItems.includes(item.id));
            navigate(`/payment/${itemsToCheckout[0].id}`, { 
                state: { 
                    totalPrice: totalPrice,
                    itemsToPurchase: itemsToCheckout.map(item => ({ id: item.id, qty: item.qty }))
                } 
            });
        } else {
            alert("Pilih setidaknya satu item untuk melanjutkan pembayaran.");
        }
    };

    const handleDeleteSelected = () => {
        if (selectedItems.length > 0) {
            if (window.confirm(`Apakah Anda yakin ingin menghapus ${selectedItems.length} item dari keranjang?`)) {
                dispatch(removeItems(selectedItems));
                setSelectedItems([]);
            }
        } else {
            alert("Pilih item yang ingin dihapus.");
        }
    }

    const isAllSelected = cartDetails.length > 0 && selectedItems.length === cartDetails.length;

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FFFDF3] text-gray-800'}`}>
            <Header />
            <main className="container mx-auto px-4 py-12 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Keranjang Saya ({cartDetails.length})</h1>
                
                {cartDetails.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            <div className={`flex items-center justify-between p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        id="select-all" 
                                        className="h-5 w-5 rounded text-green-600 focus:ring-green-500"
                                        checked={isAllSelected}
                                        onChange={handleSelectAll}
                                    />
                                    <label htmlFor="select-all" className="ml-4 font-semibold">Checkout ({selectedItems.length})</label>
                                </div>
                                <button 
                                    onClick={handleDeleteSelected}
                                    disabled={selectedItems.length === 0}
                                    className="text-sm font-semibold text-red-500 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Hapus
                                </button>
                            </div>

                            {cartDetails.map(item => (
                                <div key={item.id} className={`flex flex-col sm:flex-row items-center p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <input 
                                        type="checkbox" 
                                        className="h-5 w-5 rounded text-green-600 focus:ring-green-500 mb-4 sm:mb-0 sm:mr-4"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleSelectItem(item.id)}
                                    />
                                    <img src={item.image} alt={item.title} className="w-32 h-20 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6" />
                                    <div className="flex-grow text-center sm:text-left">
                                        <h2 className="font-bold">{item.title}</h2>
                                        <p className="text-sm text-green-600 font-semibold">Rp {item.price}k</p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                                        <div className={`flex items-center border rounded-md ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                                            <button onClick={() => dispatch(decrementQuantity({ id: item.id }))} className={`px-3 py-1 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} rounded-l-md`}>-</button>
                                            <span className={`px-4 border-l border-r ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>{item.qty}</span>
                                            <button onClick={() => dispatch(incrementQuantity({ id: item.id }))} className={`px-3 py-1 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} rounded-r-md`}>+</button>
                                        </div>
                                        <button onClick={() => dispatch(removeItems([item.id]))} className={`text-gray-400 hover:text-red-500`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className={`p-6 rounded-lg shadow-lg sticky top-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <h2 className="text-xl font-bold mb-4">Ringkasan</h2>
                                <div className={`border-t my-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}></div>
                                <div className="flex justify-between font-bold text-lg mb-6">
                                    <span>Total ({selectedItems.length} item)</span>
                                    <span>Rp {totalPrice.toFixed(3)}k</span>
                                </div>
                                <button 
                                    onClick={handleCheckout}
                                    disabled={selectedItems.length === 0}
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    Lanjut ke Pembayaran
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`mx-auto h-24 w-24 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h2 className={`mt-6 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Keranjang Anda Kosong</h2>
                        <p className={`mt-2 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sepertinya Anda belum menambahkan kursus apapun.</p>
                        <div className="mt-6">
                            <Link
                                to="/"
                                className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
                            >
                                Jelajahi Kursus
                            </Link>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;