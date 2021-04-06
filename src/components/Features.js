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
                        <Content>
                            <h1>Resume</h1>
                            <p>Here you can find the complete collection of Emmi´s previous productions and you will also find information about her training here. .</p>
                      
                            <Button to= "/resume">Resume</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={ImageOne} />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features;
