"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const difference = +new Date(`1/1/2025`) - +new Date();
    setDelay(difference);

    const timer = setInterval(() => {
      setDelay((prevDelay) => prevDelay - 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!isMounted) {
    return null; // Don't render anything on the server.
  }

  const d = Math.floor(delay / (1000 * 60 * 60 * 24));
  const h = Math.floor((delay / (1000 * 60 * 60)) % 24);
  const m = Math.floor((delay / 1000 / 60) % 60);
  const s = Math.floor((delay / 1000) % 60);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default CountDown;
