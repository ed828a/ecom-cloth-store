import React from "react";
import { HeroContainer } from "./hero.styles";

const Hero = ({ children, hero }) => (
    <HeroContainer className={hero}>{children} </HeroContainer>
);

Hero.defaultProps = {
    hero: 'defaultHero'
}

export default Hero;
