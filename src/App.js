import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Header from "./containers/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
