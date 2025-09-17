import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";


function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Welcome to DealZone Florida 🚀</h1>
      <p className="mt-2 text-muted-foreground">
        Buy, sell, and find the best deals in Florida.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="mt-2 text-muted-foreground">We are DealZone Florida.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* <AppHeader /> ← tu peux switcher si tu veux tester l’autre version */}

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Ajoute ici les autres routes: /buy, /sell, /blog, /contact, etc. */}
        </Routes>
      </main>
       <Footer />

    </div>
  );
}
