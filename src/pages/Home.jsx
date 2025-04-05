import * as React from 'react';
import { Container, Box, Typography, Divider, TextField, Button, Link } from '@mui/material';
import CustomAppBar from '../components/CustomAppBar';
import SocialMediaButtons from '../components/SocialMediasButton';
import ResourcesList from '../components/RessourcesList';
import HowToDownload from '../components/HowToDownload';
import Footer from '../components/Footer';

export default function SimpleBackdrop() {

  return (
    <Container sx={{ minHeight: "100vh", }}>
      <CustomAppBar />
      <Divider />
      <Container 
        component="main" 
        sx={{
          display: 'flex', // Utilise le modèle flex
          flexDirection: 'column', // Aligne les éléments horizontalement (row)
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
          width: '100%',
          minHeight: '100vh', // Assure que le Container prend toute la hauteur de la page
          p: 3
        }}
      >
        
        <Typography sx={{ fontSize: 35, fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
          Free Online Video Downloader
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField label="Pass your video link here..." 
          variant="outlined"
          sx={{
            width: '600px', 
            borderColor: '#FF5733',
            '& .MuiOutlinedInput-root': {
              
            },
          }}
          />
          <Button 
            variant="contained" 
              sx={{
                width: '150px',
                height: '56px',   
                borderColor: '#FF5733',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: '#C70039',
                  
                },
          }}>
            Download</Button>
        </Box>

        <Box sx={{ p: 3, display: 'flex',  alignItems: 'center', textAlign: 'center', marginBottom: 1 }}>
          <Typography variant="body2" color="textSecondary">
            By using our service you accept our{' '}
            <Link href="/terms-of-service" underline="hover">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Box>


        <Box sx={{ p: 3, display: 'flex', flexDirection: 'row' }}>
          {/* Texte d'introduction */}
          <Typography sx={{ mr: 1 }}>
            How to download?
          </Typography>

          {/* Lien pour regarder le tutoriel */}
          <Link
            variant="contained"
            color="primary"
            component={Link}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Lien vers la vidéo tutorielle
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none' }}
          >
            Watch the tutorial
          </Link>
        </Box>

        <SocialMediaButtons />

        <Box sx={{ marginBottom: 5}} />

        <ResourcesList />

        <Box sx={{ marginBottom: 5}} />

        <HowToDownload />

        <Box sx={{ marginBottom: 5}} />
        <Divider />
        <Footer />

      </Container>

    </Container>
  );
}
