import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navBar";
import About from "./components/About/about";
import Services from './components/WeBuild/services';
import Footer from "./components/Footer/footer";
// import LoadingScreen from "./components/LoadingScreen/loadingScreen";
import Contact from "./components/Contact/contact";
import ChatBot from "./components/ChatBot/bot";
import TarpPrinting from "./components/ServicesPage/TarpPrinting/tarpPrinting"; 
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import ScrollUp from "./components/ScrollUp/scrollUp"; // Import ScrollUp component

function App() {
  // const [loading, setLoading] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);

  // useEffect(() => {
  //   const loadingTimer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(loadingTimer);
  // }, []);

  useEffect(() => {
    // if (!loading) {
      const chatBotTimer = setTimeout(() => {
        setShowChatBot(true);
      }, 3000);

      return () => clearTimeout(chatBotTimer);
    // }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* {loading ? (
          <LoadingScreen />
        ) : ( */}
          <>
            {showChatBot && <ChatBot />}
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Services />
                  <About />
                  <Contact />
                  <Footer />
                </>
              } 
              />
              <Route path="/ServicesPage/TarpPrinting" element={<TarpPrinting />} />
            </Routes>
            <ScrollUp /> {/* Add ScrollUp button here */}
          </>
        {/* )} */}
      </div>
    </Router>
  );
}

export default App;
