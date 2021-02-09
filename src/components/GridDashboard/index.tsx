import React from 'react';
import { Provider } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  TableEntregaWay,
  FilterEntregaWay,
  InputSearch,
  ButtonTable,
  ChartDeliveryWay,
  ChartsGripWay,
  ChartAlarmWay,
} from '@app/components';

import GridDashboardStyle from './style';

import store from '@app/store';

const GridDashboard = (): React.ReactElement => {
  return (
    <>
      <GridDashboardStyle>
        <Provider store={store}>
          <Container className="grid" fluid={true}>
            <div>
              <Row className="chart" lg={4} md={4} sm={2} xs={2}>
                <ChartDeliveryWay />
                <ChartsGripWay />
                <ChartAlarmWay />
                <ChartDeliveryWay />
              </Row>
              <Row className="filterRow">
                <Col className="filter">
                  <FilterEntregaWay />
                  <InputSearch />
                  <ButtonTable />
                </Col>
              </Row>
            </div>
            <Row>
              <Col className="table">
                <TableEntregaWay />
              </Col>
            </Row>
          </Container>
        </Provider>
      </GridDashboardStyle>
    </>
  );
};

export default GridDashboard;
