import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import SendEmail from './pages/SendEmail/SendEmail';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Error404 from './pages/Error404/Error404';
import Navbar from "./components/Navbar";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send-verify-mail" element={<SendEmail />} />
        <Route path="/email-verify/:token" element={<EmailVerify />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password-verify/:token" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </Router>
  )
}

export default App