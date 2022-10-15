import styled from "styled-components";

import Button from "../components/Button";
import SkillCarousel from "../components/SkillCarousel";
import ProfilePhoto from "../assets/images/profile-photo.jpg";

const StyledAbout = styled.div`
  .titleName {
    font-size: 8rem;
  }
  img {
    max-width: 30vw;
    margin-left: 10vw;
    width: 100%;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div class={"titleName"}>Leon</div>
      <p>
        Hardworking, responsible, and goal-orientated university student at
        Victoria University of Wellington studying for a Bachelor’s in computer
        science with a variety of experience from years of working,
        international travel, and education.
      </p>
      <img src={ProfilePhoto} alt={"ProfilePhoto"} />

      <Button btnText={"Contact"} btnLink={"./Contact"} outline={false} />
      <Button btnText={"Projects"} btnLink={"./Projects"} outline={true} />

      <SkillCarousel />
    </StyledAbout>
  );
};

export default About;
