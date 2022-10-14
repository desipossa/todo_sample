import { configureStore, createSlice } from "@reduxjs/toolkit";



const todoItm = createSlice({
    name: 'todoItm',
    initialState: {},
    reducers: {
        inputs: (state, action) => {
            return { ...action.payload }
        },
    }
});

export const { inputs } = todoItm.actions;


const todoList = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        todoCreate: (state, action) => state.concat(action.payload),
        todoDelete: (state, action) => state.filter(it => it.id !== action.payload),
        todoModify: (state, action) => state.map(it => it.id === action.payload.id ? { ...action.payload } : it),
    }

});

export const { todoCreate, todoDelete, todoModify } = todoList.actions;



const store = configureStore({
    reducer: {
        todoItm: todoItm.reducer,
        todoList: todoList.reducer
    }
})


export default store;
