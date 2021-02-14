import styled, { css } from 'styled-components';
import background from '../../assets/back.png';

export const FlipContainer = styled.div`
  cursor: pointer;
  background: url(${background});
  background-size: cover;
  border-radius: 8px;

  & > div {
    width: 100%;
    height: 100%;

    &.card__front {
      span {
        z-index: 99;
        display: block;
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
      }
    }

    &.card__back {
      img {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
  }

  ${(props) =>
    props.isFlipped &&
    css`
      background: #32b1f4;
    `}

  ${(props) =>
    props.notMatch &&
    css`
      background: #f8424e;
    `}

${(props) =>
    props.isSolved &&
    css`
      background: #2ab335;
    `}
`;
