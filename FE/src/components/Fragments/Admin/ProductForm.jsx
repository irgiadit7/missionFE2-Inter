import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // <-- Import useDispatch
import { addProduct, updateProduct } from '../../../redux/slices/productsSlice'; // <-- Import aksi-aksi
import { DarkMode } from '../../../context/DarkMode';

const ProductForm = ({ isEditMode = false, productToEdit = null }) => {
    const { isDarkMode } = useContext(DarkMode);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Hook untuk mengirim aksi

    const [formData, setFormData] = useState({
        title: '', category: 'bisnis', author: '', price: '', desc: ''
    });

    useEffect(() => {
        if (isEditMode && productToEdit) {
            setFormData({
                title: productToEdit.title,
                category: productToEdit.category,
                author: productToEdit.author,
                price: productToEdit.price,
                desc: productToEdit.desc
            });
        }
    }, [isEditMode, productToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isEditMode) {
            const updatedCourse = {
                ...productToEdit,
                ...formData,
                price: parseInt(formData.price)
            };
            // Kirim aksi 'updateProduct' ke Redux
            dispatch(updateProduct(updatedCourse));
            alert("Produk berhasil di-update!");

        } else {
            const newCourse = {
                ...formData,
                id: Date.now(),
                price: parseInt(formData.price),
                rating: 0,
                image: '/images/ProductsList/bisnis/default.webp'
            };
            // Kirim aksi 'addProduct' ke Redux
            dispatch(addProduct(newCourse));
            alert("Produk baru telah ditambahkan!");
        }

        navigate('/admin/products');
    };

    const inputClass = `w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`;
    const labelClass = `block font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;

    return (
        <div className={`rounded-lg shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className={labelClass}>Judul Kursus</label>
                    <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className={inputClass} required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="category" className={labelClass}>Kategori</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange} className={inputClass} required>
                            <option value="bisnis">Bisnis</option>
                            <option value="pemasaran">Pemasaran</option>
                            <option value="desain">Desain</option>
                            <option value="pengembangan-diri">Pengembangan Diri</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price" className={labelClass}>Harga (dalam 'k', mis: 300)</label>
                        <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className={inputClass} placeholder="Contoh: 300" required />
                    </div>
                </div>

                <div>
                    <label htmlFor="author" className={labelClass}>Nama Author</label>
                    <input type="text" name="author" id="author" value={formData.author} onChange={handleChange} className={inputClass} required />
                </div>

                <div>
                    <label htmlFor="desc" className={labelClass}>Deskripsi</label>
                    <textarea name="desc" id="desc" rows="5" value={formData.desc} onChange={handleChange} className={inputClass} required></textarea>
                </div>
                
                <div className="flex justify-end gap-4 pt-4 border-t dark:border-gray-700">
                    <button type="button" onClick={() => navigate('/admin/products')} className={`px-6 py-2 rounded-lg font-semibold ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'}`}>
                        Batal
                    </button>
                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700">
                        Simpan Produk
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;