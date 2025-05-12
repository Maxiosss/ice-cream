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
export default function Products() {
  return (
    <ProductSection>
        <ProductsSubTitle>100% natural</ProductsSubTitle>
        <ProductsTitle>products</ProductsTitle>
        <ProductsInnerContainer>
          <Product
            title={"ice cream"}
            img={"/images/products/ice.png"}
          variant={"#AEC6A5"}
          isFirst = {true}
          >
            Soft ice cream with a delicate taste. Made with milk, cream, sugar
            and natural stabilizer
          </Product>
          <Product
            title={"ice coffee"}
            img={"/images/products/coffee.png"}
            variant={"#EFD478"}
          >
            Fragrant invigorating drink created from 100% natural ingredients
            without the use of preservatives and flavor enhancers
          </Product>
          <Product
            title={"milkshakes"}
            img={"/images/products/milkshake.png"}
            variant={"#D6936D"}
          >
            Sweet drinks based on milk and ice cream, supplemented with syrups,
            fruits, berries and other sweets of your choice
          </Product>
        </ProductsInnerContainer>
    </ProductSection>
  );
}
