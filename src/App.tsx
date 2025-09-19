import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import AboutLearnMore from "./pages/about/components/AboutLearnMore";
import WhatsDealZoneLearnMore from "./pages/about/components/WhatsDealZoneLearnMore";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Blog from "./pages/blog/Blog";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* All pages go through Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-learn-more" element={<AboutLearnMore />} />
          <Route path="/whats-dealzone-learn-more" element={<WhatsDealZoneLearnMore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
