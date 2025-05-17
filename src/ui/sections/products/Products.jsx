import Product from "./Product";
import styled from "styled-components";
const ProductsSubTitle = styled.h3`
  color: #131313;
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const ProductsTitle = styled.h2`
  color: #131313;
  font-size: 36px;
  font-family: "Seymour One", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 303px;
`;
const ProductsInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 29px;
`;
const ProductSection = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 58px;
  background-color: #ffff;
  background-image: url("/images/products/productsback.png");
  background-repeat: no-repeat;
`;
export default function Products({ data }) {
  return (
    <ProductSection>
      <ProductsSubTitle>100% natural</ProductsSubTitle>
      <ProductsTitle>products</ProductsTitle>
      <ProductsInnerContainer>
        {data.map((item, index) => {
          const { id, title, description, image, variant } = item;
          return (
            <Product
              key={id}
              title={title}
              description={description}
              img={image}
              variant={variant}
              isFirst={index === 0}
            />
          );
        })}
      </ProductsInnerContainer>
    </ProductSection>
  );
}
