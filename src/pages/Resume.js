import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section `
background: White;
padding: 5em 10em;
dispay: flex;

`;
const Title = styled.h1`
  font-size: 1.8rem;
  margin-top: 20px;
  text-align: center;
  color: Black;
`;
const List1 = styled.ul`
  display: flex;
  line-height: 1.8em;
  flex-direction: column;
  color: Black;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: White;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  border: 2px solid Black;
  padding: 10px;
  margin: 5%;
  box-shadow: -60px -16px black;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const List2 = styled.ul`
  display: flex;
  line-height: 1.8em;
  flex-direction: column;
  color: Black;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: White;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  border: 2px solid Black;
  padding: 10px;
  margin: 50px;
  box-shadow: 60px -16px black;
`;

const Resume = () => {
    return (
      <div>
        <Wrapper>
          <Title
            data-aos="fade-right"
            data-aos-duration="1200"
            
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Previous Work
          </Title>
          <List1
            data-aos="fade-right"
            data-aos-duration="1200"
            
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <table>
              <tr>
                <th>Production:</th>
                <th>Role:</th>
                <th>Year:</th>
              </tr>
              <tr>
                <td>Udda Veckor - Tv Series</td>
                <td>Stella</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Nedgång - Shortfilm</td>
                <td>Sam</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Helt Lyriskt - Tv program</td>
                <td>Background vocals for Benjamin Ingrosso</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Skandia - Commercial Photo</td>
                <td>Childmodel</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Rädda Barnen - Commercial Film</td>
                <td>Girl with dead bird in her hands</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Barncancergalan - Humorpriset</td>
                <td>Sing and Dance in opening and finalé act</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Världens Hemskaste Sjukdomar - Tv program</td>
                <td>Different childcharacters</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Swedbank - Commercial Film</td>
                <td>Child in car</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Circle K - Commercial Photo</td>
                <td>Child with family</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>CDON Spring Friday - Commercial Film</td>
                <td>Child jumping on a trampoline</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Young Lean Starz Album - Photoshoot</td>
                <td>Childmodel</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Alvedon Uppvisningen - Commercial Film</td>
                <td>Child on stage</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Milk Magazine March Issue - Commercial Photo</td>
                <td>Child model</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Telia Vilken Värld - Commercial Film</td>
                <td>Child on stage</td>
                <td>2019</td>
              </tr>
            </table>
          </List1>
          <Title
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="400"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Training
          </Title>
          <List2
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="400"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <table>
              <tr>
                <th>School:</th>
                <th>Class:</th>
                <th>Year:</th>
              </tr>
              <tr>
                <td>The WAG NY "Writers and actors group New York"</td>
                <td>Acting Lessons</td>
                <td>2021 - present</td>
              </tr>
              <tr>
                <td>DramaCoachen</td>
                <td>Acting Lessons</td>
                <td>2021 - present</td>
              </tr>
              <tr>
                <td>Base23</td>
                <td>Musical Theater</td>
                <td>2020 - present</td>
              </tr>
              <tr>
                <td>Base23</td>
                <td>Ballet</td>
                <td>2020 - present</td>
              </tr>
              <tr>
                <td>Private Singinglessons - Ceca Wadstein</td>
                <td>Singing</td>
                <td>2020 - present</td>
              </tr>
              <tr>
                <td>School of culture</td>
                <td>Piano</td>
                <td>2020 - present</td>
              </tr>
              <tr>
                <td>School of culture</td>
                <td>Dance - Street, Jazz, Hip Hop</td>
                <td>2018 - present</td>
              </tr>
              <tr>
                <td>School of culture</td>
                <td>Singing lessons</td>
                <td>2020 - 2020</td>
              </tr>
              <tr>
                <td>Calle Flygare</td>
                <td>Theater lessons</td>
                <td>2020 - 2020</td>
              </tr>
              <tr>
                <td>Stockholm Top Gymnastics</td>
                <td>Gymnastics competition level</td>
                <td>2016 - 2020</td>
              </tr>
              <tr>
                <td>SASK</td>
                <td>Figure Skating</td>
                <td>2015 - 2016</td>
              </tr>
            </table>
          </List2>
        </Wrapper>
      </div>
    );
}

export default Resume
