import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    session:{
        value:1500 ,
        runningValue:1500
    },
    pause:{
        value:300 ,
        runningValue:300
    },
    isPlaying : false ,
    intervalID:undefined ,
    cycles:0,
    displayValue:{
        value:1500 ,
        heading:"Work"
    }
}

const chrono = createSlice({
    name : "chrono",
    initialState ,
    reducers : {
        updateChronoValue : (state , action) => {

            const chosenState = state[action.payload.type]
            if(chosenState.value + action.payload.value === 0) return

            if(action.payload.type ==="session"){
                if(!state.isPlaying) {
                    chosenState.value = chosenState.value + action.payload.value
                    chosenState.runningValue = chosenState.runningValue + action.payload.value
                    state.displayValue.value = chosenState.runningValue 
                }
                else {
                    chosenState.value = chosenState.value + action.payload.value
                }
            }  
            else if(action.payload.type === "pause"){
                chosenState.value = chosenState.value + action.payload.value
            }
        },

        tick :(state, action) => {
            if(state.session.runningValue > 0) {
                state.session.runningValue -- 
                state.displayValue.value = state.session.runningValue
                state.displayValue.heading = "Work"
            }
            else if(state.pause.runningValue > 0) {
                state.pause.runningValue --
                state.displayValue.value = state.pause.runningValue
                state.displayValue.heading = "Pause"
            }
            else {
                state.cycles ++
                state.session.runningValue = state.session.value -1
                state.displayValue.value = state.session.value - 1 
                state.displayValue.heading = "Work"
                state.pause.runningValue = state.pause.value
            }
        },
        setUpChrono : (state , action) => {
            state.intervalID = action.payload
            state.isPlaying = true
        },
        resetChrono : (state , action) => {
            clearInterval(state.intervalID)
            state.isPlaying = false
            state.session.runningValue = state.session.value
            state.pause.runningValue = state.pause.value
            state.displayValue.value = state.session.runningValue
            state.cycles = 0
        }
    }
});

export function startChrono(){
    return function(dispatch , getState){
        const intervalID = setInterval(() => {
            dispatch(tick())
        }, 1000)

        dispatch(setUpChrono(intervalID))
        dispatch(tick())
    }
}

export const { updateChronoValue , tick , setUpChrono , resetChrono } = chrono.actions
export default chrono.reducer
