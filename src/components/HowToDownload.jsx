import React from 'react';
import { Container, Typography, Box, Button, Grid, Link } from '@mui/material';

const HowToDownload = () => {
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
    >
      {/* Titre principal */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        How to Download Videos Using SaveFrom.Net
      </Typography>

      {/* Section d'introduction */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Get your favorite online videos and music quickly with SaveFrom.Net, a trusted name in web-based video downloading. Our powerful online tool lets you save media directly from popular platforms without installing complex programs.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Whether you're on your desktop or mobile device, our straightforward interface makes downloading your preferred content a breeze. From viral YouTube videos and popular shows to must-see sports moments, SaveFrom.Net handles it all.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Simply copy your desired video's URL, paste it into our download field, and click the Download button - it's that simple. Want even faster access? Try our Chrome extension, which integrates smoothly with your browser for instant downloading capabilities.
        </Typography>
      </Box>

      {/* Section de téléchargement MP4 */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Download High-Quality MP4 Videos
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Streaming videos online with a fast connection offers immediate access, but offline playback comes with its own advantages. SaveFrom.Net provides a powerful video downloader that keeps your downloads in pristine visual quality, enabling you to save videos in clear, high-definition MP4 format.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          With our reliable service, enjoy your favorite videos anytime, anywhere, by converting and saving them as high-quality HD MP4 files.
        </Typography>
      </Box>

      {/* Call-to-action : Télécharger */}
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Try Downloading Now
      </Button>

      {/* Lien vers l'extension Chrome */}
      <Box sx={{ marginTop: 2 }}>
        <Link href="https://www.savefrom.net" target="_blank" rel="noopener noreferrer">
          <Typography variant="body2" color="primary">
            Get the Chrome Extension for Faster Downloads
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default HowToDownload;
