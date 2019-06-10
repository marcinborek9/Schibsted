import styled, {StyledComponent} from 'styled-components';

export const SearchFormWrapper: StyledComponent<"div", any> = styled.div`
  text-align: center;
  padding: 50px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`
