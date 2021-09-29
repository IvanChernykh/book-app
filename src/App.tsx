import React from "react";
import api from "./api/api";
import BooksResults from "./components/BooksResults";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <BooksResults />
    </div>
  );
}
export default App;
