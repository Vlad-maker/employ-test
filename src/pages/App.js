import "./App.scss";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Order from "../components/Order/Order";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <section className="app">
      <Header />
      <Main />
      <Order />
      <Footer />
    </section>
  );
}

export default App;
