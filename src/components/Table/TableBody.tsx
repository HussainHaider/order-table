import {useAppSelector} from 'app/hooks';
import {selectOrders, isLoading } from "app/features/orders/orderSlice";


export const TableBody = () => {
  const data = useAppSelector(selectOrders);
  const loading = useAppSelector(isLoading);

  return (<tbody>
    {
      loading ? (
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Loading...</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      ) : (<>
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
      </>)
    }
    </tbody>
  );
};

export default TableBody;
