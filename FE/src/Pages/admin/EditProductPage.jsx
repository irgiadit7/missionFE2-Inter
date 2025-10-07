import React from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../components/Layouts/AdminLayout';
import ProductForm from '../../components/Fragments/Admin/ProductForm';
import { courseData } from '../../data/courses';

const EditProductPage = () => {
    const { id } = useParams();
    const productToEdit = courseData.find(p => p.id === parseInt(id));

    if (!productToEdit) {
        return (
            <AdminLayout>
                <h1 className="text-2xl font-bold">Produk tidak ditemukan!</h1>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Edit Produk</h1>
            <ProductForm isEditMode={true} productToEdit={productToEdit} />
        </AdminLayout>
    );
};

export default EditProductPage;