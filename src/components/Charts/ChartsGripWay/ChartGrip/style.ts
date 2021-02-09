import styled from 'styled-components';

const ChartGripStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  .textChart {
    font-size: 30px;
  }

  @media (max-width: 1600px) {
    .textChart {
      font-size: 24px;
    }
  }

  @media (max-width: 1274px) {
    .textChart {
      font-size: 20px;
    }
  }

  .textColor {
    color: green;
  }
`;

export default ChartGripStyle;
