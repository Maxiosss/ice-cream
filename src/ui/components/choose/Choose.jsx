import Title from "../../components/title/Title";
import Button from "../../components/buttons/button/Buttons";
import CartButton from "../../components/cart/CartButton";

import styles from "./Choose.module.css";
import { useEffect, useState, useRef, useMemo } from "react";

const Choose = () => {
  const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState()
    const searchRef = useRef()
    const [inputValue, setInpValue] =  useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ice-cream-2eaa4-default-rtdb.europe-west1.firebasedatabase.app/show.json"
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchData();
  }, []);
    const handleSearch = () => {setInpValue(searchRef.current.value)}
    const filteredProducts = useMemo(() => {
        return products.filter((products => products.title.includes(searchRef)))
    }, [products, inputValue])
  return (
    <section>
      <div className="container">
        <div className="">
          <div className={styles.headerSection}>
            <Title
              subTitle="ice cream made with passion"
              title="choose your favorite"
              isFonColor={true}
            />
            <CartButton itemCount={0} onClick={() => {}} />
          </div>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search"
                          className={styles.searchInput}
                          ref={searchRef}
            />
            <Button onClick={() => {}}>Choose</Button>
          </div>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <ul className={styles.cardList}>
            {products.map((product) => {
              return (
                <li
                  key={product.id}
                  style={{ backgroundColor: product.colors[0] }}
                  className={styles.card}
                >
                  <div
                    className={styles.cardContent}
                    style={{ backgroundColor: product.colors[1] }}
                  >
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Choose;
