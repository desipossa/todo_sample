import { configureStore, createSlice } from "@reduxjs/toolkit";

const cnum = createSlice({
    name: 'input',
    initialState: 1,
    reducers: {
        up: state => {
            return state += 1;
        },
    }
});


export const { up } = cnum.actions;


const todoItm = createSlice({
    name: 'todoItm',
    initialState: {},
    reducers: {
        inputs: (state, action) => {
            return { ...state, ...action.payload }
        },
    }

});

export const { inputs } = todoItm.actions;


const todoList = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        todoCreate: (state, action) => {
            console.log(...action.payload)
            //action.payload.tit = "";
            return [...state, ...action.payload]
        },
        todoDelete: (state, action) => {
            return (
                [...state.filter(it => it.id !== action.payload)]
            )
        }
    }

});

export const { todoCreate, todoDelete } = todoList.actions;



const store = configureStore({
    reducer: {
        cnum: cnum.reducer,
        todoItm: todoItm.reducer,
        todoList: todoList.reducer
    }
})


export default store;
