import Header from "./componenets/header/Header";
import Home from "./componenets/home/Home";
import Body from "./componenets/body/Body";
import Footer from "./componenets/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from "./componenets/clock/Clock";
import './App.css';

function App() {
  

  return (
    <>
    <div className="app" >
      {/* <Clock /> */}
      <Header clock={Clock} />
      <Home />
      <Body />
      <Footer />
      </div>
    </>
  )
}

export default App
