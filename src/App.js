import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage.js';
import UserPage from './Pages/UserPage';
import './styles/App.css';

const App = () => {
    const location = useLocation();
    const showHeaderFooter = location.pathname !== '/login';
    const isLoginPage = location.pathname === '/login';
    return (
      <div className='app-container'>
        {showHeaderFooter && <Header />}
        <main className={isLoginPage ? '' : 'main-login'}>
          <Routes>
            <Route path='/' key='home' element={<HomePage />} />
            <Route path='/login' key='login' element={<LoginPage />} />
            <Route path='/user' key='login' element={<UserPage />} />
          </Routes>
        </main>
        {showHeaderFooter && <Footer />}
      </div>
    );
    }
export default App;
