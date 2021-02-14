import * as S from './styles';

function Button({ children, ...rest }) {
  return <S.Button {...rest}>{children}</S.Button>;
}

export default Button;
