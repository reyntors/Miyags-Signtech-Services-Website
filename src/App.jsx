import Navbar from "./components/NavBar/navBar";
// import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Services from './components/WeBuild/services';
// import Land from "./components/WeSell/land";
import Footer from "./components/Footer/footer";
// import LoadingScreen from "./components/LoadingScreen/loadingScreen";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/contact";
import ChatBot from "./components/ChatBot/bot";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   };

  //   fetchData();
  // }, []);

  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    // Delay the display of the ChatBot component
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 3000); // 2-second delay

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* {loading ? (
       
        <LoadingScreen />
      ) : (
      */}
        <>
      
          {showChatBot && <ChatBot />}
          <Navbar />
          {/* <Intro /> */}
          <Services />
          <About />
          
          {/* <Land /> */}
          
          <Contact/>
          <Footer />
        </>
      {/* )} */}
    </div>
  );
}

export default App;
