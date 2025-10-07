import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice"; // <-- 1. Impor slice produk yang baru dibuat

const store = configureStore ({
    // Daftarkan semua reducer di sini
    reducer: { 
        cart: cartReducer,
        products: productsReducer, // <-- 2. Tambahkan reducer produk ke dalam store
    },
});

console.log("oncreate store : ", store.getState());

store.subscribe (() => {
    console.log("STORE CHANGE : ", store.getState());
})  
    
export default store;