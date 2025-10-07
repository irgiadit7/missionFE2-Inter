import React from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';
import ProductForm from '../../components/Fragments/Admin/ProductForm';

const AddNewProductPage = () => {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Tambah Produk Baru</h1>
            <ProductForm />
        </AdminLayout>
    );
};

export default AddNewProductPage;