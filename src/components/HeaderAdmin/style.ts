import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
 
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(255, 255, 255, 10%);

  input {
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid black;
    padding: 0.5rem;
    width: 13rem;
    text-align: center;
    color: white;
    font-weight: bold;
  }

 

  .icon-movie, .icon-profile, .icon-getout{
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin: 0 auto;

  }

  button {

    margin-top: 2rem;
    font-weight: bolder;
    background-color: transparent;
    color: white;
    border: none;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  img {
    width: 12rem;
  }

  @media (min-width: 400px) {
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;

    input {
      width: 20rem;
    }
  }
`;

export const StyledDivButtons = styled.div`

`;

export const StyledDivSearch = styled.div`
  .icon-search {
    font-size: 2rem;
    margin-bottom: -11px;
    color: white;
  }
  
`;

export default StyledHeader;
