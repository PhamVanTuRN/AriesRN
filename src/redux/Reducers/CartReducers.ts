import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductInCart} from '@/Types/Cart';
export const addProductToCartAsync = createAsyncThunk(
  'addProductToCart',
  // cho phep truyen vao 1 TypeAcction ""
  async () => {
    
  },
);
type CartState = {
  listProductInCart: ProductInCart[];
};
const initialCartState: CartState = {
  listProductInCart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      console.log(
        'state.listProductInCart:',
        JSON.stringify(state.listProductInCart),
      );
      console.log('state.listProductInCart:', action.payload.productRepresent);
      const date = new Date();
      let productInCartObject = {
        id: date.getTime().toString() + state.listProductInCart.length,
        name: action.payload.name,
        productRepresent: action.payload.productRepresent,
        color: '',
        size: '',
      };
      state.listProductInCart = [
        ...state.listProductInCart,
        productInCartObject,
      ];
    },
  },
});
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
