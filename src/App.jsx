import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
