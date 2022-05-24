import React, { FormEvent, useState } from "react";
import { Typography, Slider, Row, Col, Pagination, List } from "antd";
import "./index.less";
import styled from "@emotion/styled";

const { Paragraph, Text } = Typography;

export const Andt = () => {
  const onChangeHandlel = (evt) => console.log(evt);
  const tableData = ["hhh", "xxx", "ggg"];
  const [loading, setLoading] = useState(false);
  return (
    <>
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
