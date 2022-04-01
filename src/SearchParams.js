import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState(""); // order of useState matters // dont put useState under any condition // dont put it inside loops

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
