import React, { ReactElement } from 'react';

import ChartAlarmStyle from './style';

const ChartAlarm = (): ReactElement => {
  return (
    <>
      <ChartAlarmStyle>
        <div className="chartDeliveryContainer">
          <div className="Title">
            <strong>Alertas Ativos</strong>
            <hr />
          </div>
          <div className="textChart">
            <strong>
              <strong className="colorAlerta">7</strong> Temperatura
            </strong>

            <strong>
              <strong className="colorAlerta">13</strong> Umidade
            </strong>

            <strong>
              <strong className="colorAlerta">55</strong> Bateria
            </strong>

            <strong>
              <strong className="colorAlerta">3</strong> Aderencia
            </strong>

            <strong>
              <strong className="colorAlerta">49</strong> Velocidade
            </strong>

            <strong>
              <strong className="colorAlerta">5</strong> Outros alarmes
            </strong>
          </div>
        </div>
      </ChartAlarmStyle>
    </>
  );
};

export default ChartAlarm;
