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
import CenterHome from "./pages/CenterHome/CenterHome"
import MyPage from "./pages/MyPage"
import Payment from "./pages/Payment"
import Setting from "./pages/Setting"
import PaymentFinish from "./pages/PaymentFinish"
import PaymentDetail from "./pages/PaymentDetail"

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
              <Route path="/payment" element={<Payment />} />
              <Route path="/center/:centerId/*" element={<CenterHome />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/payment/paymentfinish" element={<PaymentFinish/>} />
              <Route path="/paymentDetail/:inputValue" element={<PaymentDetail />} />
            </Routes>
          </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
