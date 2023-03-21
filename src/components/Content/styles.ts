import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `};
`;
