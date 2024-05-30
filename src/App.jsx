import { Route, Routes } from "react-router-dom"
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/GlobalStyle"
import './App.css'

import Header from "./layouts/Header"
import theme from "./styles/theme"
import Footer from "./layouts/Footer"
import Main from "./layouts/Main"
import Home from "./pages/Home"
import Login from "./pages/Login"
import CenterHome from "./pages/CenterHome/CenterHome"
import MyPage from "./pages/MyPage/MyPage"
import Payment from "./pages/Payment"
import Setting from "./pages/MyPage/SettingPage/Setting"
import PaymentFinish from "./pages/PaymentFinish"
import PaymentDetail from "./pages/PaymentDetail"
import User from "./pages/MyPage/SettingPage/UserPage/User"
import UserEdit from "./pages/MyPage/SettingPage/UserPage/UserEdit"
import PeriodicalDonationManage from "./pages/MyPage/SettingPage/PeriodicalPage/PeriodicalDonationManage"
import PeriodicalDonationAdd from "./pages/MyPage/SettingPage/PeriodicalPage/PeriodicalDonationAdd";

const App = () => {
  return (
    <RecoilRoot>
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
              <Route path="/setting/user" element={<User />} />
              <Route path="/setting/user/useredit" element={<UserEdit />} />
              <Route path="/setting/periodicaldonation" element={<PeriodicalDonationManage/>}/>
              <Route path="/setting/periodicaldonation/add" element={<PeriodicalDonationAdd/>}/>
            </Routes>
          </Main>
        <Footer />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
