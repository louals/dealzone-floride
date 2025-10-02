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
import Sell from "./pages/sell/Sell";
import FirestoreTest from "./pages/FirestoreTest";
import CompleteProfile from "./pages/completeprofile/CompleteProfile";
import ProfileGuard from "./components/auth/ProfileGuard";
import AuthGuard from "./components/auth/AuthGuard";
import BecomeProfessional2 from "./pages/becomeprovider/components/BecomeProfessional2";
import BecomeProfessional3 from "./pages/becomeprovider/components/BecomeProfessional3";
import ApplicationSuccess from "./pages/becomeprovider/components/ApplicationSuccess";

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
          <Route path="/Become-Professional-2" element={<BecomeProfessional2 />} />
          <Route path="/Become-Professional-3" element={<BecomeProfessional3 />} />
          <Route path="/application-success" element={<ApplicationSuccess />} />
          <Route path="/allarticles" element={<AllArticles />} />
          <Route path="*" element={<NotFound />} />
         <Route
  path="/sell"
  element={
    <AuthGuard>
      <Sell />
    </AuthGuard>
  }
/>
        </Route>

        
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route
  path="/dashboard"
  element={
    <ProfileGuard requireCompleteProfile={true}>
      <Dashboard />
    </ProfileGuard>
  }
/>


       <Route
  path="/complete-profile"
  element={
    <ProfileGuard requireCompleteProfile={false}>
      <CompleteProfile />
    </ProfileGuard>
  }
/>

      </Routes>
    </Router>
  );
}

export default App;
