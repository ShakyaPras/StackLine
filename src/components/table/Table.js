import "./Table.css";
import { useSelector } from "react-redux";
import downArrow from "../../assets/images/chevron-down-solid.svg";
import { useState } from "react";

const clickHandlerSort = (type, salesData, setSalesData) => {
  if (type === "weekEnding") {
    setSalesData([
      ...salesData.sort((a, b) => new Date(a[type]) - new Date(b[type])),
    ]);
  } else {
    setSalesData([...salesData.sort((a, b) => a[type] - b[type])]);
  }
};

const Table = () => {
  let { sales } = useSelector((state) => state.data);
  const [salesData, setSalesData] = useState(sales);
  const arrowImg = (
    <img className="down-arrow" src={downArrow} alt="down arrow"></img>
  );

  const tableBody = salesData.map((item) => (
    <tr>
      <td className="table-data">{item.weekEnding}</td>
      <td className="table-data">{item.retailSales}</td>
      <td className="table-data">{item.wholesaleSales}</td>
      <td className="table-data">{item.unitsSold}</td>
      <td className="table-data">{item.retailerMargin}</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            className="table-heading"
            onClick={() =>
              clickHandlerSort("weekEnding", salesData, setSalesData)
            }
          >
            WEEK ENDING {arrowImg}
          </th>
          <th
            className="table-heading"
            onClick={() =>
              clickHandlerSort("retailSales", salesData, setSalesData)
            }
          >
            RETAIL SALES {arrowImg}
          </th>
          <th
            className="table-heading"
            onClick={() =>
              clickHandlerSort("wholesaleSales", salesData, setSalesData)
            }
          >
            WHOLESALE SALES {arrowImg}
          </th>
          <th
            className="table-heading"
            onClick={() =>
              clickHandlerSort("unitsSold", salesData, setSalesData)
            }
          >
            UNITS SOLD {arrowImg}
          </th>
          <th
            className="table-heading"
            onClick={() =>
              clickHandlerSort("retailerMargin", salesData, setSalesData)
            }
          >
            RETAILER MARGIN {arrowImg}
          </th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

export default Table;
