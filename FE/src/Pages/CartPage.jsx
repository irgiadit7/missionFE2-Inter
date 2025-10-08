import React, { useState, useEffect, useContext } from 'react';
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

    // State untuk melacak ID item yang dipilih
    const [selectedItems, setSelectedItems] = useState([]);

    const cartDetails = cartItems.map(item => {
        const course = allProducts.find(c => c.id === item.id);
        return { ...course, qty: item.qty };
    }).filter(item => item.title);

    // Hitung total harga HANYA untuk item yang dipilih
    const totalPrice = cartDetails
        .filter(item => selectedItems.includes(item.id))
        .reduce((total, item) => total + (item.price * item.qty), 0);
    
    // Handler untuk memilih/membatalkan satu item
    const handleSelectItem = (id) => {
        setSelectedItems(prev => 
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    // Handler untuk memilih/membatalkan semua item
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
                    itemsToPurchase: itemsToCheckout.map(item => ({ id: item.id, qty: item.qty })) // Kirim data item yang dipilih
                } 
            });
        } else {
            alert("Pilih setidaknya satu item untuk melanjutkan pembayaran.");
        }
    };

    // Cek apakah semua item terpilih (untuk state checkbox "Pilih Semua")
    const isAllSelected = cartDetails.length > 0 && selectedItems.length === cartDetails.length;

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FFFDF3] text-gray-800'}`}>
            <Header />
            <main className="container mx-auto px-4 py-12 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>
                
                {cartDetails.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {/* Tombol Pilih Semua */}
                            <div className={`flex items-center p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <input 
                                    type="checkbox" 
                                    id="select-all" 
                                    className="h-5 w-5 rounded text-green-600 focus:ring-green-500"
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                />
                                <label htmlFor="select-all" className="ml-4 font-semibold">Pilih Semua</label>
                            </div>

                            {/* Daftar Item */}
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
                                        <div className="flex items-center border rounded-md dark:border-gray-600">
                                            <button onClick={() => dispatch(decrementQuantity({ id: item.id }))} className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-l-md">-</button>
                                            <span className="px-4 border-l border-r dark:border-gray-600">{item.qty}</span>
                                            <button onClick={() => dispatch(incrementQuantity({ id: item.id }))} className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-r-md">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Ringkasan Belanja */}
                        <div className="lg:col-span-1">
                            <div className={`p-6 rounded-lg shadow-lg sticky top-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <h2 className="text-xl font-bold mb-4">Ringkasan</h2>
                                <div className="border-t my-4 dark:border-gray-700"></div>
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
                    <div className="text-center py-16">
                        {/* Tampilan keranjang kosong tidak berubah */}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;