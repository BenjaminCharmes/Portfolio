// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Hooks
import { useEffect } from "react";

// Jotai
import { Provider, useAtomValue } from 'jotai';
import appStateStore from './store/appStateStore';

// Pages
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';

// SCSS
import "./styles/App.scss"

function App() {

  const appState = useAtomValue(appStateStore);

  return (
    <Provider stores={[appStateStore]}>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  )
}

export default App;
