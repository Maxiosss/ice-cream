import "./App.css";
import Header from "./ui/sections/header/Header";
import Hero from "./ui/sections/hero/Hero";
import Products from "./ui/sections/products/Products";
import ModalBase from "./ui/components/modal/ModalBase";
import data from "./data/products.json";
import { Component } from "react";
class App extends Component {
  state = {
    isModalOpen: false,
    productData: null,
  };
  handleModalOpen = () => {
    console.log("click");
    this.setState(() => ({
      isModalOpen: true,
    }));
  };
  selectedProduct = (product) => {
    this.setState(() => ({
      productData: product,
    }));
  };
  closeModal = () => {
    this.setState(() => ({
      isModalOpen: false,
      productData: null,
    }));
  };
  render() {
    return (
      <div className="App">
        <Header handleModal={this.handleModalOpen} />
        <Hero />
        <Products
          data={data}
          handleModal={this.handleModalOpen}
          selectedProduct={this.selectedProduct}
        />
        {this.state.isModalOpen && (
          <ModalBase
            data={data}
            handleModal={this.handleModalOpen}
            productData={this.state.productData}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
