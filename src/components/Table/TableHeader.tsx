import React from "react";


export const TableHeader = () => {
    return (<thead>
        <tr>
          <th>Order #</th>
          <th>Order status</th>
          <th>Customer</th>
          <th>Purchase date</th>
          <th>Fulfill date</th>
          <th>Invoice status</th>
          <th>Amount</th>
        </tr>
    </thead>);
};
  
export default React.memo(TableHeader);
  