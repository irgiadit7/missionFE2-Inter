import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { courseData as initialCourseData } from '../../../data/courses';
import { DarkMode } from '../../../context/DarkMode';

const ProductList = () => {
    const [courses, setCourses] = useState(initialCourseData);
    const { isDarkMode } = useContext(DarkMode);

    const handleDelete = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus kursus ini?')) {
            // Logika untuk menghapus (saat ini hanya di state)
            setCourses(courses.filter(course => course.id !== id));
            // Nanti, ini akan menjadi panggilan API ke backend
        }
    };

    return (
        <div className={`rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Daftar Kursus</h2>
                <Link
                    to="/admin/products/new"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                    + Tambah Produk
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className={`border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                        <tr>
                            <th className="p-4">ID</th>
                            <th className="p-4">Judul</th>
                            <th className="p-4">Kategori</th>
                            <th className="p-4">Harga</th>
                            <th className="p-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <td className="p-4 font-semibold">{course.id}</td>
                                <td className="p-4">{course.title}</td>
                                <td className="p-4 capitalize">{course.category}</td>
                                <td className="p-4">Rp {course.price}k</td>
                                <td className="p-4 flex gap-2">
                                    <button className="text-blue-500 hover:underline">Ubah</button>
                                    <button onClick={() => handleDelete(course.id)} className="text-red-500 hover:underline">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;