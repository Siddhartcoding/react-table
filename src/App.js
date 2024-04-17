import React, { useState, useMemo } from "react";
import "./App.css";
import { colleges } from "./data/data";
import Table from "./Table/Table";

// Main component
function App() {
  const [data, setData] = useState(colleges);

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        Header: "CD Rank",
        accessor: "CD Rank",
      },
      {
        Header: "College Name",
        accessor: "colleges",
      },
      {
        Header: "Course Fees",
        accessor: "courseFees",
      },
      {
        Header: "Placement",
        accessor: "placementAveragePackages",
      },
      {
        Header: "User Reviews",
        accessor: "userReviews",
      },
      {
        Header: "Ranking",
        accessor: "ranking",
      },
    ],
    []
  );

  return (
    <div className="table-container">
      <Table columns={columns} data={data} setData={setData} />
    </div>
  );
}

export default App;
