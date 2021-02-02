import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuItems } from "./MenuItems";

const Wrap = styled.ul<{ click: boolean }>`
  width: 200px;
  top: 80px;
  list-style: none;
  text-align: start;
  position: absolute;

  & li {
    background-color: #1888;
    cursor: pointer;

    :hover {
      background-color: #cd853f;
    }
  }
`;
const DropdownLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
`;

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Wrap onClick={handleClick} click={click}>
      {menuItems.map((item, index) => {
        return (
          <li key={index}>
            <DropdownLink to={item.path} onClick={() => setClick(false)}>
              {item.title}
            </DropdownLink>
          </li>
        );
      })}
    </Wrap>
  );
};

export default Dropdown;
