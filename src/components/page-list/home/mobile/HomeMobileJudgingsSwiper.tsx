import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/system";
export default function HomeMobileJudgingsSwiper() {
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
        {new Array(3).fill(0).map((dataList, index) => (
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
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                  zIndex: 1,
                }}
                src={`/img/home/mobile/img-mobile-Judgings${index + 1}.png`}
              />
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
