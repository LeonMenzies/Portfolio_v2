import React from 'react';
import HeroImage from '../assets/images/hero.png'
import PText from "./PText";
import Button from "./Button";
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons'




const HeroStyles = styled.div`
  .hero{ 
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span{
      display: inline-block;
      width: 100%;
    }
    .hero__name{
      font-size: 7rem;
      font-family: 'Montserrat SemiBold',serif;
      color: var(--white);
    }
  }
  .hero__img{
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info{
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social{
    left: 50px;
  }
  .hero__scrollDown{
    right: 50px;
  }
  .hero__social__indicator,
  .hero_scrollDown{
    width: 50px;
    p{
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: .7rem;
      text-transform: uppercase;
    }
  }
`;

export default function HeroSection(){
    return (
        <HeroStyles>
            <div className={"hero"}>
                <div className={"container"}>
                    <h1 className={"hero__heading"}>
                        <span>Hello, This is</span>
                        <span className={"hero__name"}>Leon Menzies</span>
                    </h1>
                    <div className={"hero__img"}>
                        <img src={HeroImage} alt={"HeroImage"}/>
                    </div>
                    <div className={"hero__info"}>
                        <PText>
                            Hardworking, responsible, and goal-orientated university student at Victoria University of Wellington.
                            Studying for a Bachelor’s in computer science with a variety of experience
                            from internships, work experience and years of international travels
                        </PText>

                        <Button btnLink={"./projects"} btnText={"see my work"} outline={false}/>
                    </div>
                    <div className={"hero__social"}>
                        <div className={"hero_social_text"}>
                            <ul>

                                <li>
                                    <FontAwesomeIcon icon={faGithub}
                                                     href={"https://github.com/LeonMenzies"}
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLinkedin}
                                                     href={"https://www.linkedin.com/in/leonmenzies/"}
                                    />
                                </li>
                                <li>
                                    {/*<FontAwesomeIcon icon={faEnvelope}*/}
                                    {/*                 href={"https://github.com/LeonMenzies"}*/}
                                    {/*/>*/}

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </HeroStyles>
    )
}