import { configureStore } from "@reduxjs/toolkit";
import CartSlide from "./CartSlide";

const Store = configureStore({
    reducer: {
        cart: CartSlide,
    }
});

export default Store;