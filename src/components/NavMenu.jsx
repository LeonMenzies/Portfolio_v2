import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: var(--clear);
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  ul {
    text-align: center;
    li {
      display: inline-block;
      padding: 1rem 1.7rem;

      &:hover {
        cursor: pointer;
        background: var(--clear);
      }
      a {
        font-size: 1.3rem;
        text-decoration: none;
      }
    }
  }
`;

const NavMenu = () => {

  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/" exact role="button">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" exact role="button">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact role="button">
            Contact
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavMenu;
