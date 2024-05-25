import Header from "./layouts/Header"
import GlobalStyle from "./styles/GlobalStyle"
import './App.css'
import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"
import Footer from "./layouts/Footer"
import Main from "./layouts/Main"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import CenterHome from "./pages/CenterHome"
import MyPage from "./pages/MyPage"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/center/:centerId" element={<CenterHome />} />
            </Routes>
          </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
