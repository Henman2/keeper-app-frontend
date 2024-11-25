import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { useState } from 'react';

const LoginForm = ({ isLogin, toggleForm, onSubmit }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { email, password };
        if (!isLogin) {
            data.username = username;  
          data.confirmPassword = confirmPassword; // Include confirmPassword only for registration
        }
        onSubmit(data);
    }
    return (
        <Grid
            container
            component={Paper}
            elevation={6}
            square
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#81AD93',
            color: '#2D6A4F',
            }}
        >
            <Box
            sx={{
                width: { xs: '90%', sm: '80%', md: '70%' },
                my: 4,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography
                component='h1'
                variant='h4'
                sx={{ py: 2, color: '#FFFF' }}
            >
                {isLogin ? 'Sign In' : 'Sign Up'}
            </Typography>
            {/* form */}
            <Box
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{
                mt: 1,
                }}
                >
                {!isLogin && (
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='User Name'
                        name='username'
                        autoComplete='User Name'
                        autoFocus
                        className='login-text-field'
                        value={username}
                        onChange ={(e)=> setUsername(e.target.value)}
                    />
                    )}
                <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                className='login-text-field'
                value={email}
                onChange ={(e)=> setEmail(e.target.value)}
                />
                <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete='current-password'
                className='login-text-field'
                
                />
                {!isLogin && (
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='confirmPassword'
                    label='Confirm Password'
                    type='password'
                            id='confirmPassword'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                    autoComplete='new-password'
                    className='login-text-field'
                />
                )}
                {isLogin && (
                <FormControlLabel
                    control={<Checkbox value='remember' />}
                    label='Remember me'
                />
                )}
                <Button
                type='submit'
                fullWidth
                variant='contained'
                className='login-button'
                sx={{
                    mt: 3,
                    mb: 2,
                }}
                >
                {isLogin ? 'Sign In' : 'Sign Up'}
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href='#' variant='body2' className='login-link'>
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link
                    href='#'
                    variant='body2'
                    className='login-link'
                    onClick={toggleForm}
                    >
                    {isLogin
                        ? "Don't have an account? Sign Up"
                        : 'Already have an account? Sign In'}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            {/* Sign up form */}
            </Box>
        </Grid>
        );
}

export default LoginForm