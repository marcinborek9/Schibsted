import styled, {StyledComponent} from 'styled-components';

export const Input: StyledComponent<"input", any> = styled.input`
  width: 225px;
  font-weight: 400;
  letter-spacing: .018em;
  font-size: 18px;
  height: 20px;
  padding: 15px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .03);
  border: 1px solid #E2E2E2;
  transition: all 0.36s ease-in-out;
  color: #000000;
  border-radius: 4px;

  @media (max-width: 500px) {
    width: 100%;
  }
`
