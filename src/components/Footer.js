import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { FaInstagram, FaImdb, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { BiFilm } from "react-icons/bi";

const Section = styled.section`
  background: #212120;
  color: #fff;
  width: 100%;
  min-height: 500px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;
const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
`;
const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 4rem 0rem;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Quote = styled.div`
flex: 1;
padding: 2rem 0rem;

h3{
    font-size: clamp(2rem, 8vw, 4rem);
}
`;
const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;
const Icons = css`
font-size: clamp(1rem, 6vw, 2rem); 
margin-right: 1.5rem;
color: #cd853f;
`;
const Instagram = styled(FaInstagram)`
${Icons}
`;
const IMDB = styled(FaImdb)`
  ${Icons}
`;
const Film = styled(BiFilm)`
  ${Icons}
`;
const YouTube = styled(FaYoutube)`
  ${Icons}
`;
const Facebook = styled(FaFacebookSquare)`
  ${Icons}
`;

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Footer = () => {
    return (
      <Section>
        <Container>
          <FooterTop>
            <Quote>
              <h3>
                Let´s Work <br /> Together!
              </h3>
            </Quote>
            <FooterInfo>
              <h3>Agent</h3>
              <p>Diamanda Management - Leena Stenberg</p>
              <p>Tel: +4799674411</p>
              <a
                href="https://www.diamandamanagement.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Website
              </a>
            </FooterInfo>
          </FooterTop>
          <FooterBottom>
            <SocialIcons>
              <a
                href="https://www.imdb.com/name/nm12285112/?ref_=fn_al_nm_1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IMDB />
              </a>
              <a
                href="https://www.instagram.com/beckisentertainment/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram />
              </a>
              <a
                href="https://filmcafe.se/cv/cv?user_id=112298"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Film />
              </a>
              <a
                href="https://www.facebook.com/beckisentertainment"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UCL6yNk89oKtL8YVTZcRYuYQ"
                rel="noopener noreferrer"
                target="_blank"
              >
                <YouTube />
              </a>
            </SocialIcons>
            <Contact>
              <Button to="/contact">
                Contact Me <IoMdArrowRoundForward />
              </Button>
            </Contact>
          </FooterBottom>
        </Container>
      </Section>
    );
}

export default Footer;
