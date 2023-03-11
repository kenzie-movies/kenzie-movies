import styled from "styled-components";

export const DivSearchStyle = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;


  button {
    font-size: 30px;
    font-weight: bolder;
    background-color: transparent;
    color: white;
    border: none;
 
  }
  
  .inputSearch {
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid black;
    padding: 10px;
    width: 245px;
    text-align: center;
    color: white;
    font-weight: bold;
    height: 1rem;
  }
  
  @media (min-width: 700px){
    
  }

`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(255, 255, 255, 10%);

`;

export default StyledHeader;
