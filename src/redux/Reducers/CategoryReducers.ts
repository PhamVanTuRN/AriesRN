import { getCategoryAPI } from '@/Services/PoductApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category } from '@/Types/Product';
import { refreshAccToken } from '@/Services/AuthenticatorApi';
export const fetchAccountAsync = createAsyncThunk(
  'getCategory',
  // cho phep truyen vao 1 TypeAcction ""
  async (payload: any, { rejectWithValue }) => {
    const response: any = await getCategoryAPI(payload.accessToken);
    const { data, status, ok } = response;
    console.log('getAccount response', response);
    if (ok && status === 200) {
      console.log('listAccount', data);
      return data;
    }
    if (data.message === 'token Expired') {
      console.log('payload', payload);
      console.log('payload.refreshToken', payload.refreshToken);
      const test: any = await refreshAccToken(payload.refreshToken);
      console.log('listAccount het han qua test', test);
      console.log('test.data.accessToken', test.data.accessToken)
      const accessToken = test.data.accessToken
      const response: any = await getCategoryAPI(accessToken);
      console.log('response test.data.accessToken listAccount', response.data)
      return response.data;
    }
    else {
      console.log('response getCategory failed', response);
      return rejectWithValue(data);
    }
  },
);
type CategoryState = {
  category: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
const initialCategoryState: CategoryState = {
  category: [],
  status: 'idle',
  error: null,
};
export const listAccountSlice = createSlice({
  name: 'product',
  initialState: initialCategoryState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchAccountAsync.pending,
      (currentState: CategoryState) => {
        currentState.status = 'loading';
      },
    );
    builder.addCase(
      fetchAccountAsync.fulfilled,
      (currentState: CategoryState, action: any) => {
        currentState.status = 'succeeded';
        currentState.category = action.payload;
      },
    );
    builder.addCase(
      fetchAccountAsync.rejected,
      (currentState: any, action: any) => {
        currentState.status = 'failed';
        currentState.error = action.error.message || null;
      },
    );
  },
});

export default listAccountSlice.reducer;
