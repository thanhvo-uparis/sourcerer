import React from "react";
import { InfoCircleOutlined } from '@ant-design/icons';
import { Progress } from "antd";
import { Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { FunFactData } from '../../configs/funFactData';
import SectionsTitle from "../sectionsTitle/SectionsTitle";

import "./FunFact.css";

const FunFact = () => {
  return (
    <Container>
      <Row className='fun-fact-container'>
        <div className='component-width'>
          <Row>
            <SectionsTitle
              title='Fun facts'
              componentNumber={4}
              data={{
                repos: 10,
                lastUpdated: "2020/07/01 — 12:07:00",
              }}
            />
          </Row>
          <Row className='date-chart'>
            <div className='daytime-chart item'>
              <div className='chart-title'>
                <div className='title'>
                  <p>I'm most productive during</p>
                  <h6>Daytime</h6>
                </div>
                <div className='pie-chart'>
                  <p>49% of users</p>
                  <Progress
                    strokeLinecap='square'
                    type='circle'
                    percent={49}
                    format={() => "D"}
                  />
                </div>
              </div>
            </div>
            <div className='day-chart item'>
              <div className='chart-title'>
                <div className='title'>
                  <p>I'm most productive on</p>
                  <h6>Mondays</h6>
                </div>
                <div className='pie-chart'>
                  <p>14% of users</p>
                  <Progress
                    strokeLinecap='square'
                    type='circle'
                    percent={14}
                    format={() => "Mo"}
                  />
                </div>
              </div>
              <div className='chart'></div>
            </div>
          </Row>
          <Row className="fun-fact-content">
            {
              FunFactData.map((val, index) => {
                return (
                  <>
                    <div className="fun-fact-item">
                      <div className='chart-title'>
                        <div className='title'>
                          <p>{val.subTitle}</p>
                          <h6>{val.title}</h6>
                          <p>{val?.subTitle2}</p>
                        </div>
                        <div className="item-chart">
                          <Progress
                            strokeLinecap='square'
                            type='circle'
                            percent={val.percent}
                            format={() => <img
                              src={val.icon}
                              alt={val.title} />}
                          />
                        </div>
                        <div className="item-desc">
                          <div className="desc">
                            {val.isSubDesc ? `Ranked higher than ${val.percent}% of
                            users` : `${val.percent}% of users`}
                          </div>
                          {
                            val.isSubDesc && (
                              <div className="desc-detail">
                                <OverlayTrigger
                                  placement="top-end"
                                  overlay={
                                    <Tooltip className="popover-tooltip"
                                             id={`tooltip-top-end`}>
                                      Based on number of commits
                                    </Tooltip>
                                  }
                                >
                                  <InfoCircleOutlined />
                                </OverlayTrigger>
                              </div>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default FunFact;
