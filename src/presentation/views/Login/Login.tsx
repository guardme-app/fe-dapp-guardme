'use client';

import {
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';

import { Button } from '@/presentation/components/Button/Button';
import Image from 'next/image';
// import appleId from '@/presentation/assets/apple-id.png';
import google from '@/presentation/assets/google.png';
import gLogo from '@/presentation/assets/g-logo.png';

import { LoginStyles } from './styles';
import { useAuthGoogle } from '@/core/hooks/useAuthGoogle';
import { useWallet } from '@/core/hooks/useWallet';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const Login: React.FC = () => {
  const { signIn } = useAuthGoogle();
  const { buyPlan, userId } = useWallet();
  const { user } = useAuthGoogle();
  const pathname = usePathname();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleGoogleAuth = () => {
    try {
      signIn();
      router.push(`/`);
    } catch {}
  };

  // const handleAppleAuth = () => {
  //   signInWithApple();
  // };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 5,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: { md: '0px 48px', xs: 'unset' },
          }}
        >
          <Image src={gLogo} alt="guard me icon" width={48} height={64} />
          <LoginStyles.Title>Welcome Back!</LoginStyles.Title>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {' '}
            <Button.Outlined
              type="button"
              style={LoginStyles.personalizedButton}
              onClick={handleGoogleAuth}
            >
              <Image src={google} width={24} height={24} alt="google" />
              Continue with Google
            </Button.Outlined>
            {/* <Button.Outlined
              type="button"
              style={LoginStyles.personalizedButton}
              onClick={handleAppleAuth}
            >
              <Image src={appleId} width={24} height={24} alt="apple id" />
              Login with Apple ID
            </Button.Outlined> */}
            <Typography
              variant="body2"
              align="center"
              sx={LoginStyles.Divider}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button.Default
              type="submit"
              style={LoginStyles.personalizedButton}
            >
              Login
            </Button.Default>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};
