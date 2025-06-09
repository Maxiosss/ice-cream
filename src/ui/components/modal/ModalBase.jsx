import { Component } from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";
class ModalBase extends Component {
  state = {
    chosenProduct: null,
    card: "",
    name: "",
    phone: "",
    comment: "",
    customers: [],
    isOpen: false,
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { card, name, phone, comment } = this.state;
    console.log(card, name, phone, comment);
  };
  handleEscape = (e) => {
    if (e.key === "Escape") {
      this.props.closeModal();
    }
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
    setTimeout(() => {
      this.props.closeModal();
    }, 1000);
  };
  componentDidMount() {
    this.props.handleModal();
    setTimeout(() => {
      this.openModal();
    }, 1000);
    document.addEventListener("keydown", this.handleEscape);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscape);
  }
  componentDidUpdate() {}
  chooseCard = (e) => {
    const liElement = e.target.closest("li");
    if (liElement && liElement.dataset.id) {
      const cardId = liElement.dataset.id;
      this.setState({ card: cardId });
    }
  };

  render() {
    const { data, productData, closeModal } = this.props;
    const { card, name, phone, comment } = this.state;
    const backdropClass = `${styles.backdrop} ${
      this.state.isOpen ? styles.open : ""
    }`;
    const modalClass = `${styles.modal} ${
      this.state.isOpen ? styles.open1 : ""
    }`;

    let modalContent;

    if (productData) {
      console.log("product", productData);

      const { id, title, image, ingredients, macronutrients, variant } =
        productData;
      modalContent = (
        <div className={styles.detailedModal} key={id}>
          <h2 className={styles.title}>{title}</h2>
          <div
            className={styles.round}
            style={{ backgroundColor: `${variant}` }}
          >
            <img className={styles.cardImg} src={image} alt={title} />
          </div>
          <ul className={styles.macronutrientsList}>
            {macronutrients.map(({ name, amount_g }, index) => {
              return (
                <li key={index} className={styles.macronutrientsListItem}>
                  <div className={styles.macronutrientsListItemCont}>
                    <div className={styles.macronutrientsListItemAmountCont}>
                      <p
                        className={`${styles.macronutrientsListItemAmount} ${styles.listItemText}`}
                      >
                        {amount_g}
                      </p>
                    </div>
                    <p
                      className={`${styles.macronutrientsListItemName} ${styles.listItemText}`}
                    >
                      {name}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <h3 className={styles.macronutrientsTitle}>Ingredients</h3>
          <ul className={styles.ingredientsList}>
            {ingredients.map(({ name, amount_g }, index) => {
              return (
                <li key={index} className={styles.ingredientsListItem}>
                  <p
                    className={`${styles.ingredientsListItemName} ${styles.listItemText}`}
                  >
                    {name}
                  </p>
                  <p
                    className={`${styles.ingredientsListItemAmount} ${styles.listItemText}`}
                  >
                    {amount_g}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      modalContent = (
        <div className={styles.buyNow}>
          <h2 className={`${styles.title} ${styles.titleBuy}`}>Buy now</h2>
          <ul className={styles.cardsList} onClick={this.chooseCard}>
            {data.map((item) => {
              const { id, title, image, variant, shadowVariant } = item;
              return (
                <li
                  key={id}
                  data-id={id}
                  className={styles.card}
                  style={
                    this.state.card == id
                      ? { backgroundColor: variant }
                      : { border: `2px solid ${variant}` }
                  }
                >
                  <div
                    className={styles.round}
                    style={{
                      backgroundColor: shadowVariant,
                      boxShadow: shadowVariant,
                    }}
                  >
                    <img className={styles.cardImg} src={image} alt={title} />
                  </div>
                  <h3 className={styles.itemTitle}>{title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return (
      <div className={backdropClass}>
        <div className={modalClass}>
          <button className={styles.closeBtn} onClick={this.closeModal}>
            <img
              className={styles.close}
              src="./images/vector.png"
              alt="close"
            />
          </button>
          {modalContent}
          <form action="" className={styles.form} onSubmit={this.handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Phone"
              name="phone"
              onChange={this.handleChange}
            />
            <textarea
              name="comment"
              className={styles.textArea}
              placeholder="Comment"
              onChange={this.handleChange}
            ></textarea>
            <Button arrow={false} variant="modal" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
ModalBase.defaultProps = {
  isDetailedModal: false,
};
export default ModalBase;
