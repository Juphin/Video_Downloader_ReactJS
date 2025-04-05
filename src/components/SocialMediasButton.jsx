import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';
import { ThemeProvider } from '@mui/system';
import theme from '../theme/theme';

function SocialMediaButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly', // Espaces égaux entre les boutons
          alignItems: 'center',
          width: '100%',
          p: 2
        }}
      >
        {/* Bouton Facebook */}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Facebook />}
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)' // Couleur transparente avec le fond primaire
            }
          }}
        >
          <Typography variant="body1">Facebook</Typography>
        </Button>

        {/* Bouton Instagram */}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Instagram />}
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)'
            }
          }}
        >
          <Typography variant="body1">Instagram</Typography>
        </Button>

        {/* Bouton YouTube */}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<YouTube />}
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)'
            }
          }}
        >
          <Typography variant="body1">YouTube</Typography>
        </Button>

        {/* Bouton Twitter */}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Twitter />}
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)'
            }
          }}
        >
          <Typography variant="body1">Twitter</Typography>
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default SocialMediaButtons;
