import Navbar from "./components/NavBar/navBar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Services from './components/WeBuild/services';
// import Land from "./components/WeSell/land";
import Footer from "./components/Footer/footer";
import LoadingScreen from "./components/LoadingScreen/loadingScreen";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/contact";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
       
        <LoadingScreen />
      ) : (
     
        <>
          <Navbar />
          <Intro />
          <Services />
          <About />
          
          {/* <Land /> */}
          
          <Contact/>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
