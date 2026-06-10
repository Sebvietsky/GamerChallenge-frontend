"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function EasterEggPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      void playPromise.catch((error) => {
        console.error("Easter egg video playback failed", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        className="max-h-full max-w-full object-contain"
        src="/easteregg.mp4"
        autoPlay
        playsInline
        controls={false}
        onEnded={() => router.push("/challenges")}
      />
    </div>
  );
}
