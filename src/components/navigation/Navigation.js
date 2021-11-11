import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import './Navigation.css';

const Navigation = ({ data: { viewer } }) => {
  const [codeLine, setCodeLine] = useState(0)
  useEffect(() => {
    let lineOfCodes = 0;
    viewer.repositories.edges.map((val) => {
      lineOfCodes += val.node.languages.totalSize
      return setCodeLine(lineOfCodes)
    })
  })
  return (
    <Container>
      <Row className="header-container">
        <div className="header-content component-width">
          <div className="header-title">
            <Row>
              <Col className="header-title-name">
                <h1>{viewer.name ? viewer.name : viewer.login}</h1>
                <p>{viewer.login}</p>
              </Col>
              <Col className="header-title-detail">
                <p>{viewer?.bio}</p>
                <a href={viewer?.websiteUrl}>{viewer?.websiteUrl}</a>
                <p>{viewer.location}</p>
              </Col>
            </Row>
          </div>
          <div style={{ top: "20px" }} className="number-section">1</div>
          <div className="header-item">
            <img className="user-avatar"
                 src={viewer.avatarUrl}
                 alt={viewer.login} />
            <div className="item"
                 style={{ backgroundColor: "#E3EAE5" }}>
              <p>Commits</p>
              <p>{viewer.commitComments.totalCount}</p>
            </div>
            <div className="item"
                 style={{ backgroundColor: "#E3EAE5" }}>
              <p>Repos</p>
              <p>{viewer.repositories.totalCount}</p>
            </div>
            <div className="item"
                 style={{ backgroundColor: "#E3EAE5" }}>
              <p>Lines of code</p>
              <p>{codeLine}</p>
            </div>
            <div className="item"
                 style={{ backgroundColor: "#C0F1E2" }}>
              <p>Followers</p>
              <p>{viewer.followers.totalCount}</p>
            </div>
            <Button className="item btn-custom">Follow</Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Navigation;
