import {useAppDispatch} from 'app/hooks';
import {filterOrders} from "app/features/orders/orderSlice";
import "styles/input.css";


export const InputField = () => {
  const dispatch = useAppDispatch();
  return (<input
        placeholder="Search by Order Id, Customer, Buyer..."
        data-testid='search-box'
        onChange={(e) => {
            dispatch(filterOrders(e.target.value || ""));
        }}
    />
  );
};

export default InputField
