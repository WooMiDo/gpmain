import { Type4 } from "../components/DataGridComponent";
import { DynamicChart, NumberScoreCard } from "../components/ChartComponent";
import SummaryFilter from "../components/SummaryFilter";

const Header = () => {
  return (
    <div>
      <h1>대시보드</h1>
    </div>
  );
};

const LoggerPageView = () => {
  const colors = [
    "#4180ec",
    "#4fd9bc",
    "#494e5f",
    "#30c7e9",
    "#6269e9",
    "#00aaaa",
    "#42c360",
    "#b5cf14",
    "#eaab2f",
    "#bababa",
  ].slice(0, 10);

  //원하는 컴포넌트 출력
  return (
    <div style={{ margin: "50px" }}>
      <Header />
      <div style={{ margin: "100px 100px" }}>
        <DynamicChart colors={colors} />
      </div>
      <div style={{ marginBottom: "7px" }}>
        <SummaryFilter />
      </div>

      <Type4 />
    </div>
  );
};

export default LoggerPageView;
