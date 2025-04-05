import { createTheme } from '@mui/material/styles';

// Définir le thème personnalisé pour l'application
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Couleur rouge comme YouTube
    },
    secondary: {
      main: '#FFC107', // Couleur secondaire : jaune pour mettre en valeur certains éléments (comme des notifications)
    },
    background: {
      default: '#B0B0B0', // Gris clair comme fond de l'application
      paper: '#808080',   // Gris plus sombre pour les papiers de fond (cartes, modaux, etc.)
    },
    text: {
      primary: '#000000', // Texte principal en noir
      secondary: '#333333', // Texte secondaire en gris foncé
    },
    error: {
      main: '#D32F2F', // Couleur pour les erreurs
    },
    success: {
      main: '#388E3C', // Couleur pour les messages de succès
    },
    info: {
      main: '#1976D2', // Couleur d'information (bleu)
    },
    warning: {
      main: '#F57C00', // Couleur d'avertissement (orange)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Police par défaut
    h1: {
      fontWeight: 700,
      fontSize: '2.25rem',
      color: '#000000', // Titre en rouge comme la couleur primaire
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      color: '#FF0000', // Titre en rouge
    },
    body1: {
      fontSize: '1rem',
      color: '#000000', // Texte de paragraphe en noir
    },
  },
  components: {
    // Personnaliser les styles des boutons
    /*MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#FF0000', // Boutons en rouge
          color: '#FFFFFF', // Texte blanc sur les boutons
          '&:hover': {
            backgroundColor: '#D32F2F', // Couleur plus foncée lors du survol
          },
        },
      },
    },*/
    // Personnaliser les champs de texte
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF5733',
              borderWidth: '5px',
            },
            '&:hover fieldset': {
              borderColor: '#FF5733',
              borderWidth: '5px',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF5733',
              borderWidth: '5px',
            },
          },
        },
      },
    },
    // Personnaliser la barre d'applications (AppBar)
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FF0000', // AppBar rouge
          color: '#FFFFFF', // Texte de l'AppBar en blanc
        },
      },
    },
  },
});

export default theme;
