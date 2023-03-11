import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0008;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  display: flex;
  flex-direction: column;

  form {
    border-radius: 20px;
    background-color: #0008;
    background: linear-gradient(to right, #be0072, #3c1053);
    padding: 70px;

  }

  fieldset {
    gap: 10px;
  }

  .div-title{
   display: flex;
   justify-content: center;
   
  }

  @media (min-width: 700px){
    form{
     
    }
  }
`
