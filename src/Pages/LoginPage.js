import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LoginImage from '../components/LoginImage';
import LoginForm from '../components/LoginForm';
import notesImage from '../images/taking_notes.png';
import { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleFormSubmit = (data) => {
    console.log(data);
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
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default LoginPage;
