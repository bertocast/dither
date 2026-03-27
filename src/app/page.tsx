"use client";

import { useRef, useCallback, useState } from "react";
import ParticleCanvas from "@/components/particle-canvas";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("/linear-app-icon.png");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImageSrc(URL.createObjectURL(file));
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <ParticleCanvas imageSrc={imageSrc} onUploadRequest={handleUpload} />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
      <span className="absolute bottom-3 left-3 text-[11px] text-black/15 pointer-events-none select-none">
        Dither Playground
      </span>
    </div>
  );
}
