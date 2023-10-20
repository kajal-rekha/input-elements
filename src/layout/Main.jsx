import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
export const DataProvider = createContext();

const Main = () => {
  const [formData, setFormData] = useState([]);

  const getData = (inputs) => {
    console.log(inputs);
    setFormData([...formData, inputs]);
  };
  return (
    <DataProvider.Provider value={{ getData, formData }}>
      <Navbar />
      <Outlet />
      <Footer />
    </DataProvider.Provider>
  );
};

export default Main;
