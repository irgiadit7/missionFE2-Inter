import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/slices/productsSlice';
import { DarkMode } from '../../../context/DarkMode';
import toast from 'react-hot-toast';

const ProductList = () => {
    const courses = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(DarkMode);

    const handleDelete = (id, title) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus kursus ini?')) {
            dispatch(deleteProduct({ id: id }));
            toast.success(`'${title}' berhasil dihapus.`);
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
                                    <Link to={`/admin/products/edit/${course.id}`} className="text-blue-500 hover:underline">
                                        Ubah
                                    </Link>
                                    <button onClick={() => handleDelete(course.id, course.title)} className="text-red-500 hover:underline">
                                        Hapus
                                    </button>
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