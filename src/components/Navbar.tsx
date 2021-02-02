import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Button from "./Button";
import "./Navbar.css";

const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  @media screen and (max-width: 960px) {
    position: relative;
  }
`;
const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;

  &:hover {
    background-color: #188;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const NavText = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;
const NavTextMobile = styled(Link)`
  display: none;
  @media screen and (max-width: 960) {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    background: #1888ff;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;

    &:hover {
      background: #fff;
      color: #1888ff;
      transition: 250ms;
    }
  }
`;
const MenuIcons = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavWrap = styled.ul<{ click: boolean }>`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  text-align: center;
  justify-content: center;
  width: 70vw;
  list-style: none;

  @media screen and (max-width: 960px) {
    grid-template-rows: repeat(4, 60px);
    display: flex;
    list-style: none;
    width: 100%;
    height: 90vh;
    text-decoration: none;
    position: absolute;
    top: 20px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    z-index: ${({ click }) => (click ? "1" : "auto")};
  }
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Nav>
        <Logo to='/'>
          EPIC
          <i className='fab fa-firstdraft'></i>
        </Logo>
        <MenuIcons onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </MenuIcons>
        <NavWrap click={click}>
          <NavItem>
            <NavText to='/' onClick={closeMobileMenu}>
              Home
            </NavText>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavText to='/services' onClick={closeMobileMenu}>
              services
              <i className='fas fa-caret-down' />
            </NavText>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem>
            <NavText to='/products' onClick={closeMobileMenu}>
              Products
            </NavText>
          </NavItem>
          <NavItem>
            <NavText to='/contact-us' onClick={closeMobileMenu}>
              Contact Us
            </NavText>
          </NavItem>
          <NavItem>
            <NavTextMobile to='/Sign-up' onClick={closeMobileMenu}>
              Sign Up
            </NavTextMobile>
          </NavItem>
        </NavWrap>
        <Button />
      </Nav>
    </>
  );
};

export default Navbar;
