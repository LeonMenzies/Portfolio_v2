import styled from "styled-components";
import { useState } from "react";
import { IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiReact, SiJava, SiRubyonrails, SiRuby, SiPostgresql, SiXcode } from "react-icons/si";

const StyledCarousel = styled.div`
  display: inline-block;
`;

const StyledIcons = styled.div`
  svg {
    font-size: 5rem;
  }
`;

var iconArray = [
  <IoLogoPython />,
  <IoLogoHtml5 />,
  <IoLogoCss3 />,
  <IoLogoJavascript />,
  <SiReact />,
  <SiJava />,
  <SiRubyonrails />,
  <SiRuby />,
  <SiPostgresql />,
  <SiXcode />,
];

const SkillCarousel = () => {
  const spin = () => {
    var tmp = [...icons];
    var i = tmp.shift();
    tmp.push(i);
    setIcons(tmp);
  };

  const [icons, setIcons] = useState(iconArray);

  return (
    <StyledCarousel>
      <StyledIcons>{icons}</StyledIcons>

      <button onClick={spin}>Click me</button>
    </StyledCarousel>
  );
};
export default SkillCarousel;
