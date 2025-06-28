import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curso: []
}

const cursoSlice = createSlice(
    {
        name: "DatosCursosRedux",
        initialState,
        reducers: {
            setCurso: (state, action) => {
                state.curso = action.payload
            }
        }
    }
)

export const { setCurso } = cursoSlice.actions
export default cursoSlice.reducer