// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Jotai
import { Provider, useAtomValue } from "jotai";
import appStateStore from "./store/appStateStore";

// Pages
import About from "./pages/About/About";
import CV from "./pages/CV/CV";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// SCSS
import "./styles/App.scss";

function App() {
  const appState = useAtomValue(appStateStore);

  return (
    <Provider stores={[appStateStore]}>
      <div className='app'>
        <Router>
          <div className='page'>
            <div className='page-content overflow-visible'>
              <Navbar />
              <Routes>
                <Route path='/' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/cv' element={<CV />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
