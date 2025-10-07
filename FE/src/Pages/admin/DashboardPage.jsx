import React from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';
import ProductList from '../../components/Fragments/Admin/ProductList';

const DashboardPage = () => {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Manajemen Produk</h1>
            <p className="mb-8 text-gray-500 dark:text-gray-400">
                Di sini Anda dapat mengelola semua kursus yang tersedia di platform. Gunakan tombol di bawah untuk menambah, mengubah, atau menghapus data kursus.
            </p>
            <ProductList />
        </AdminLayout>
    );
};

export default DashboardPage;