import React from 'react';
import {Vortex} from "react-loader-spinner" // Import the Vortex component from the library

const Loader = () => {
  return (
    <div className="loader-wrapper"> {/* Adding a wrapper div */}
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
}

export default Loader;
