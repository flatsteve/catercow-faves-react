import { useState, useEffect } from "react";

import api from "./services/api";

import "./App.css";

function App() {
  /*
  api is a wrapper around axios that sets the headers and base url so you only need to define the path and http method
  /packages will return array of packages for user
  /favorites will return array of the users favorite packages (use package_id in the records) - try to transform to a nicer structure to suit easy lookup 
  /favorites accepts standard HTTP methods for adding and removing rows - url = /favorites?package_id=eq.${package_id}
  */

  return (
    <div>
      <div className="header">
        <img src="/catercow-logo.svg" className="logo" />
        <h4>Package Results</h4>
      </div>

      <div className="packages">
        {/* 
          List of packages indicating which are favorites
          &#128525; = Love heart eyes emoji
          &#129293; = Grey heart emoji 
        */}
      </div>
    </div>
  );
}

export default App;
