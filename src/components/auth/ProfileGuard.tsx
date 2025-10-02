import {useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface ProfileGuardProps {
  children: ReactNode;
  requireCompleteProfile?: boolean;
}

export default function ProfileGuard({
  children,
  requireCompleteProfile = true,
}: ProfileGuardProps) {
  const [user, loading] = useAuthState(auth);
  const [profileComplete, setProfileComplete] = useState<boolean | null>(null);

  useEffect(() => {
    const checkProfile = async () => {
      if (user) {
        const snap = await getDoc(doc(db, "users", user.uid));
        setProfileComplete(snap.exists() && snap.data().registrationComplete);
      }
    };
    checkProfile();
  }, [user]);

  if (loading || profileComplete === null) {
    return <div className="text-center p-6 text-[#f1f3ee]">Loading...</div>;
  }

  if (!user) return <Navigate to="/login" replace />;

  if (requireCompleteProfile && !profileComplete) {
    return <Navigate to="/complete-profile" replace />;
  }

  if (!requireCompleteProfile && profileComplete) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
