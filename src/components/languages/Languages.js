import { Skeleton } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Pie } from 'react-chartjs-2';
import SectionsTitle from "../sectionsTitle/SectionsTitle";
import lodash from 'lodash';

import "./Languages.css";

const Languages = ({ data: { viewer } }) => {
  const [languagesData, setLanguagesData] = useState([]);
  const [chart, setChart] = useState({
    loading: true,
    data: {}
  })
  const dataToSet = [];
  useEffect(() => {
    const setLanguageData = () => {
      viewer.repositories.edges.map((val) => {
        val.node.languages.edges.map((item) => {
          const { name, color, id } = item.node;
          dataToSet.push({ name, color, id, size: item.size })
        })
      })
      return setLanguagesData(dataToSet)
    }
    const setChartData = () => {
      const dataToSetChart = {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      }
      const languagesAfterGroupBy = lodash.groupBy(dataToSet, "name")
      Object.keys(lodash.groupBy(dataToSet, "name")).map((val) => {
        dataToSetChart.labels.push(val);
        dataToSetChart.datasets[0].backgroundColor.push(languagesAfterGroupBy[val][0].color);
        dataToSetChart.datasets[0].borderColor.push(languagesAfterGroupBy[val][0].color);
        dataToSetChart.datasets[0].data.push(languagesAfterGroupBy[val].reduce((pre, next) => {
          return pre + next.size
        }, 0))
      });
      return setChart({
        loading: false,
        data: dataToSetChart
      })
    }
    setLanguageData();
    setChartData();
  }, []);
  const languagesAfterGroupBy = lodash.groupBy(languagesData, "name");
  return (
    <Container>
      <Row className='languages-container'>
        <div className='component-width'>
          <Row>
            <SectionsTitle
              title='Languages'
              componentNumber={3}
              data={{
                repos: viewer.repositories.totalCount,
                lastUpdated: moment(viewer.updatedAt).format(
                  "YYYY/MM/DD -" + " HH:mm:ss"
                ),
              }}
            />
          </Row>
          <Row>
            <Col>
              <div className='languages-items'>
                {
                  Object.keys(languagesAfterGroupBy).map((languageName, index) => {
                    return (
                      <div key={index} className='item'>
                        <div
                          className='languages-items-color item-size item-title'>
                          <h6>{languageName}</h6>
                          <div
                            className='item-icon'
                            style={{ backgroundColor: languagesAfterGroupBy[languageName][0].color }}
                          />
                        </div>
                        <div className='languages-items-color item-size'>
                          <p>Commits:</p>
                          <span>NaN</span>
                        </div>
                        <div className='languages-items-color item-size'>
                          <p>LOC:</p>
                          <span>{languagesAfterGroupBy[languageName].reduce((pre, next) => {
                            return pre + next.size
                          }, 0)}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </Col>
            <Col className='languages-chart'>
              {
                chart.loading ? <Skeleton active /> : <Pie data={chart.data} />
              }
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default Languages;
