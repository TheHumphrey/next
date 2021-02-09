import React, { ReactElement } from 'react';

import ChartGripStyle from './style';

const ChartGrip = (): ReactElement => {
  return (
    <>
      <ChartGripStyle>
        <div className="chartDeliveryContainer">
          <div className="textChart">
            <strong>
              Media de Aderencia: <strong className="textColor">75%</strong>
            </strong>
          </div>
        </div>
      </ChartGripStyle>
    </>
  );
};

export default ChartGrip;
