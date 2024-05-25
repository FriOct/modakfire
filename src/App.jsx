import Header from "./layouts/Header"
import GlobalStyle from "./styles/GlobalStyle"
import './App.css'
import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"
import Footer from "./layouts/Footer"
import Main from "./layouts/Main"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
