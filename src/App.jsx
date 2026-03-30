import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Signup from "./components/SignUp";
import StartMining from "./pages/StartMining";
import Deposit from "./pages/Deposit";
import Referral from "./pages/Referral";
import Withdraw from "./pages/Withdrawal";
import DashboardLayout from "./layout/DashboardLayout"; 
import EarningsAnalytics from "./pages/EarningsAnalytics"; 
import Marketplace from "./pages/Marketplace"; 
import { BtcProvider } from "./context/BtcContext";

function App() {
  const isLoggedIn = true; 

  return (
    <BtcProvider>
      <BrowserRouter>
        <Routes>
          {/* Logged-in user routes */}
          {isLoggedIn ? (
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/mining" element={<StartMining />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdrawal" element={<Withdraw />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/earnings" element={<EarningsAnalytics />} />
              <Route path="/marketplace" element={<Marketplace />} />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </BtcProvider>
  );
}

export default App;