import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orders, Ordertype } from "../../../data/data";
import { RootState } from "../../store";

const initialState: Ordertype[] = orders;

export const counterSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    filterOrders: (_state, action: PayloadAction<string>) => {
      const filter = action.payload;
      const filteredOrders = orders.filter(
        (order: Ordertype) =>
          order.customerName!.toLowerCase().includes(filter) ||
          order.orderID!.toString().includes(filter)
      );
      return filteredOrders;
    },
  },
});

export const { filterOrders } = counterSlice.actions;

export const selectOrders = (state: RootState) => state.orders;

export default counterSlice.reducer;
