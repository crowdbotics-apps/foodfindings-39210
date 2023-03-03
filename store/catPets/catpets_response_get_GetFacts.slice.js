import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const catpets_get_fact_read = createAsyncThunk(
  "catpets_response_get_GetFacts/catpets_get_fact_read",
  async payload => {
    const response = await apiService.catpets_get_fact_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const catpets_response_get_GetFactsSlice = createSlice({
  name: "catpets_response_get_GetFacts",
  initialState,
  reducers: {},
  extraReducers: {
    [catpets_get_fact_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [catpets_get_fact_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [catpets_get_fact_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  catpets_get_fact_read,
  slice: catpets_response_get_GetFactsSlice
}
