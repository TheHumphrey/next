import styled from 'styled-components';

const ChartAlarmStyle = styled.div`
  padding: 5px;
  .chartDeliveryContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .textChart {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }

  .Title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    hr {
      margin-top: 2px;
      margin-bottom: 2px;
      height: 2px;
      width: 23rem;
      border-width: 0;
      color: gray;
      background-color: gray;
    }
  }

  @media (max-width: 1600px) {
    .Title {
      font-size: 22px;
      hr {
        width: 18rem;
      }
    }
    .textChart {
      font-size: 13px;
    }
  }

  @media (max-width: 1274px) {
    .Title {
      font-size: 20px;
      hr {
        width: 16rem;
      }
    }
    .textChart {
      font-size: 10px;
    }
  }

  @media (max-width: 1150px) {
    .Title {
      hr {
        width: 13rem;
      }
    }
  }

  .colorTemp {
    color: blue;
  }

  .colorUmidade {
    color: green;
  }

  .colorBateria {
    color: yellowgreen;
  }

  .colorAlerta {
    color: red;
  }

  .colorVelo {
    color: rgba(275, 205, 60, 1);
  }

  .colorSem {
    color: gray;
  }
`;

export default ChartAlarmStyle;
