import "./App.css";
import Header from "./ui/sections/header/Header";
import Hero from "./ui/sections/hero/Hero"
import Products from "./ui/sections/products/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products/>
    </div>
  );
}

export default App;
