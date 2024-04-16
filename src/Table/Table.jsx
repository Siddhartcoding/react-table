import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { BsDownload, BsFillPlayFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  // Render the table UI
  return (
    <>
      <input
        type="text"
        placeholder="Search by college name..."
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="input-field" // Added class for input field
      />
      <table {...getTableProps()} className="table">
        {" "}
        {/* Added class for table */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="even-row">
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {index === 1 ? (
                        <div style={{ color: "#2766c5c9", fontWeight: "bold" }}>
                          <div className="featured">
                            {row.original.featured && <FaStar />}
                          </div>
                          {cell.render("Cell")}

                          <div className="buttons">
                            <button style={{ background: "white" }}>
                              <BsFillPlayFill /> Apply Now
                            </button>
                            <button style={{ background: "white" }}>
                              <BsDownload /> Download Brochure
                            </button>
                          </div>
                        </div>
                      ) : index === 3 ? (
                        <div>
                          <div>
                            Placement Average Packages:{" "}
                            {row.original.placementAveragePackages}
                          </div>
                          <div>
                            Highest Package: {row.original.highestPackage}
                          </div>
                        </div>
                      ) : index === 6 ? (
                        <div>Ranking: {cell.value} in India</div>
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
