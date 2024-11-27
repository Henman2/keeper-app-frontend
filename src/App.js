import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage.js';
import UserPage from './Pages/UserPage';
import { ProtectedRoute } from './utiliti/authenticate.js';
import './styles/App.css';

const App = () => {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/login' && location.pathname !== '/register';
  
    return (
      <div className='app-container'>
        {showHeaderFooter && <Header />}
        <main className={!showHeaderFooter ? 'main-login' : ''}>
          <Routes>
            <Route path='/' key='home' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path='/login' key='login' element={<LoginPage isLogin={true} />} />
            <Route path='/register' key='register' element={<LoginPage isLogin={false} />} />
            <Route path='/user' key='user' element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
          </Routes>
        </main>
        {showHeaderFooter && <Footer />}
      </div>
    );
    }
export default App;
