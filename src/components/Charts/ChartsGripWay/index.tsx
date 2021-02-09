import React, { ReactElement } from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ChartGrip from './ChartGrip';

import ChartsGripWayStyle from './style';

const ChartsGripWay = (): ReactElement => {
  return (
    <>
      <ChartsGripWayStyle>
        <Col className="chart">
          <Card style={{ width: '100%', height: '9rem' }}>
            <ChartGrip />
          </Card>
        </Col>
      </ChartsGripWayStyle>
    </>
  );
};

export default ChartsGripWay;
