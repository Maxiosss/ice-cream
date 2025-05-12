import styles from "./hero.module.css";
import styled from "styled-components";
import Button from "../../components/button/Button";

const Title = styled.h1`
  width: 367px;
  text-align: left;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 38px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fon-color);
  margin-top: 0;
`;
const Made = styled.a`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #f8d24e;
`;
const RightNumbers = styled.span`
  color: #131313;
  font-size: 46px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const RightText = styled.p`
  color: #fcfcfc;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: right;
`;
const BottomText = styled.p`
  width: 200px;
  color: #fff;
  font-size: 14px;
  margin-top: 0;
  text-align: left;
  font-family: "DM Sans", sans-serif;
  line-height: 20px;
  margin-bottom: 0;
`;
const Arrow = styled.img`
margin-top: 32px;
display: block;`
export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.container}>
        <div>
          <Title>ice cream made with passion</Title>
          <div className={styles.buttonContainer}>
            <Button link="#products" variant="outline">
              Products
            </Button>
            <Made href="#made">How it's made?</Made>
          </div>
        </div>
        <div className={styles.textContainer}>
          <RightText>
            <RightNumbers>16</RightNumbers>
            <br />
            cafes
          </RightText>
          <RightText>
            <RightNumbers>23</RightNumbers>
            <br />
            food trucks
          </RightText>
        </div>
        <div className={styles.heroContent}>
          <BottomText>
            Indulge in a scoop of ice cream made with passion and treat your
            taste buds to an unforgettable experience!
          </BottomText>
          <a href="#">
            <Arrow src="/images/hero/arrow.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
