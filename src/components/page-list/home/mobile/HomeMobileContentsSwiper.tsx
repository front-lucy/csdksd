import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/system";
export default function HomeMobileContentsSwiper() {
  return (
    <MainASection>
      <Slider
        dots
        prevArrow={<></>}
        nextArrow={<></>}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={false}
        centerMode
        centerPadding="30px 0px"
        beforeChange={(currentSlide, nextSlide) => {}}
      >
        {new Array(6).fill(0).map((dataList, index) => (
          <div
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            key={index}
          >
            <section
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                position: "relative",
              }}
            >
              {index > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    minWidth: 60,
                    minHeight: 1,
                    backgroundColor: "#FF4300",
                  }}
                />
              )}
              <img
                style={{
                  width: "100%",
                  padding: "0px 7px",
                  objectFit: "contain",
                  zIndex: 1,
                }}
                src={`/img/home/mobile/img-mobile-content${index + 1}.png`}
              />
              {index + 1 < 6 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    minWidth: 60,
                    minHeight: 1,
                    backgroundColor: "#FF4300",
                  }}
                />
              )}
            </section>
          </div>
        ))}
      </Slider>
    </MainASection>
  );
}

const MainASection = styled("section")({
  width: "100%",
  backgroundColor: "#FFF6F2",
});
