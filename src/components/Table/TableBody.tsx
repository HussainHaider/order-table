import {useAppSelector} from 'app/hooks';
import {selectOrders} from "app/features/orders/orderSlice";

export const TableBody = () => {
  const data = useAppSelector(selectOrders);

  return (<tbody>
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
      </tbody>);
};

export default TableBody;
