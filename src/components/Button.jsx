import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin: 1rem;
  .button {
    font-size: 1.3rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--clear)'};
    padding: 0.2em 1.5em;
    border: 2px solid var(--clear);
    display: inline-block;
    text-decoration: none;
    border-radius: 4px;


    &:hover{
      background: ${(props) => (props.outline ? 'var(--clear)' : 'transparent')};
    }
  }
  
`;



const Button = ({ btnText = "test", btnLink = "test", outline = false }) => {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
};

export default Button;
