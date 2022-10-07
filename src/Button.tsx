import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

// export const Button = ({ children, variant, ...props }: Props) => {
//   return <button {...props}>{children}</button>;
// };

const StyledButton = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #f2f2f2;
  padding: 0.75em 1em;
  border-radius: 0.5em;
`;

export const Button = ({ children, variant, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
