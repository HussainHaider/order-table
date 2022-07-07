import { configureStore, combineReducers, ThunkAction, Action, PreloadedState } from "@reduxjs/toolkit";
import orderReducer from "./features/orders/orderSlice";


// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  orders: orderReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
