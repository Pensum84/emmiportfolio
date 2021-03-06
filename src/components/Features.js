import React from 'react'
import styled from "styled-components";
import { Button } from './Button';
import ImageOne from '../images/Uddaveckor.png';


const Section = styled.section`
background: Black;
padding: 12rem 0rem;
display: flex;
flex-direction: column;
justify-content: center;
`;
const Container = styled.div`
background: #fff;
padding: 3rem;
position: relative;
`;
const Wrap = styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0px -15px;
justify-content: flex-start;
padding: 1rem;
`;
const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 360px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: -160px;
  right: 0;
  max-wisth: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    width: 80%;
    top: -65px;
    margin: 0 auto;
    left: 0;
  }
`;
const Image = styled.img`
height: 150%;
width: 100%;
object-fit: contain;
`;


const Features = () => {
    return (
      <Section>
        <Container>
          <Wrap>
            <ColumnLeft>
              <Content
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once="true"
                data-aos-anchor-placement="center bottom"
              >
                <h1>Resumé</h1>
                <p>
                  I figure you are starting to get curious about this young girl
                  and want to know more about her previouse work and what she
                  can do. Why don´t you visit the Video and Resumé pages by
                  clicking the button below and you´ll find out.
                </p>

                <Button to="/resume">Resume</Button>
                <Button to="/video">Showreel</Button>
              </Content>
            </ColumnLeft>
            <ColumnRight>
              <Image
                src={ImageOne}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
                data-aos-anchor-placement="center bottom"
              />
            </ColumnRight>
          </Wrap>
        </Container>
      </Section>
    );
}

export default Features;
