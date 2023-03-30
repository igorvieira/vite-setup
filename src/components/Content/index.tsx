import * as S from './styles'

export type ContentProps = {
  children?: React.ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
