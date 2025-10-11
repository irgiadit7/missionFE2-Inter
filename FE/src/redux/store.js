import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import myCoursesReducer from "./slices/myCoursesSlice"; 

const store = configureStore ({
    reducer: { 
        cart: cartReducer,
        products: productsReducer,
        myCourses: myCoursesReducer, 
    },
});


export default store;