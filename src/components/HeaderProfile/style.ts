import styled from 'styled-components';

const StyledHeader = styled.header`

background-color:  #1D1741;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid rgba(255, 255, 255, 0.13);
margin: 0 auto;
padding: 0.5rem 1rem;

img{
    cursor: pointer;
}

.logo{
    display:flex;    
    align-items: center;

    h3{
        font-family:Arial, Helvetica, sans-serif;
        color: #fff;
        font-weight: bold;
        
        span{
            color: #BE0072;
            font-weight: bold;
        }
    }
}

nav{
    display: flex;
    gap: 2rem;
    align-items: center;

    .search{

        display: flex;
        align-items: center;
        
        input{
            background-color: #302D61;
            color: #6F6D92;
            border: 1px solid black;
            border-radius: 1rem;
            padding: 0.5rem;
            outline: none;
            text-align: center;
        }
    }

    .navigation{
        display: flex;
        gap: 1rem;
    }
}

`
export default StyledHeader;
