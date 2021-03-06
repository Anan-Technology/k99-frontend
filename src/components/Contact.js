import React from 'react'
import styled from 'styled-components';
import { colors } from './../theam'
import { device } from './style/breakpoints';

import { MdContactPhone } from 'react-icons/md';
import { AiFillWechat } from 'react-icons/ai';
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';


export default function Contact() {
    return (
        <WrappContact>
            <Label>
                <MdContactPhone style={{ 
                    transform: 'rotate(-90deg)', 
                    top: '38px', 
                    left: '-45px', 
                    position: 'absolute' 
                    }} size={40} />
                <p>Contact Us</p>
            </Label>
            <ContactBody>
                <h1>Customer Support</h1>
                <ul>
                    <li><a target="_blank" href="#"><AiFillWechat />Live Chat (Recommended) </a></li>
                    <li><a target="_blank" href="https://t.me/k99win99"><FaTelegramPlane/>Telegram</a></li>
                    <li><a target="_blank" href="#"><FaFacebookF/>Facebook</a></li>
                    <li><a target="_blank" href="#"><SiLine/>081889599</a></li>
                </ul>
            </ContactBody>
        </WrappContact>
    )
}
const Label = styled.div`
   cursor: pointer;
   display:flex;
   flex-direction:row;
   color:${colors.black};
   position:absolute;
   top:70px;
   left:-62px;
   transform:rotate(90deg);
   z-index:7;
   font-size:30px;
   margin:30px;
   p{
       margin-left:10px;
   }
`;
const ContactBody = styled.div`
   padding:10px;
   
   h1{
       font-size:18px;
       padding-left:45px;
   }
   ul{
       li{
          list-style-type:none;
          padding:5px 15px;
          margin: 10px;
          background-color:${colors.black};
          border-radius:10px;
          svg{
              padding-right:10px;
          }
          a{
            color:${colors.white};
          }
       }
   }

`;
const WrappContact = styled.div`
   box-shadow: 0px 0px 7px 0px ${colors.primary};
   position:fixed;
   top:50vh;
   right:0;
   transform:translate(80%,-50%);
   background:${colors.gradient};
   z-index:7;
   padding-left:40px;
   border-top-left-radius:30px;
   border-bottom-left-radius:30px;
   transition: transform 0.3s ease-in-out;
   &:hover{
       transform:translate(0%,-50%);
   }
   @media ${device.sm}{
       display:none;
    }
`
