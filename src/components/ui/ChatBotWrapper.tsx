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
    // Don't load on server or if already loaded
    if (shouldLoad || typeof window === 'undefined') return;

    let loaded = false;
    const loadChatBot = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('mousemove', loadChatBot);
      window.removeEventListener('touchstart', loadChatBot);
      window.removeEventListener('scroll', loadChatBot, { passive: true } as any);
      window.removeEventListener('keydown', loadChatBot);
      clearTimeout(timer);
    };

    // Load after 5 seconds if no user interaction
    const timer = setTimeout(loadChatBot, 5000);

    // Load on first user interaction (passive listeners for INP)
    window.addEventListener('mousemove', loadChatBot, { passive: true });
    window.addEventListener('touchstart', loadChatBot, { passive: true });
    window.addEventListener('scroll', loadChatBot, { passive: true } as any);
    window.addEventListener('keydown', loadChatBot);

    return cleanup;
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <ChatBotImpl />
    </Suspense>
  );
}
