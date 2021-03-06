import React from 'react'
import styled from 'styled-components'
import { colors } from '../theam'
import { motion } from "framer-motion";
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Link, Switch } from 'react-router-dom'
import logo from './../images/logo.png'
import en from './../images/en.svg'
import km from './../images/km.svg'
import { device, size } from './style/breakpoints';
import { setLanguage } from 'react-switch-lang';
import { FiPhoneCall } from 'react-icons/fi'

import { Input } from './Component'
import { useDispatch } from 'react-redux'
import { login, signup } from '../actions';

import ModalCom from './Modal'
import ModalLogin from './ModalLogin'

export default function MainHeader({ t }) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    const handleSetLanguage = (key) => () => {
        setLanguage(key);
    };
    return (
        <Header>
            <ModalCom t={t} />
            <ModalLogin t={t} />
            <Container>
                <SwitchLang>
                    <Row style={{ justifyContent: 'space-between', marginTop: '20px' }}>
                        <Phone><FiPhoneCall size={25} /> <p>{t('menu.phone')}</p></Phone>
                        <div style={{ display: 'flex' }}>
                            <Input type="text" placeholder={t('menu.username')} />
                            <Input type="password" placeholder={t('menu.password')} />
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                <Button onClick={() => dispatch(login())} >{t('menu.login')}</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                <Button onClick={() => dispatch(signup())} style={{ marginRight: '30px' }}>{t('menu.signup')}</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                <Lang onClick={handleSetLanguage('km')}><img src={km} /></Lang>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                <Lang onClick={handleSetLanguage('en')}><img src={en} /></Lang>
                            </motion.div>
                        </div>

                    </Row>
                </SwitchLang>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2}>
                        <Logo to='/' >
                            <img src={logo} />
                        </Logo>

                    </Col>
                    <Col ref={node} xs={9} sm={9} md={10} lg={10}>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu t={t} open={open} setOpen={setOpen} />
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}


const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger style={{ position: `${open ? 'fixed' : 'absolute'}` }} open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}



const Menu = ({ open, t, setOpen }) => {
    const checkWidth = (w) => {
        if (window.innerWidth > w) {
            return false
        }
        return true
    }

    const handleSetLanguage = (key) => () => {
        setLanguage(key);
    };
    const dispatch = useDispatch();
    return (
        <>
            {
                checkWidth(768) ? <BgBlack onClick={() => setOpen(!open)} style={{ display: `${open ? 'block' : 'none'}` }} /> : ''
            }
            <Ul open={open} onClick={() => setOpen(!open)}>
                <Link to='/' >
                    <Li>{t('menu.home')}</Li>
                </Link>
                <Link to='/k99casino' >
                    <Li>{t('menu.k99casino')}</Li>
                </Link>
                <Link to='/sport' >
                    <Li>{t('menu.sport')}</Li>
                </Link>
                <Link to='/lotto' >
                    <Li>{t('menu.lotto')}</Li>
                </Link>
                <Link to='/keno' >
                    <Li>{t('menu.keno')}</Li>
                </Link>
                <Link to='/ae_casino' >
                    <Li>{t('menu.ae_casino')}</Li>
                </Link>
                <Link to='/joker' >
                    <Li>{t('menu.joker')}</Li>
                </Link>
                <Link to='/promotion' >
                    <Li>{t('menu.promotion')}</Li>
                </Link>
                {
                    checkWidth(768) ?
                        <div className="desktop-hidden">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                <Button onClick={() => dispatch(login())} >{t('menu.login')}</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                <Button onClick={() => dispatch(signup())} >{t('menu.signup')}</Button>
                            </motion.div>
                            <div style={{ display: 'flex', padding: '15px' }}>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                    <Lang onClick={handleSetLanguage('km')}><img src={km} /></Lang>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                    <Lang onClick={handleSetLanguage('en')}><img src={en} /></Lang>
                                </motion.div>
                            </div>
                        </div>
                        : null
                }
            </Ul>
        </>
    )
}

// Styled Compenent

const SwitchLang = styled.div`
   @media ${device.sm}{
        display:none;
   }
`;
const BgBlack = styled.div`
    position:fixed;
    background: #000;
    opacity:0.5;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    width:100vw;
    height:100vh;
    z-index:5;
`;

const Phone = styled.div`
    margin-top:15px;
    display:flex;
    color: ${colors.white};
    p{
        display:inline-block;
        margin:0;
        padding:0 10px;
    }
`;
const Lang = styled.div`
    border:5px;
    color: ${colors.white};
    cursor: pointer;
    margin-top:20px;
    margin-right:20px;
    img{
        overflow:hidden;
    }

`;
const StyledBurger = styled.button`
    @media screen and (min-width: ${size.sm}){
        display:none;
    }
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => open ? colors.white : colors.primary};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

export const Button = styled.div`
  font-size: 1em;
  border-radius: 30px;
  margin: 10px;
  padding:5px 20px;
  display:block;
  cursor: pointer;
  text-align:center;
  color: ${colors.black};
  background:${colors.gradient};
  transition:.3s;
  box-shadow: 0px 0px 7px 0px ${colors.primary};
`;

const Header = styled.header`
    background: ${colors.black};
    border-bottom : 1px solid ${colors.gray};
`;
const Logo = styled(Link)`
display:block;
padding:0;
height:100px;
@media ${device.sm}{
        height:70px;
        margin: 0;
    }
    img{
        height:100%;
        width:auto;
    }
`;
const Ul = styled.ul`
    margin:0;
    padding:15px 0;
    display: flex;
    justify-content:flex-end;
    @media screen and (min-width: ${size.sm}){
        .desktop-hidden{
        display:none;
    }
    }
    
    @media ${device.sm}{
        justify-content:flex-start;
        padding-left:10px;
        padding-top:50px;
        right:-53vw;
        z-index:5;
        transition: all 0.3s linear;
        transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
        position:fixed;
        flex-direction:column;
        background:${colors.black};
        top:0;
        height:100vh;
        width:50vw;
        a{
           top:0;
        }
    }
    
`;
const Li = styled.li`
    list-style:none;
    font-size:15px;
    padding:10px 30px;
    margin:10px 0;
    border-radius:30px;
    color: ${colors.white};
    transition:0.3s;
    &:hover{
        box-shadow: 0px 0px 7px 0px ${colors.primary};
        background:${colors.gradient};
        color:${colors.black};
    }
`;
