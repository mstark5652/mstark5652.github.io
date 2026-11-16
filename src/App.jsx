import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

import theme from "./common/theme"

import Header from "./components/Header"
import Layout from "./components/Layout"
import About from "./views/About"
import ProjectsView from "./views/ProjectsView"

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Layout>
      <About />
      <ProjectsView />
    </Layout>
  </ThemeProvider>
)

export default AppContainer
