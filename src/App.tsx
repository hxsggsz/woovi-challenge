import Home from "./pages/home";
import Payment from "./pages/payment";
import { Route, Routes } from "react-router-dom";
import PixPayment from "./pages/pix-payment";

function App() {
  return (
    <Routes>
      <Route path="/woovi-challenge" element={<Home />} />
      <Route path="/woovi-challenge/payment" element={<Payment />} />
      <Route path="/woovi-challenge/pix-payment" element={<PixPayment />} />
    </Routes>
  );
}

export default App;
