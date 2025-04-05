import React from 'react';
import { Container, Typography, Link, Box, Grid } from '@mui/material';
import { YouTube, Google, Twitter, Instagram } from '@mui/icons-material';

const ResourcesList = () => {
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
      <Typography variant="h6" sx={{ marginBottom: 2 }}>All resources</Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Link href="https://www.dailymotion.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> dailymotion.com
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href="https://www.vimeo.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> vimeo.com
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href="https://www.vk.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> vk.com
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href="https://www.soundcloud.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> soundcloud.com
          </Link>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> tiktok.com
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> reddit.com
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href="https://www.threads.net" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> Threads
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href="https://www.xiaohongshu.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <YouTube sx={{ marginRight: 1 }} /> xiaohongshu.com
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcesList;
