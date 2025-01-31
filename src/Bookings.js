import React from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
      </div>
      <SearchResults results={FakeBookings} />
    </div>
  );
};

export default Bookings;
