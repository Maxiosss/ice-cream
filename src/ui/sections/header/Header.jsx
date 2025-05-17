import styles from "./header.module.css";
import Button from "../../components/button/Button";
import { Component } from "react";
class Header extends Component {
  render() {
    const { handleModal } = this.props;
    return (
      <header>
        <div className={`container ${styles.content}`}>
          <img src="./icons/ice-cream-logo.svg" alt="Logo" width={60} />

          <nav>
            <ul className={styles.nav}>
              <li className={styles.navItem}>
                <a href="/">Home</a>
              </li>
              <li className={styles.navItem}>
                <a href="#made">How it's made?</a>
              </li>
              <li className={styles.navItem}>
                <a href="#product">Our products</a>
              </li>
              <li className={styles.navItem}>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </nav>
          <Button arrow={true} variant="primary" onClick={handleModal}>
            Buy now
          </Button>
          {/* <Button arrow={true} variant="outline">
          Buy now
        </Button> */}
        </div>
      </header>
    );
  }
}
export default Header;
