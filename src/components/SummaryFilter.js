import { useEffect, useState } from "react";
import { Select, Transfer } from "antd";
import { NumberScoreCard } from "./ChartComponent";
import { VscTriangleDown } from "react-icons/vsc";
import { SettingOutlined } from "@ant-design/icons";

const TransferFilter = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];

    for (let i = 0; i < 10; i++) {
      const data = {
        key: i.toString(),
        title: `[베이직 이상]`,
        description: `name${i}`,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const handleChange = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };
  const renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );
    return {
      label: customLabel,
      value: item.description,
    };
  };

  return (
    <div className="TransferFilterDiv">
      <div className="CellEditTitle">충성도 셀편집</div>
      <div className="CellEditDesc">
        <span>요약 대시보드 항목선택 및 추가</span>
        <span>요약 대시보드 항목순서 설정</span>
      </div>
      <div className="TransferDiv">
        <Transfer
          dataSource={mockData}
          listStyle={{
            width: 300,
            height: 250,
          }}
          targetKeys={targetKeys}
          onChange={handleChange}
          render={renderItem}
          operations={["항목 추가", "항목 삭제"]}
        />
      </div>
      <div className="TransferBtn">
        <button>기본값 복원</button>
        &nbsp;
        <button>저장하기</button>
      </div>
    </div>
  );
};

const SummaryFilter = () => {
  const [selectedValue, setSelectedValue] = useState("1"); // 초기값 설정

  const handleChange = (value) => {
    setSelectedValue(value); // 값이 변경될 때마다 상태 업데이트
    console.log(value);
  };

  const PageViewFilter = () => (
    <div>
      요약 대시보드&nbsp;
      <Select
        className="pageViewFilterSelect"
        style={{ width: "100px" }}
        suffixIcon={<VscTriangleDown style={{ color: "black" }} />}
        size="small"
        value={selectedValue}
        onChange={handleChange}
        options={[
          {
            value: "1",
            label: "유입",
          },
          {
            value: "2",
            label: "검색/광고",
          },
          {
            value: "3",
            label: "충성도",
          },
          {
            value: "4",
            label: "성과",
          },
        ]}
      />
    </div>
  );

  return (
    <>
      <TransferFilter />
      <div
        className="pageViewFilterDiv"
        style={{ marginBottom: "5px", display: "flex" }}
      >
        <PageViewFilter />
        &nbsp;
        <button
          style={{ border: "#cccccc 1px solid", backgroundColor: "white" }}
        >
          <SettingOutlined />
        </button>
      </div>

      <div style={{ marginBottom: "5px" }}>
        <NumberScoreCard group={selectedValue} />
      </div>
    </>
  );
};

export default SummaryFilter;
