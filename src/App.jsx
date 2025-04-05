import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import { CssBaseline, Box } from '@mui/material';
import AppRoutes from './routes/AppRoutes';

function App(){
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "grey.100" }}>
      <CssBaseline />
      <AppRoutes />
      </Box>
    </ThemeProvider>
    
  )
}

export default App;