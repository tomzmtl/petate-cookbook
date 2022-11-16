import "./styles.scss"
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Box,
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import RecipeCard from "../RecipeCard/RecipeCard"

const theme = createTheme()

const App = () => {
  const recipe = {
    name: "Granola maison",
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Les recettes de Petate
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: "0 auto", p: 2 }}>
        <Stack spacing={2}>
          <RecipeCard recipe={recipe} />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
