import Header from "./componenets/header/Header";
import Home from "./componenets/home/Home";
import Body from "./componenets/body/Body";
import Footer from "./componenets/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  

  return (
    <>
    <div className="app" >
      <Header />
      <Home />
      <Body />
      <Footer />
      </div>
    </>
  )
}

export default App
