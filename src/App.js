import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Home, Footer, Contents} from './components'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={[<Header />, <Home />, <Contents />, <Footer />]}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
