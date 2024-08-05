//redux
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
//types
import { IUser, UserStateSchema } from '../../types/userTypes';

const initialState: UserStateSchema = {
  success: false,
  user: {
    name: '',
    email: '',
    phone: '',
    position: '',
    position_id: '',
    registration_timestamp: 0,
    photo: ''
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser>) {
      state.success = true;
      state.user = action.payload;
    }
  }
});

export const { actions: userActions, reducer: userReducer } = userSlice;
