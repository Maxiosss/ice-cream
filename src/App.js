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
  };
  handleModalOpen = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  render() {
    return (
      <div className="App">
        <Header handleModal={this.handleModalOpen}/>
        <Hero />
        <Products data={data } />
        {this.state.isModalOpen && (
          <ModalBase data={data} handleModal={this.handleModalOpen} />
        )}
      </div>
    );
  }
}

export default App;
