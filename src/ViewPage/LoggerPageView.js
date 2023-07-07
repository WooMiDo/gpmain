import { Type4 } from "../components/DataGridComponent";
import { DynamicChart, NumberScoreCard } from "../components/ChartComponent";
import SummaryFilter from "../components/SummaryFilter";

const Header = () => {
  return (
    <div>
      <h1>페이지뷰</h1>
      <div class="container_subtitle">
        방문자들이 조회한 웹페이지 총 횟수로, 중복을 포함하여 웹페이지 로딩시
        마다 카운트합니다.{" "}
      </div>
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
