import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import MainContent from "./Components/Main/MainContent";
import Footer from "./Components/Footer/Footer";
import AuthorInfo from "./Components/AuthorInfo/AuthorInfo";

function App() {
  return (
    <>
      <Header />
      <main>
        <AuthorInfo />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
