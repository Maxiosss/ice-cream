import styles from "./Cart.module.css";
import Button from "../../components/buttons/button/Buttons";

const Cart = () => {
  return (
    <div className={styles.cartOverlay} onClick={() => {}}>
      <div className={styles.cartModal} onClick={() => {}}>
        <div className={styles.cartHeader}>
          <h2>Корзина</h2>
          <button className={styles.closeButton} onClick={() => {}}>
            ✕
          </button>
        </div>

        <div className={styles.cartContent}>
          <p>
            {" "}
            Зробити що коли в каозині немає продуктів відоображти ось цей
            контент
          </p>
          <div className={styles.emptyCart}>
            <p>Ваша корзина порожня</p>
            <p>Додайте морозиво з нашого меню!</p>
          </div>
          <p>Коли корзина містить продукти ось цей контент</p>
          <>
            <div className={styles.cartItems}>
              <p>Тут буде список продуктів</p>
              <div key={"id"} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h3>Заголовок</h3>
                  <p>Опис</p>
                  <p className={styles.itemPrice}>Ціна</p>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => {}}
                      disabled={false}
                      className={styles.quantityBtn}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>Кількість</span>
                    <button onClick={() => {}} className={styles.quantityBtn}>
                      +
                    </button>
                  </div>
                  <button onClick={() => {}} className={styles.removeBtn}>
                    Видалити
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.cartFooter}>
              <div className={styles.total}>
                <span>Загальна сума:</span>
                <span className={styles.totalPrice}>Кількість гримінів 😁</span>
              </div>
              <Button onClick={() => alert("Дякуємо за замовлення!")}>
                Оформити замовлення
              </Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Cart;
