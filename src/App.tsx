import { useEffect } from "react";
import { db } from "./lib/firebase";

export default function App() {
  useEffect(() => {
    console.log("Firestore ready:", !!db);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold">DealZone Florida ✅</h1>
      <p className="mt-2 opacity-80">Firebase initialized</p>
    </div>
  );
}
