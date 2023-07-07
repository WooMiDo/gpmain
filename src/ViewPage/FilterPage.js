import React from "react";
import { Space, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { isEqual } from "lodash";
import { Adfilter, Mdfilter } from "../components/filter.js";
import { Dshow } from "../components/dataShow.js";
import { CustomDateRangePicker } from "../components/calendar.js";
import { FilterTagAdder } from "../components/filterTagAdder.js";

const { Text } = Typography;

const FilterPage = () => {
  const dispop = 10;
  const [adList, setAdList] = useState([]);
  const [mdList, setMdList] = useState([]);

  const adChange = (value) => {
    const AdfilteredValue = value.filter((option) => option !== "selectAll");
    //제거하지 말것 selectAll 삭제 후 setAdList에 추가할 때 무한 루프에 들어감.
    if (!isEqual(AdfilteredValue, adList)) {
      setAdList(AdfilteredValue);
    }
  };
  const mdChange = (value) => {
    const MdfilteredValue = value.filter((option) => option !== "selectAll");
    //제거하지 말것 selectAll 삭제 후 setAdList에 추가할 때 무한 루프에 들어감.
    if (!isEqual(MdfilteredValue, mdList)) {
      setMdList(MdfilteredValue);
    }
  };

  return (
    <>
      <div style={{ border: "1px solid #e8ecee", padding: "25px" }}>
        <Space size="large">
          <Text strong level={4}>
            대상 선택&nbsp;
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </Text>

          <Adfilter onValueChange={adChange} />
          <Mdfilter onValueChange={mdChange} />
          <Text strong level={4}>
            기간 선택&nbsp;
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </Text>
          <CustomDateRangePicker />
        </Space>
      </div>
      <div>
        <br />
        <h4 className="selected-analysis-targer">선택한 분석 대상</h4>
        <div className="selected-analysis-targer-div">
          <span className="selected-analysis-targer-span">광고주 </span>
          {adList.length <= dispop ? (
            <p className="selected-analysis-targer-p">{adList.join(", ")}</p>
          ) : (
            <>
              <p>{`${adList.slice(0, dispop).join(", ")} 외 ${
                adList.length - dispop
              }개`}</p>
            </>
          )}
          <span className="selected-analysis-targer-span">매체 </span>
          {mdList.length <= dispop ? (
            <p className="selected-analysis-targer-p">{mdList.join(", ")}</p>
          ) : (
            <>
              <p>{`${mdList.slice(0, dispop).join(", ")} 외 ${
                mdList.length - dispop
              }개`}</p>
            </>
          )}
        </div>
        <div className="selectedDateDescription">
          <p>
            <span style={{ fontSize: "20px" }}>• </span>
            <strong>비교기간</strong>은 조회한 날짜를 기준으로, 동일한 직전
            기간입니다.
          </p>
          <p>
            (예시. 조회기간: 2021-11-01~2021-11-07(7일) → 비교기간:
            2021-10-25~2021-10-31(7일))
          </p>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
