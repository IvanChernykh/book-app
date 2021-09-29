import React from "react";
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
