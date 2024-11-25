import Box from '@mui/material/Box';

const LoginImage = ({ image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FFFF',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', md: 'block' },
      }}
    />
  );
};

export default LoginImage;
