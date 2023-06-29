import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface ICustomLottieProps {
  url: string;
}

export default function CustomLottie(props: ICustomLottieProps) {
  const { url } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/" + url + ".json", // Lottie 파일의 경로
      });
    }

    return () => {
      animationRef.current?.destroy();
    };
  }, [url]);

  return <div ref={containerRef} />;
}
