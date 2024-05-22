import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import './styles/App.css';

const App = ()=> {
    return (
        <div className="App">
            <Header/>
            <main>
            <Routes>
                <Route path='/' key="home" element={<HomePage/>} />
            </Routes>   
            </main>
            <Footer/>
        </div>
    );
    }
export default App;
