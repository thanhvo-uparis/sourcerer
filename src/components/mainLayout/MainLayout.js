import React from "react";
import { Spin } from 'antd';
import { useQuery } from '@apollo/client';
import { Container, Row } from "react-bootstrap";
import { GET_USER_INFO } from '../../services/Queries';
import FunFact from "../funFact/FunFact";
import Languages from "../languages/Languages";
import Navigation from "../navigation/Navigation";
import Overview from '../overview/Overview';
import Repositories from '../repositories/Repositories';

const MainLayout = () => {
  const { loading, error, data } = useQuery(GET_USER_INFO);
  return (
    <>
      {
        loading ? (
          <Container fluid style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Spin size="large" />
          </Container>
        ) : (
          <Container fluid>
            {/*Header*/}
            <Row style={{ marginBottom: "70px" }}>
              <Navigation data={data} />
            </Row>
            <Row style={{ height: "50px", padding: "10px 0" }} />
            {/*Overview*/}
            <Row style={{ marginBottom: "20px" }}>
              <Overview data={data} />
            </Row>
            <Row style={{ height: "50px", padding: "10px 0" }} />
            {/*Languages*/}
            <Row style={{ marginBottom: "20px" }}>
              <Languages data={data} />
            </Row>
            <Row style={{ height: "50px", padding: "10px 0" }} />
            {/*Fun Fact*/}
            <Row>
              <FunFact data={data} />
            </Row>
            <Row style={{ height: "50px", padding: "10px 0" }} />
            {/*Repositories*/}
            <Row style={{ paddingBottom: "20px" }}>
              <Repositories data={data} />
            </Row>
          </Container>
        )
      }
    </>
  );
};

export default MainLayout;
