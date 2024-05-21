"use client";

import Lottie from "lottie-react";
import animationData from "~/public/lottie/loading.json";

interface LottieLoadingProps {
  loop?: boolean;
  width?: string;
  height?: string;
}

export default function LottieLoading({
  loop = true,
  height = "40px",
  width = "40px",
}: LottieLoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie
        animationData={animationData}
        loop={loop}
        style={{
          width,
          height,
        }}
      />
    </div>
  );
}
