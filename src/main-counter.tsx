import React from "react";
import ReactDOM from "react-dom"
import './index.css'
import './App.css'
import { createStore, Action, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import { createAction, createReducer } from "@reduxjs/toolkit"
import thunk from "redux-thunk"

export interface AppState {
    count: number
}

export const initialState: AppState = {
    count: 0
}

enum ActionTypes {
    Increment = '[COUNTER] Incr',
    Decrement = '[COUNTER] Decr',
    Zero = '[COUNTER] Zero'
}


const ActionIncrement = createAction<number | undefined>(ActionTypes.Increment)
const ActionDecrement = createAction<number | undefined>(ActionTypes.Decrement)
const ActionZero = createAction<number | undefined>(ActionTypes.Zero)

const CounterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ActionIncrement, (state, action) => {
            const value = action.payload ? action.payload: 0
            return {
                ...state,
                count: state.count + value
            }
        })
        .addCase(ActionDecrement, (state, action) => {
            const value = action.payload ? action.payload : 0
            return {
                ...state,
                count: state.count - value
            }
        })
        .addCase(ActionZero, (state, action) => {
            return {
                ...state,
                count: 0
            }
        })
        .addDefaultCase((state, action) => {
            return state
        })
})

const store = createStore(CounterReducer, applyMiddleware(thunk))

const App = () => {
    return (
        <div className="App">
            <div>
                {JSON.stringify(store.getState())}
            </div>
            <div>
                <button onClick={() => store.dispatch(ActionIncrement(1))}>+</button>
                <button onClick={() => store.dispatch(ActionDecrement(1))}>-</button>
                <button onClick={() => store.dispatch(ActionZero())}>0</button>
            </div>
        </div>
    )
}

const rootElement = document.getElementById('root')
const renderApp = () => {
    ReactDOM.render(
        // <React.StrictMode>
        //     <App />, 
        // </React.StrictMode>,
        <Provider store={store}>
            <App />
        </Provider>,
    rootElement)
}

renderApp()
store.subscribe(renderApp)