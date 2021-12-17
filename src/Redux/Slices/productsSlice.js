import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
      const response = await fetch('http://localhost:5000/products').then(res=> res.json())
      return response
    }
)

const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        user: {},
        productInputAmount: 1,
        cartItems: [],
        status: 'idle'
    },
    reducers: {
        increaseInputValue: (state) => {
            state.productInputAmount += 1;
        },
        decreaseInputValue: (state) => {
            if(state.productInputAmount === 1){
                return;
            }
            state.productInputAmount -= 1;
        },
        addToCart: (state, {payload}) => {
                state.cartItems.push(payload);
        },
        removeFromCart: (state, {payload}) => {
            state.cartItems = state.cartItems.filter(product => product._id !== payload._id);
        },
        refreshCart: (state) => {
            state.cartItems = [];
        },
        storeUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.products = action.payload;
          state.status = 'success'
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending';
        })
    },
    
});

export const { increaseInputValue, decreaseInputValue, addToCart, removeFromCart, storeUser, refreshCart } = productsSlice.actions;

export default productsSlice.reducer;