import React from 'react';
import { Container, Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4, // Padding vertical
        mt: 4, // Margin top pour laisser un espace
        borderTop: '1px solid #e0e0e0', // Une légère ligne pour séparer le footer du contenu
        width: '100%', // S'assure que le footer prend toute la largeur de son parent
        backgroundColor: '#f5f5f5', // Optionnel: Ajout d'un fond gris clair
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Colonne 1: Copyright */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              © 2008-2025
            </Typography>
          </Grid>

          {/* Colonne 2: Liens principaux */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>YouTube</Typography>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>YouTube to mp4</Link>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>YouTube Mp3</Link>
          </Grid>

          {/* Colonne 3: Instagram, TikTok */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Instagram</Typography>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>IG stories</Link>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>Instagram reels</Link>

            <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>TikTok</Typography>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>TikTok mp4</Link>
          </Grid>

          {/* Colonne 4: Support & Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Support</Typography>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>FAQ</Link>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>Feedback</Link>

            <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>Legal</Typography>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="#" sx={{ display: 'block', textDecoration: 'none' }}>Privacy Policy</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
