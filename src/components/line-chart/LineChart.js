import "./LineChart.css";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const LineChart = () => {
  let { sales } = useSelector((state) => state.data);
  const retailSalesData = sales.map((data) => data.retailSales);
  const labels = new Array(retailSalesData.length).fill("month");
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Retail Sales",
        data: retailSalesData,
        borderColor: "rgba(91, 178, 247, 255)",
      },
    ],
  };

  return (
    <div className="graph">
      <div className="graph-title">Retail Sales</div>
      <Line options={options} data={data} height={"60%"} />
      <div className="graph-months">
        {months.map((month) => (
          <div className="month">{month}</div>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
