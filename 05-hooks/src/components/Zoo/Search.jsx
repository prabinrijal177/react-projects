/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { memo } from "react";

 function Search({ onChange: handleChange }) {
    console.log('Search rerendered');
    return (
      <div>
        <input type="text" onChange={(e) => handleChange(e.target.value)} />
      </div>
    );
  }
  export default memo(Search);
