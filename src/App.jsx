import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import CountryDetails from "./Pages/CountryDetails";
import Layout from "./Pages/Layout";
import { getCountriesThunk } from "./Store/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesThunk());
  }, []);

  return (
    <section className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
