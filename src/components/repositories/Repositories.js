import React, { useState } from "react";
import {
  CheckCircleOutlined,
  DownOutlined,
  GithubOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Container, Row } from "react-bootstrap";
import { RepositoriesData } from "../../configs/repositoriesData";
import SectionsTitle from "../sectionsTitle/SectionsTitle";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

import "./Repositories.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Repositories = ({ data: { viewer } }) => {
  const [rowExpand, setRowExpand] = useState(null);
  console.log(viewer.repositories);
  const onShowMoreBtnClick = (key) => {
    if (rowExpand === key) {
      setRowExpand(null);
    } else {
      setRowExpand(key);
    }
  };
  return (
    <Container>
      <Row className="repositories-container">
        <div className="component-width">
          <Row>
            <SectionsTitle
              title="Repositories"
              componentNumber={5}
              data={{
                repos: 10,
                lastUpdated: "2020/07/01 — 12:07:00",
              }}
            />
          </Row>
          <Row>
            <div className="repositories-content">
              <div className="repositories-table">
                <div className="repositories-table-header">
                  <div className="body-repo">
                    <div className="repo-num">#</div>
                    <div className="repo-name">Repositories</div>
                    <div className="repo-commits">Commits</div>
                    <div className="repo-team">Team</div>
                    <div className="repo-lang">Language</div>
                    <div className="repo-timeline">Timeline</div>
                  </div>
                  <div className="repo-arrow" />
                </div>
                <div>
                  {viewer.repositories.edges.map((val, index) => (
                    <div
                      key={index}
                      className={`repositories ${
                        rowExpand === index && "collapsed"
                      }`}
                    >
                      <div
                        className="header"
                        onClick={() => onShowMoreBtnClick(index)}
                      >
                        <div className="top">
                          <div className="body-repo">
                            <div className="repo-num">{index + 1}</div>
                            <div className="repo-name">
                              <GithubOutlined className="github-icon" />
                              <span className="name">{val.node.name}</span>
                              {/*{val.verify.isVerified ? <CheckCircleOutlined*/}
                              {/*    className="check-icon" /> :*/}
                              {/*  <i style={{ fontSize: "15px" }}*/}
                              {/*     className='bx bxs-pie-chart-alt' />}*/}
                            </div>
                            <div className="repo-commits">
                              <div className="commit-number">NaN</div>
                              <div className="commit-chart">
                                {/*<div className="line-holder">*/}
                                {/*  <div style={{ width: `${val.process}%` }}*/}
                                {/*       className="color-line primary" />*/}
                                {/*</div>*/}
                                {/*<div className="line-holder">*/}
                                {/*  <div*/}
                                {/*    style={{ width: `${val.currentProcess}%` }}*/}
                                {/*    className="color-line" />*/}
                                {/*</div>*/}
                              </div>
                            </div>
                            <div className="repo-team">null</div>
                            {/*<div className="repo-lang">*/}
                            {/*  <span title={val.language}>{val.language}</span>*/}
                            {/*  <span className="widget-circle" />*/}
                            {/*</div>*/}
                            <div className="repo-timeline">
                              <div
                                title="2019/08 – 2019/10"
                                className="chart-holder"
                              >
                                <ResponsiveContainer width="100%" height="100%">
                                  <AreaChart
                                    width={200}
                                    height={60}
                                    data={data}
                                    margin={{
                                      top: 5,
                                      right: 0,
                                      left: 0,
                                      bottom: 5,
                                    }}
                                  >
                                    <Area
                                      type="monotone"
                                      dataKey="uv"
                                      stroke="#00e7aa"
                                      fill="#00e7aa"
                                    />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                          <div className="repo-arrow">
                            {rowExpand === index ? (
                              <DownOutlined />
                            ) : (
                              <RightOutlined />
                            )}
                          </div>
                        </div>
                        <div className="bottom subrow">
                          <div className="repo-num" />
                          <div className="repo-desc">
                            {/*<div className="text">{val.desc}</div>*/}
                          </div>
                        </div>
                      </div>
                      {rowExpand === index && (
                        <div className="repo-content">
                          <div className="content">
                            <div className="repo-url">
                              <GithubOutlined className="github-icon" />
                              <span
                                style={{ fontWeight: "unset" }}
                                className="name"
                              >
                                {val.node.name}
                              </span>
                            </div>
                            <div className="repo-techs">
                              <div className="items">
                                {/*{*/}
                                {/*  val.techs.map((item, itemIndex) => (*/}
                                {/*    <div key={itemIndex} className="item"*/}
                                {/*         style={{ backgroundColor: (index % 2 !== 0) && '#f0f4f1' }}>*/}
                                {/*      <span style={{ fontWeight: "bold" }}*/}
                                {/*            title={item}>{item}</span>*/}
                                {/*      <span*/}
                                {/*        style={{*/}
                                {/*          height: "10px",*/}
                                {/*          width: "10px"*/}
                                {/*        }}*/}
                                {/*        className="widget-circle" />*/}
                                {/*    </div>*/}
                                {/*  ))*/}
                                {/*}*/}
                              </div>
                            </div>
                            <div className="repo-verify">
                              {/*{*/}
                              {/*  val.verify.isVerified ? (*/}
                              {/*    <>*/}
                              {/*      <CheckCircleOutlined*/}
                              {/*        className="check-icon" />*/}
                              {/*      <span*/}
                              {/*        className="verify-text">Verified</span>*/}
                              {/*    </>*/}
                              {/*  ) : (*/}
                              {/*    <>*/}
                              {/*      <i style={{ fontSize: "15px" }}*/}
                              {/*         className='bx bxs-pie-chart-alt' />*/}
                              {/*      <span*/}
                              {/*        className="verify-text">{val.verify.process}% verified by network. We verify repos by comparing commits submitted by coworkers.</span>*/}
                              {/*    </>*/}
                              {/*  )*/}
                              {/*}*/}
                            </div>
                            <div className="team-block">
                              <div className="list-holder">
                                <div className="contributors-list">
                                  <div className="contributors-list-item">
                                    <div className="user-part">
                                      {/*<img style={{*/}
                                      {/*  height: "50px",*/}
                                      {/*  width: "50px"*/}
                                      {/*}}*/}
                                      {/*     className="user-avatar"*/}
                                      {/*     src={val.user.avatarUrl}*/}
                                      {/*     alt="user-avatar" />*/}
                                      {/*<span>{val.user.name}</span>*/}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default Repositories;
