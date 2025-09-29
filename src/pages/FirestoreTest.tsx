import { useEffect } from "react";
import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function FirestoreTest() {
  useEffect(() => {
    (async () => {
      try {
        await setDoc(doc(db, "test", "doc1"), { hello: "world" });
        console.log("✅ Firestore write OK");
      } catch (e) {
        console.error("❌ Firestore test error:", e);
      }
    })();
  }, []);

  return <h1>Test Firestore</h1>;
}
