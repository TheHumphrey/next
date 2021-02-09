import React, { ReactElement } from 'react';

import ChartDeliveryStyle from './style';

const ChartDelivery = (): ReactElement => {
  return (
    <>
      <ChartDeliveryStyle>
        <div className="chartDeliveryContainer">
          <div className="lineDiv">
            <div className="textChart">
              <strong>
                <strong className="colorGreen">77</strong> Entregues
              </strong>
              <strong>
                <strong className="colorGray">111</strong> Andamento
              </strong>
              <strong>
                <strong className="colorRed">27</strong> Não Entregues
              </strong>
              <strong>
                <strong className="colorBlue">33</strong> Parcial
              </strong>
              <strong>
                <strong className="color">281</strong> Total
              </strong>
            </div>
            <hr />
          </div>
          <h1>Chart</h1>
        </div>
      </ChartDeliveryStyle>
    </>
  );
};

export default ChartDelivery;
