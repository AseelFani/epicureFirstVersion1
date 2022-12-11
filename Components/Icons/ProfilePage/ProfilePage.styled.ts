import styled from 'styled-components'


interface IProps {
  open: boolean
}

export const StyledProfilePage = styled.nav<IProps>`
  display: none;
  input{
    width:60%;
    border: none;
    border-bottom: 2px solid black;
    display: block;
    margin-right: auto;
    margin-left: auto;

  }button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 24px;
    gap: 10px;
    width: 206px;
    height: 48px;
    background: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    color:white;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  a {
    width: 377px;
    height: 500px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;

    /* identical to box height */
    letter-spacing: 1.92px;
    color: #000000;
    font-family: Helvetica Neue;
    height: 22px;
    font-size:130%;
    display:flex;
    flex-direction:column;
    align-items:left;
  }
   @media (max-width: 600px) {
    
    right: 10px;
    top: 0px;
    border-radius: 0px;
   }
  
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    @media (min-width: 600px) {
      margin-left:25%;

    }
    img{
      width:20px;
      height:20px;
      position:absolute;
      top:2%;
      left:5%;
      
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5% 100% 5% 10%;
    gap: 24px;

    position: absolute;
    width: 377px;
    height: 450px;
    left: -1px;

    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgb
  }
`;
export const MainTitle = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #000000;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;
export const ForgotPass = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
margin-top:-15px;
letter-spacing: 1.97px;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
display: block;
margin-right: auto;
margin-left: auto;
`;
export const Subtitle = styled.h6`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 0px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
    display: block;
    margin-right: auto;
    margin-left: auto;
   

`;
