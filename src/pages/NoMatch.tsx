import * as React from "react";
import { Link } from "react-router-dom";

import {HOME} from '../constants/urlConstant';

function NoMatch() {
    return (
      <div>
        <h2>It looks like you're lost...</h2>
        <p>
          <Link to={HOME}>Go to the home page</Link>
        </p>
      </div>
    );
}

export default NoMatch;