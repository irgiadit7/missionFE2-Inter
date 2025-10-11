import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../../redux/slices/productsSlice';
import { DarkMode } from '../../../context/DarkMode';
import toast from 'react-hot-toast';

const UploadIcon = () => <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>;
const FileIcon = () => <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;


const ProductForm = ({ isEditMode = false, productToEdit = null }) => {
    const { isDarkMode } = useContext(DarkMode);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [imageFile, setImageFile] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        category: 'bisnis',
        author: '',
        price: '',
        desc: ''
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
    
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const imageUrl = imageFile ? `/images/uploads/${imageFile.name}` : (productToEdit?.image || '/images/ProductsList/default.webp');

        if (isEditMode) {
            const updatedCourse = {
                ...productToEdit,
                ...formData,
                price: parseInt(formData.price),
                image: imageUrl,
            };
            dispatch(updateProduct(updatedCourse));
            toast.success("Produk berhasil di-update!");

        } else {
            const newCourse = {
                ...formData,
                id: Date.now(),
                price: parseInt(formData.price),
                rating: (Math.random() * (5 - 3) + 3).toFixed(1), // rating acak antara 3.0-5.0
                image: imageUrl,
            };
            dispatch(addProduct(newCourse));
            toast.success("Produk baru telah ditambahkan!");
        }

        navigate('/admin/products/manage');
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

                {/* --- Area Upload Gambar --- */}
                <div>
                    <label className={labelClass}>Gambar Kursus</label>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${isDarkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
                            {imageFile ? (
                                <div className="text-center">
                                    <FileIcon />
                                    <p className="font-semibold text-green-500">{imageFile.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Klik lagi untuk mengganti file</p>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <UploadIcon />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klik untuk mengunggah</span> atau seret dan letakkan</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, atau WEBP (MAX. 800x400px)</p>
                                </div>
                            )}
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept="image/png, image/jpeg, image/webp" />
                        </label>
                    </div> 
                </div>

                <div>
                    <label htmlFor="desc" className={labelClass}>Deskripsi</label>
                    <textarea name="desc" id="desc" rows="5" value={formData.desc} onChange={handleChange} className={inputClass} required></textarea>
                </div>
   
                <div className="flex justify-end gap-4 pt-4 border-t dark:border-gray-700">
                    <button type="button" onClick={() => navigate('/admin/products/manage')} className={`px-6 py-2 rounded-lg font-semibold ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'}`}>
                        Batal
                    </button>
                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700">
                        {isEditMode ? 'Update Produk' : 'Simpan Produk'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;