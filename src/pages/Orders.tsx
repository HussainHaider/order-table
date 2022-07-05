import {useAppDispatch, useAppSelector} from '../app/hooks';
import { filterOrders, selectOrders } from "../app/features/orders/orderSlice";
import "../styles/orders.css";


export const Orders = () => {
  const data = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();
  return (
    <div>
      <main>
        <input
          placeholder="Search by Order Id, Customer, Buyer..."
          onChange={(e) => {
            dispatch(filterOrders(e.target.value || ""));
          }}
        />
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Order status</th>
              <th>Customer</th>
              <th>Purchase date</th>
              <th>Fulfill date</th>
              <th>Invoice status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.orderID}>
                <td>{order.orderID}</td>
                <td>{order.orderStatus}</td>
                <td className='customer-name'>
                  <span>{order.companyName}</span>
                  <span>{order.customerName}</span>
                </td>
                <td>{order.purDate}</td>
                <td>{order.fulfillDate}</td>
                <td>{order.invoiceStatus}</td>
                <td className="curreny">{order.currency} {order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Orders
