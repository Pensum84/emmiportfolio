import styled from "styled-components";
import ImageOne from "../images/2.jpg";
import emailjs from "emailjs-com";

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
  text-align: center;
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
  top: -100px;
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
  height: 110%;
  width: 100%;
  object-fit: contain;
`;
function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxdnhma",
        "template_juprg2o",
        e.target,
        "user_92Ixuhpd9Nb0JTk54vpgM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
      }

const Contact = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>Contact Me</h1>
              <p>
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

              </p>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image src={ImageOne} />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Contact;