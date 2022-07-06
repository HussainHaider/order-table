import React from "react";
import {useAppDispatch} from 'app/hooks';
import {getOrdersAsync} from "app/features/orders/orderSlice";

import TableHeader from './TableHeader';
import TableBody from './TableBody';

import "styles/table.css";


export const Table = () => {
  const dispatch = useAppDispatch();

  React.useEffect(()=>{
    dispatch(getOrdersAsync());
  }, []);

  return (<table>
    <TableHeader />
    <TableBody />
  </table>);
};

export default Table
