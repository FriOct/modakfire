import { Route, Routes, Navigate } from "react-router-dom"
import {useRecoilValue } from 'recoil';
import { ThemeProvider } from "styled-components"
import { userState } from "./recoil/atoms/userAtom";

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
import ItemState from "./pages/ItemState"
import User from "./pages/MyPage/SettingPage/UserPage/User"
import UserEdit from "./pages/MyPage/SettingPage/UserPage/UserEdit"
import PeriodicalDonationManage from "./pages/MyPage/SettingPage/PeriodicalPage/PeriodicalDonationManage"
import History from "./pages/MyPage/SettingPage/History/History";
import PeriodicalDonationAdd from "./pages/MyPage/SettingPage/PeriodicalPage/PeriodicalDonationAdd"
import PeriodicalDonationDetail from "./pages/MyPage/SettingPage/PeriodicalPage/PeriodicalDonationDetail"
import PeriodicalDonationEdit from "./pages/MyPage/SettingPage/PeriodicalPage/PeriodicalDonationEdit"
import NotFound from "./pages/NotFound"

const ProtectedRoute = ({ isAuthenticated, path }) => {
  return isAuthenticated ? path : <Navigate to="/login" />;
};

const App = () => {

  const user = useRecoilValue(userState);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/mypage" element={<MyPage />} /> */}
              <Route path="/mypage" element={<ProtectedRoute isAuthenticated={user} path={<MyPage />}/>}/>
              {/* <Route path="/mypage/history" element={<History />} /> */}
              <Route path="/mypage/history" element={<ProtectedRoute isAuthenticated={user} path={<History />}/>}/>
              {/* <Route path="/payment" element={<Payment />} /> */}
              <Route path="/payment" element={<ProtectedRoute isAuthenticated={user} path={<Payment />}/>}/>
              {/* <Route path="/payment/paymentfinish" element={<PaymentFinish/>} /> */}
              <Route path="/payment/paymentfinish" element={<ProtectedRoute isAuthenticated={user} path={<PaymentFinish />}/>}/>
              {/* <Route path="/paymentDetail" element={<PaymentDetail />} /> */}
              <Route path="/paymentDetail" element={<ProtectedRoute isAuthenticated={user} path={<PaymentDetail />}/>}/>
              <Route path="/center/:centerId/*" element={<CenterHome />} />
              {/* <Route path="/setting" element={<Setting />} /> */}
              <Route path="/setting" element={<ProtectedRoute isAuthenticated={user} path={<Setting />}/>}/>
              
              <Route path="/itemstate/:itemId" element={<ItemState />} />
              {/* <Route path="/setting/user" element={<User />} /> */}
              <Route path="/setting/user" element={<ProtectedRoute isAuthenticated={user} path={<User />}/>}/>
              {/* <Route path="/setting/user/useredit" element={<UserEdit />} /> */}
              <Route path="/setting/user/useredit" element={<ProtectedRoute isAuthenticated={user} path={<UserEdit />}/>}/>
              {/* <Route path="/setting/periodicaldonation" element={<PeriodicalDonationManage/>}/> */}
              <Route path="/setting/periodicaldonation" element={<ProtectedRoute isAuthenticated={user} path={<PeriodicalDonationManage />}/>}/>
              {/* <Route path="/setting/periodicaldonation/add" element={<PeriodicalDonationAdd/>}/> */}
              <Route path="/setting/periodicaldonation/add" element={<ProtectedRoute isAuthenticated={user} path={<PeriodicalDonationAdd />}/>}/>
              {/* <Route path="/setting/periodicaldonation/detail" element={<PeriodicalDonationDetail/>}/> */}
              <Route path="/setting/periodicaldonation/detail" element={<ProtectedRoute isAuthenticated={user} path={<PeriodicalDonationDetail />}/>}/>
              {/* <Route path="/setting/periodicaldonation/edit" element={<PeriodicalDonationEdit/>}/> */}
              <Route path="/setting/periodicaldonation/edit" element={<ProtectedRoute isAuthenticated={user} path={<PeriodicalDonationEdit />}/>}/>
              <Route path="*" element={<NotFound/>} />
              
              
              
            </Routes>
          </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App

