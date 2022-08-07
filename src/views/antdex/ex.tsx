import React, { FormEvent, useState, useContext } from "react";
import { Typography, Slider, Row, Col, Pagination, List, Select } from "antd";
import "./index.less";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import Ex2 from "./ex2";
import ThemeContext from "../../context/ThemeContext";
const { Paragraph, Text } = Typography;

export const Andt = () => {
  const onChangeHandlel = (evt) => console.log(evt);
  const tableData = ["hhh", "xxx", "ggg"];
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  console.log("location", location);

  const handleSelectchange = (val) => {
    console.log(val, typeof val);
  };
  let themeContext = useContext(ThemeContext);
  return (
    <>
      <Ex2>
        <p style={{ color: themeContext.color }} onClick={themeContext.change}>
          i am children,theme is {themeContext.color}
        </p>
      </Ex2>
      <Select allowClear onChange={handleSelectchange}>
        <Select.Option value={undefined}>default</Select.Option>
        <Select.Option value={1}>1</Select.Option>
      </Select>
      <ContainerBox>
        <p className="hhh">jhhhh i m pink</p>
        <IconSm></IconSm>
        <Row gutter={{ xs: 20, md: 30, lg: 50 }}>
          <ColBlock span={8}>
            <div className="item">1</div>
          </ColBlock>
          <ColBlock span={8}>
            <div className="item">2</div>
          </ColBlock>
          <ColBlock span={8}>
            <div className="item">3</div>
          </ColBlock>
        </Row>
        <Row>
          <ColBlock span={8}>
            <div className="item">1</div>
          </ColBlock>
          <ColBlock span={8}>
            <div className="item">2</div>
          </ColBlock>
          <ColBlock span={8}>
            <div className="item">3</div>
          </ColBlock>
        </Row>
        <Pagination defaultCurrent={1} total={50} onChange={onChangeHandlel} />
      </ContainerBox>
      <List
        header={<div>i Header</div>}
        dataSource={tableData}
        bordered
        loading={loading}
        renderItem={(item) => {
          return (
            <List.Item>
              <Typography.Text type="danger">{item}</Typography.Text>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

//css in js（emotion styled-compinent）
const ContainerBox = styled.header`
  border: 1px solid red;
  padding: 20px;
  .hhh {
    color: pink;
  }
`;
const IconSm = styled.div`
  width: 40px;
  height: 40px;
  background: red;
  margin-bottom: 20px;
`;
const ColBlock = styled(Col)`
  color: red;
`;
