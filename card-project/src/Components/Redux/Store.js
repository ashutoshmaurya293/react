import {configureStore} from "@reduxjs/toolkit"
import { cartReducer } from "./Reducer";

const store = configureStore({
    reducer: {
        cart:cartReducer,
    },
})
export default store;