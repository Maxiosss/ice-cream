import { Component } from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";
class ModalBase extends Component {
            defaultProps = {
            isDetailedModal: false
        }
    render() {
      const { data, isDetailedModal, handleModal } = this.props;
      return (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={handleModal}>
              <img
                className={styles.close}
                src="/images/vector.png"
                alt="close"
              />
            </button>
            {isDetailedModal ? (
              <div className={styles.detailedModal}></div>
            ) : (
              <div className={styles.buyNow}>
                <h2 className={styles.title}>Buy now</h2>
                <ul className={styles.cardsList}>
                  {data.map((item, index) => {
                    const { id, title, image } = item;
                    return (
                      <li key={id} className={styles.card}>
                        <div className={styles.outline}>
                          <img
                            className={styles.cardImg}
                            src={image}
                            alt={title}
                          />
                          <h3 className={styles.itemTitle}>{title}</h3>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <form action="">
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Phone"
                    name="phone"
                  />
                  <textarea
                    name="message"
                    className={styles.textArea}
                    placeholder="Message"
                  ></textarea>
                  <Button arrow={false} variant="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      );}
}
export default ModalBase;
