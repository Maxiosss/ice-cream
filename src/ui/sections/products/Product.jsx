import styled from "styled-components";
import styles from "./product.module.css";
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 536px;
  border-radius: 30px;
`;
const ProductInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 165px 64px 60px;
  margin: 0 auto;
  width: 242px;
`;
const ProductTitle = styled.h3`
  margin: 0;
  color: #131313;
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const ProductDescription = styled.p`
  margin: 0;
  color: #131313;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 28px;
  letter-spacing: 1px;
  margin-top: 66px;
  margin-bottom: 50px;
`;
export default function Product({ title, img, variant, description, isFirst }) {
  return (
    <ProductContainer style={{ backgroundColor: `${variant}` }}>
      <div
        className={styles.round}
        style={{
          backgroundColor: `${variant}`
        }}
      ></div>
      <img className={styles.img} src={img} alt={title} />
      <ProductInnerContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <a href="#">
          <img
            className={`${styles.arrow} ${isFirst ? styles.firstArrow : ""}`}
            src="/images/products/arrow.svg"
            alt="arrow"
          />
        </a>
      </ProductInnerContainer>
    </ProductContainer>
  );
}
