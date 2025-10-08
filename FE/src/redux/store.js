import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import myCoursesReducer from "./slices/myCoursesSlice"; // <-- 1. IMPORT SLICE BARU

const store = configureStore ({
    reducer: { 
        cart: cartReducer,
        products: productsReducer,
        myCourses: myCoursesReducer, // <-- 2. TAMBAHKAN REDUCER BARU
    },
});

// ... sisa kode tidak berubah

export default store;