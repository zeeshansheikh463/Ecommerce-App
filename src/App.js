import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
