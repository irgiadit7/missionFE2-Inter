import { createSlice } from "@reduxjs/toolkit";

// Helper function untuk menyimpan state keranjang ke localStorage
const updateLocalStorage = (cart) => {
    try {
        const serializedState = JSON.stringify(cart);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.warn("Could not save cart to local storage", e);
    }
};

const cartSlice = createSlice({
    name: "cart",
    // Muat data awal dari localStorage jika ada, jika tidak, mulai dengan array kosong
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    // Reducers: fungsi-fungsi yang mendefinisikan bagaimana state dapat berubah
    reducers: {
        // Menambah item ke keranjang
        addToCart(state, action) {
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                // Jika item sudah ada, tambah jumlahnya
                itemInCart.qty++;
            } else {
                // Jika item baru, tambahkan ke keranjang dengan jumlah 1
                state.data.push({ ...action.payload, qty: 1 });
            }
            // Simpan perubahan ke localStorage
            updateLocalStorage(state.data);
        },
        // Menghapus item dari keranjang berdasarkan ID
        removeFromCart(state, action) {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
            updateLocalStorage(state.data);
        },
        // Menambah jumlah item yang sudah ada di keranjang
        incrementQuantity(state, action) {
            const item = state.data.find((item) => item.id === action.payload.id);
            if (item) {
                item.qty++;
            }
            updateLocalStorage(state.data);
        },
        // Mengurangi jumlah item
        decrementQuantity(state, action) {
            const item = state.data.find((item) => item.id === action.payload.id);
            if (item && item.qty > 1) {
                // Kurangi jumlah jika lebih dari 1
                item.qty--;
            } else {
                // Jika jumlah 1, hapus item dari keranjang
                state.data = state.data.filter((item) => item.id !== action.payload.id);
            }
            updateLocalStorage(state.data);
        },
        // Mengosongkan seluruh keranjang (setelah checkout)
        clearCart(state) {
            state.data = [];
            updateLocalStorage(state.data);
        },
    },
});

// Ekspor semua aksi agar bisa digunakan di komponen lain
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
// Ekspor reducer untuk store
export default cartSlice.reducer;