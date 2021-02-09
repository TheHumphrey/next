import styled from 'styled-components';

const ChartDeliveryStyle = styled.div`
  padding: 5px;
  .chartDeliveryContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .textChart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    align-items: flex-end;
  }

  .lineDiv {
    display: flex;
    justify-content: space-between;
    hr {
      border: none;
      border-left: 4px solid hsla(200, 10%, 50%, 0.4);
      height: 6rem;
      width: 1px;
    }
  }

  @media (max-width: 1600px) {
    .textChart {
      font-size: 13px;
    }
  }

  @media (max-width: 1274px) {
    .textChart {
      font-size: 10px;
    }
  }

  .colorGreen {
    color: green;
  }

  .colorGray {
    color: gray;
  }

  .colorRed {
    color: red;
  }

  .colorBlue {
    color: blue;
  }
`;

export default ChartDeliveryStyle;
