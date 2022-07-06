import React from "react";
import {useAppDispatch} from 'app/hooks';
import {useAppSelector} from 'app/hooks';
import {getOrdersAsync} from "app/features/orders/orderSlice";
import {isLoading} from "app/features/orders/orderSlice";

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ReactLoading from 'react-loading';

import "styles/table.css";


export const Table = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(isLoading);

  React.useEffect(()=>{
    dispatch(getOrdersAsync());
  }, []);

  return (<>
  {
    loading ? (<ReactLoading type='balls' />) : (  <table>
      <TableHeader />
      <TableBody />
    </table>)
  }
  </>);
};

export default Table
