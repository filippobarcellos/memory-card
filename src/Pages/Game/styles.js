import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  img {
    margin-bottom: 60px;
    width: 200px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  span {
    font-size: 22px;
    font-weight: bold;
  }

  button {
    font-size: 30px;
  }
`;

export const Nivel = styled.div`
  margin-top: 50px;

  span {
    font-size: 20px;
  }

  strong {
    margin-left: 4px;
    font-size: 20px;
    background: #fff;
    color: #000;
    padding: 4px 8px;
    border-radius: 6px;

    &.easy {
      color: #2ab336;
    }

    &.normal {
      color: #000;
    }

    &.hard {
      color: #f8424e;
    }
  }
`;
