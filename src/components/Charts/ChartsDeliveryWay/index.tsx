import React, { ReactElement } from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ChartDelivery from './ChartDelivery';

import ChartDeliveryWayStyle from './style';

const ChartDeliveryWay = (): ReactElement => {
  return (
    <>
      <ChartDeliveryWayStyle>
        <Col className="chart">
          <Card style={{ width: '100%', height: '9rem' }}>
            <ChartDelivery />
          </Card>
        </Col>
      </ChartDeliveryWayStyle>
    </>
  );
};

export default ChartDeliveryWay;
