import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navBar";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
// import LoadingScreen from "./components/LoadingScreen/loadingScreen";
import Contact from "./components/Contact/contact";
import ChatBot from "./components/ChatBot/bot";
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import ScrollUp from "./components/ScrollUp/scrollUp";
import ShelfTalker from "./components/ShelfTalkerPage/shelfTalker";
import Services from "./components/WeBuild/services"
import Feedbacks from "./components/Feedbacks/feedbacks"


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
                  <Services/>
                  {/* <About /> */}
                  <Feedbacks/>

                  
                </>
              } 
              />
              <Route path="/ShelfTalkerPage/shelfTalker" element={<ShelfTalker />} />
              <Route path="/About" element={<About />}/>
              <Route path="/Contact" element={<Contact />}/>
            </Routes>
            <ScrollUp /> {/* Add ScrollUp button here */}
          </>
        {/* )} */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
