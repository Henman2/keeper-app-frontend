import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LoginImage from '../components/LoginImage';
import LoginForm from '../components/LoginForm';
import notesImage from '../images/taking_notes.png';
// import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = ({isLogin}) => {
  // const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  //Adjust toggle function to handle navigation between login and register
  const toggleForm = () => {
    // setIsLogin(!isLogin);
    if (location.pathname === '/login') {
      navigate('/register'); 
    } else {
      navigate('/login');
    }
  };

  const handleFormSubmit = async (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      credentials: 'include',
      body: JSON.stringify(data),
    };
    console.log(data);
      try {
        const url = isLogin ? `${baseURL}/users/login` : `${baseURL}/users/register`;
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error('failed to fetch user data');
        }
        const userdata = await response.json();
        console.log(userdata);
        if (isLogin) {
          localStorage.setItem('user', JSON.stringify(userdata)); //store userdata
          navigate('/');
        }
        else {
          alert('Registration successful! Please log in.');
          navigate('/login');
        }
      } catch (err) {
        console.error('Error during login/register:', err);
      }
};

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '65% 35%' },
        height: '100vh',
      }}
    >
      <CssBaseline />
      {/* Left Image Section */}
      <LoginImage image={notesImage} />
      {/* Right Form Section */}
      <LoginForm
        isLogin={isLogin}
        toggleForm={toggleForm}
        submitInput={handleFormSubmit}
      />
    </Box>
  );
};

export default LoginPage;
