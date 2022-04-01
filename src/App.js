import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
