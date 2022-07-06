import { orders, Ordertype } from "data/data";

// A mock function to mimic making an async request for data
export function fetchOrders() {
  return new Promise<{ data: Ordertype[] }>((resolve) => {
    setTimeout(() => resolve({ data: orders }), 3000)
  });
}
