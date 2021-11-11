import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionsTitle = ({ title, data, componentNumber }) => {
  return (
    <Container style={{ marginBottom: "10px" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Col>
          <h1 style={{ fontSize: "32px", marginBottom: 0 }}>{title}</h1>
        </Col>
        <div className='number-section'>{componentNumber}</div>
        <Col>
          <p
            style={{
              fontSize: "11px",
              marginBottom: 0,
            }}
          >
            {data.repos} {data.repos > 1 ? "repos" : "repo"}
          </p>
          <p style={{ fontSize: "11px", marginBottom: 0 }}>
            Last updated: {data.lastUpdated}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionsTitle;
