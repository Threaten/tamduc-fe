"use client";
import Image, { ImageProps } from "next/image";
import { useState, useCallback } from "react";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
  fallbackRemotes?: string[];
};

export default function HeroImage({ src, fallbackSrc, fallbackRemotes, onError, ...rest }: Props) {
  const [useFallback, setUseFallback] = useState(false);
  const [remoteIndex, setRemoteIndex] = useState(0);

  const handleError = useCallback<NonNullable<ImageProps["onError"]>>(
    (e) => {
      // try next remote candidate first
      const remotes = [src, ...(fallbackRemotes || [])];
      if (remoteIndex < remotes.length - 1) {
        setRemoteIndex((i) => i + 1);
      } else if (!useFallback && fallbackSrc) {
        setUseFallback(true);
      }
      onError?.(e);
    },
    [remoteIndex, src, fallbackRemotes, useFallback, fallbackSrc, onError]
  );

  const remotes = [src, ...(fallbackRemotes || [])];
  const currentRemote = remotes[Math.min(remoteIndex, remotes.length - 1)];
  const finalSrc = useFallback && fallbackSrc ? fallbackSrc : currentRemote;

  return <Image src={finalSrc} onError={handleError} {...rest} alt={rest.alt ?? ""} />;
}
