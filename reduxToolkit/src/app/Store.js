import {configureStore} from '@reduxjs/toolkit';
import TodoSlice from '../feture/Todo/TodoSlice';

export const store = configureStore({
    reducer:TodoSlice
})