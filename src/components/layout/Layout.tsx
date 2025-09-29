  import { Outlet, useLocation } from "react-router-dom";
  import Header from "../common/header/Header";
  import Footer from "../common/footer/Footer";
  import FooterHome from "../common/footer/FooterHome";

  export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a1f1a] via-[#202720] to-[#0b0d0b] text-[#f1f3ee]">
        {/* Header global */}
        <Header />

        {/* Contenu des pages */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer conditionnel */}
        {isHome ? <FooterHome /> : <Footer />}
      </div>
    );
  }
