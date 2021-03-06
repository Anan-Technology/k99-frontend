import styled from 'styled-components'
import { colors } from './../theam'

const boxshadow = '-1px 2px 46px -3px rgba(0,0,0,0.38)';

export const Label = styled.h2`
    color: ${colors.white};
    text-align:center;
`;

export const Button = styled.div`
  font-size: 1em;
  border-radius: 30px;
  margin: 10px;
  padding:10px 30px;
  display:block;
  cursor: pointer;
  color: ${colors.black};
  background:${colors.gradient};
  transition:.3s;
  box-shadow: 0px 0px 7px 0px ${colors.primary};
`;
export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: 'papayawhip';
  border: none;
  outline:none;
  border-radius: 3px;
  width:100%;
  ::placeholder {
    color: 'palevioletred';
  }
`;

export const H1 = styled.div`
height: 50px;
padding: 10px;
overflow:hidden;
font-size:19px;
background:${colors.primary};
color: ${colors.white};
`;

export const List = styled.li`
   border-radius:15px;
   cursor: pointer;
   list-style:none;
   background: ${colors.white};
   box-shadow: ${boxshadow};
   margin: 10px 0;
   overflow:hidden;
   width :100%;
   display:flex;
   justify-content:flex-start;
   p{
       margin: 30px 10px;
       font-size:18px;
   }
`;



