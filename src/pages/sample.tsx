import { Fragment, useRef, useEffect } from "react";

export default function Page() {
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    /*
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;

      // 다시 그리기
      drawCurve();
    };

    const drawCurve = () => {
      // 시작점
      const a1Element = document.getElementById("a1");
      const a1Rect = a1Element.getBoundingClientRect();
      const startX = a1Rect.left + a1Rect.width / 2;
      const startY = a1Rect.bottom + 10;

      // 점 a1.5
      const control1X = startX + 20;
      const control1Y = startY + 80;

      // 종료점
      const a2Element = document.getElementById("a2");
      const a2Rect = a2Element.getBoundingClientRect();
      const endX = a2Rect.left + 0;
      const endY = a2Rect.top + 100;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(control1X, control1Y, endX, endY);
      ctx.strokeStyle = "#EEEEEE";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]); // 점선 스타일 적용
      ctx.stroke();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
    */
  }, []);

  return (
    <Fragment>
      <section
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "pink",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 104,
            left: 88,
            backgroundColor: "#FFFFFF",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            gap: 10,
          }}
        >
          <div>
            시작 출발점
            <br />
            42.195km
          </div>
          <div
            id="a1"
            style={{
              backgroundColor: "#0D233C",
              width: 18,
              height: 18,
              borderRadius: 18,
            }}
          />
        </div>

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        />

        <div
          id="a2"
          style={{
            position: "absolute",
            top: 172,
            right: 88,
            backgroundColor: "#FFFFFF",
            width: 480,
            height: 550,
          }}
        >
          웹툰 런 입니다람쥐~
        </div>
      </section>
    </Fragment>
  );
}
