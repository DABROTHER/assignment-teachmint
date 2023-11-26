import { createSlice } from '@reduxjs/toolkit';
import { currentTimeZone } from 'utils/helper';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    selectedContry: currentTimeZone(),
  },
  reducers: {
    setSelectedContry: (state, action) => {
      state.selectedContry = action.payload;
    },
  },
});

export const { setSelectedContry } = postSlice.actions;
export default postSlice.reducer;
