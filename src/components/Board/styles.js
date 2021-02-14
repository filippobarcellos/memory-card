import styled, { css } from 'styled-components';

const boardVariations = {
  2: css`
    grid-template-columns: repeat(2, 140px);
    grid-template-rows: repeat(2, 140px);
  `,
  4: css`
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 80px);
  `,
  8: css`
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(4, 60px);
  `,
};

export const Board = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 6px #000;

  ${(props) => boardVariations[props.selectedLevel]}

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
