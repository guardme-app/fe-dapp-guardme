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

import { useState } from 'react';
import { Button } from '@/presentation/components/Button/Button';
import Image from 'next/image';
import appleId from '@/presentation/assets/apple-id.png';
import google from '@/presentation/assets/google.png';
import gLogo from '@/presentation/assets/g-logo.png';
import arrowLeft from '@/presentation/assets/arrow-left.png';
import { SignUpStyles } from '@/presentation/views/SignUp/styles';

export const SignUp: React.FC = () => {
  const [showSignUpOptions, setShowSignUpOptions] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      cpf: data.get('cpf'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleGoogleAuth = () => {
    //toDo
  };

  const handleAppleAuth = () => {
    //toDo
  };

  const handleSignUpWithEmail = () => {
    setShowSignUpOptions(false);
  };

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
            padding: { md: '24px 48px', xs: 'unset' },
          }}
        >
          <Image src={gLogo} alt="guard me icon" width={48} height={64} />
          <SignUpStyles.Title>
            Sign Up & explore the world of decentralized insurance.
          </SignUpStyles.Title>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            minWidth="80%"
          >
            {showSignUpOptions ? (
              <>
                <Grid container>
                  <Grid item xs={12}>
                    <Button.Outlined
                      type="button"
                      style={SignUpStyles.personalizedButton}
                      onClick={handleGoogleAuth}
                    >
                      <Image src={google} width={24} height={24} alt="google" />
                      Continue with Google
                    </Button.Outlined>
                  </Grid>
                  {/* <Grid item xs={12}>
                    <Button.Outlined
                      type="button"
                      style={SignUpStyles.personalizedButton}
                      onClick={handleAppleAuth}
                    >
                      <Image
                        src={appleId}
                        width={24}
                        height={24}
                        alt="apple id"
                      />
                      Continue with Apple ID
                    </Button.Outlined>
                  </Grid> */}
                </Grid>
                <Typography
                  variant="body2"
                  align="center"
                  sx={SignUpStyles.Divider}
                />
                <Grid item xs={12}>
                  <Button.Default
                    type="button"
                    style={SignUpStyles.personalizedButton}
                    onClick={handleSignUpWithEmail}
                  >
                    {/* <Image
                      src={appleId}
                      width={24}
                      height={24}
                      alt="apple id"
                    /> */}
                    Sign Up with E-mail
                  </Button.Default>
                </Grid>

                <Grid
                  container
                  sx={{ justifyContent: 'center', marginTop: '.5rem' }}
                >
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {'Already have an account? Login'}
                    </Link>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <SignUpStyles.Back onClick={() => setShowSignUpOptions(true)}>
                  <Image
                    src={arrowLeft}
                    alt="guard me icon"
                    width={28}
                    height={28}
                  />
                  Back
                </SignUpStyles.Back>
       
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                <Button.Default
                  type="submit"
                  style={{
                    width: '100%',
                    marginTop: '10px',
                    height: '3rem',
                  }}
                >
                  Sign Up
                </Button.Default>
              </>
            )}
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
