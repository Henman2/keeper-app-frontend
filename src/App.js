import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import './styles/App.css';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
