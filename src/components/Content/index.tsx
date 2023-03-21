import * as S from "./styles";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <S.Wrapper className="content">{children}</S.Wrapper>;
};

export default Content;
