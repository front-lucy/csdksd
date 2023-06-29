import { Fragment, useEffect, useRef, useState } from "react";

interface EventImageProps {
  type: string;
  image: string;
  areas: {
    coords: string;
    clickEvent: Function;
  }[];
}

export default function EventImage(props: EventImageProps) {
  const { type, image, areas } = props;
  const imageRef = useRef<any>(null);
  const [pageStatus, setPageStatus] = useState(false);
  useEffect(() => {
    // resize 이벤트 핸들러 등록
    window.addEventListener("resize", adjustCoords);

    // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("resize", adjustCoords);
    };
  }, []);

  const adjustCoords = () => {
    areas.forEach((area, index) => {
      const areaElement = document.querySelector(
        `area[data-index="${type + index}"]`
      );
      if (areaElement) {
        const originalWidth = imageRef.current.naturalWidth;
        const originalHeight = imageRef.current.naturalHeight;
        const coords = area.coords;
        const coordArray = coords.split(",").map(Number);
        const imageElement = imageRef.current;

        const adjustedCoords = coordArray.map((coord, index) => {
          return index % 2 === 0
            ? (coord * imageElement.offsetWidth) / originalWidth
            : (coord * imageElement.offsetHeight) / originalHeight;
        });

        areaElement.setAttribute("coords", adjustedCoords.join(","));
      }
    });
  };

  function fncLoadImage() {
    // 초기화 시점에 한번 실행
    adjustCoords();
    setPageStatus(true);
  }

  return (
    <Fragment>
      {!pageStatus && <div style={{ height: 1000 }} />}
      <img
        ref={imageRef}
        style={{
          width: "100%",
          objectFit: "contain",
          //pointerEvents: "none",
        }}
        src={image}
        useMap={"#" + type}
        onLoad={() => {
          fncLoadImage();
        }}
      />
      <map name={type} id={type}>
        {areas.map((dataList, index) => (
          <area
            style={{ cursor: "pointer" }}
            shape="rect"
            coords={dataList.coords}
            onClick={() => {
              dataList.clickEvent();
            }}
            key={type + index}
            data-index={type + index}
          />
        ))}
      </map>
    </Fragment>
  );
}
