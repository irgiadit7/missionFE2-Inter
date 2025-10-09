// src/components/Fragments/Admin/ProductList.jsx

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/slices/productsSlice';
import { DarkMode } from '../../../context/DarkMode';
import toast from 'react-hot-toast';

// --- Icons for actions and search ---
const EditIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z"></path></svg>;
const DeleteIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>;
const SearchIcon = () => <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;

const ProductList = () => {
    const allCourses = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(DarkMode);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (id, title) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus kursus "${title}"?`)) {
            dispatch(deleteProduct({ id: id }));
            toast.success(`'${title}' berhasil dihapus.`);
        }
    };
    
    // Logika untuk memfilter kursus berdasarkan pencarian
    const filteredCourses = allCourses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getCategoryClass = (category) => {
        switch (category) {
            case 'bisnis': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'pemasaran': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
            case 'desain': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
            case 'pengembangan-diri': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className={`rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                {/* --- Kolom Pencarian --- */}
                <div className="relative w-full sm:w-auto">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon />
                    </span>
                    <input 
                        type="text"
                        placeholder="Cari kursus..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full sm:w-80 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                    />
                </div>
                <Link
                    to="/admin/products/new"
                    className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                    + Tambah Produk
                </Link>
            </div>
            
            {/* --- Tabel Modern --- */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left table-auto">
                    <thead className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <tr>
                            <th className="p-4 w-[50%]">Judul</th>
                            <th className="p-4">Kategori</th>
                            <th className="p-4">Harga</th>
                            <th className="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCourses.map(course => (
                            <tr key={course.id} className={`border-b transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'}`}>
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <img src={course.image} alt={course.title} className="w-16 h-10 object-cover rounded-md" />
                                        <span className="font-semibold">{course.title}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${getCategoryClass(course.category)}`}>
                                        {course.category.replace('-', ' ')}
                                    </span>
                                </td>
                                <td className="p-4 font-semibold">Rp {course.price}k</td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link to={`/admin/products/edit/${course.id}`} className="p-2 text-blue-500 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors">
                                            <EditIcon />
                                        </Link>
                                        <button onClick={() => handleDelete(course.id, course.title)} className="p-2 text-red-500 rounded-full hover:bg-red-100 dark:hover:bg-gray-700 transition-colors">
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             {filteredCourses.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500">Kursus tidak ditemukan.</p>
                </div>
            )}
        </div>
    );
};

export default ProductList;