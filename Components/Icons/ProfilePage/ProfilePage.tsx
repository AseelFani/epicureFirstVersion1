import React from 'react';
import { IProps } from '../../Intefaces/IProps';
import { ForgotPass, MainTitle,  StyledProfilePage, Subtitle} from './ProfilePage.styled';
import '../../Footer/Footer.styled.ts'
import Close from '../../../assets/CloseIcon.png';
import './stylee.css'

const SearchPage: React.FC<IProps> = ({ open }) => {
  
  return (<>
    <StyledProfilePage open={open}>

      <img src={Close} onClick={event =>  window.location.href='/'} ></img>
      <MainTitle style={{color:'red'}}>It's not ready yet, please don't check it</MainTitle>
          <MainTitle>Sign In</MainTitle>
          <Subtitle>To continue the order, please sign in</Subtitle>           
            <input
              type="email"
              placeholder="Email Address"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <button>Login</button>
            <ForgotPass >Forgot Password?</ForgotPass>
    </StyledProfilePage>
      
    </>
  )
  
}


export default SearchPage;