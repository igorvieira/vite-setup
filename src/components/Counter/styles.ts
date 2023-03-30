import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
  `}
`
