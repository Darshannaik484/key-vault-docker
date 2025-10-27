import React from "react";
import Header from "./components/Header.jsx";
import EncryptionToolbox from "./components/main.jsx";
import AlgorithmDetails from "./components/AlgorithmDetails.jsx";
import Credits from "./components/Credits.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div>
      <Header />
      <EncryptionToolbox />
      <AlgorithmDetails />
      <Credits />
      <Footer />
    </div>
  );
}

export default App;
