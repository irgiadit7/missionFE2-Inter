import { createSlice } from '@reduxjs/toolkit';
import { courseData } from '../../data/courses';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: courseData, // Muat data awal dari file data kita
    },
    reducers: {
        addProduct: (state, action) => {
            state.data.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.data.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.data = state.data.filter(p => p.id !== action.payload.id);
        },
    },
});

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;