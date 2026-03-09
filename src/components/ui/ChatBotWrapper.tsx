"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic import with no SSR for ChatBot
const ChatBotImpl = dynamic(() => import("@/components/ui/ChatBot"), {
  ssr: false,
  loading: () => null,
});

export default function ChatBotWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer ChatBot loading by 3 seconds to prioritize LCP
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <ChatBotImpl />
    </Suspense>
  );
}
