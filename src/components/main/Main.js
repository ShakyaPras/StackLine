import "./Main.css";
import Sidebar from "../sidebar/Sidebar";
import LineChart from "../line-chart/LineChart";
import Table from "../table/Table";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="content-main">
        <LineChart />
        <Table />
      </div>
    </div>
  );
};

export default Main;
