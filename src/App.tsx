import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AuthLayout from "./components/layout/AuthLayout"; 
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import AboutLearnMore from "./pages/about/components/AboutLearnMore";
import WhatsDealZoneLearnMore from "./pages/about/components/WhatsDealZoneLearnMore";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blog from "./pages/blog/Blog";
import NotFound from "./pages/notfound/NotFound";
import Buy from "./pages/buy/buy";
import BecomeProvider from "./pages/becomeprovider/BecomeProvider";
import BecomeProfessional from "./pages/becomeprovider/components/BecomeProfessional";
import AllArticles from "./pages/blog/components/AllArticles";
import FirestoreTest from "./pages/FirestoreTest";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-learn-more" element={<AboutLearnMore />} />
          <Route path="/whats-dealzone-learn-more" element={<WhatsDealZoneLearnMore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/become-provider" element={<BecomeProvider />} />
          <Route path="/become-professional" element={<BecomeProfessional />} />
          <Route path="/allarticles" element={<AllArticles />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
                    <Route path="/firestore-test" element={<FirestoreTest />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
