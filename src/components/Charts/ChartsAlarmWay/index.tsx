import React, { ReactElement } from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ChartAlarm from './ChartAlarm';

import ChartsAlarmWayStyle from './style';

const ChartAlarmWay = (): ReactElement => {
  return (
    <>
      <ChartsAlarmWayStyle>
        <Col className="chart">
          <Card style={{ width: '100%', height: '9rem' }}>
            <ChartAlarm />
          </Card>
        </Col>
      </ChartsAlarmWayStyle>
    </>
  );
};

export default ChartAlarmWay;
