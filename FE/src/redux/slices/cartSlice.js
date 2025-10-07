import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart(state, action) {
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push({ ...action.payload, qty: 1 });
            }
            updateLocalStorage(state.data);
        },
        removeFromCart(state, action) {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
            updateLocalStorage(state.data);
        },
        incrementQuantity(state, action) {
            const item = state.data.find((item) => item.id === action.payload.id);
            if (item) {
                item.qty++;
            }
            updateLocalStorage(state.data);
        },
        decrementQuantity(state, action) {
            const item = state.data.find((item) => item.id === action.payload.id);
            if (item && item.qty > 1) {
                item.qty--;
            } else {
                // Jika qty 1 atau kurang, hapus item
                state.data = state.data.filter((item) => item.id !== action.payload.id);
            }
            updateLocalStorage(state.data);
        },
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;