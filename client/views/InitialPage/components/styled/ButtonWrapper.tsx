import styled, {StyledComponent} from 'styled-components';

export const ButtonWrapper: StyledComponent<"button", any> = styled.button`
  color: #FFFFFF;
  background-color: #0069ED;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  border-radius: 300px;
  transition: background 250ms ease-in-out, transform 150ms ease;
  padding: 15px;
  margin: 0 5px;
  border-radius: 7px;

  &:hover {
    background-color: #2e82ea;
  }

  @media (max-width: 500px) {
    margin: 10px auto;
  }
`
