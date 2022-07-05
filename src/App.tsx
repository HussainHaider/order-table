import { useRoutes, RouteObject } from "react-router-dom";

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Orders from './pages/Orders';

import "./App.css";
import * as url from './constants/urlConstant';


function App() {
  const routes:RouteObject[] = [
    {
        path: url.HOME,
        element: <Home />
    },
    {
        path: url.ORDERS,
        element: <Orders />
    },
    { 
        path: "*", 
        element: <NoMatch /> 
    },
  ]
  let element = useRoutes(routes);
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
