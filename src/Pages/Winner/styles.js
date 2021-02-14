import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  div {
    text-align: center;
    p {
      font-size: 32px;
      font-weight: bold;
    }

    span {
      display: block;
      font-size: 18px;
      margin: 12px 0 48px 0;
    }
  }

  img {
    margin-top: 100px;
  }
`;

export const Signal = styled.span`
  font-size: 60px;
  margin-bottom: 8px;
`;
