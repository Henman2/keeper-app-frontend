import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import './styles/App.css';

const App = ()=> {
  return (
      <div className="App">
          <Header/>
          <main>
              <HomePage/>
          </main>
          <Footer/>
      </div>
  );
}
export default App;
