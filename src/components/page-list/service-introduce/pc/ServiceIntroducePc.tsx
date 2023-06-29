import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import "swiper/css";
import "swiper/css/pagination";
import "src/styled/page-list/introduce/styles.css";

import SwiperCore, { Pagination, Mousewheel } from "swiper";
import { styled } from "@mui/system";
import "src/styled/page-list/introduce/bubble.css";
import { useRouter } from "next/router";

const IntroduceHeader = styled("section")`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  z-index: 999 !important;
  .margin-header {
    width: 0px;
    @media (min-width: 1200px) {
      min-width: 120px;
    }
  }
`;

const MainSection = styled("div")`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/img/main-section-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .main-section {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 0;

    .phone {
      width: 300px;
      height: 350px;
      object-fit: cover;
      margin-top: 48px;
    }
    .logo {
      width: 370px;
      height: 60px;
      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
    .main-text {
      width: 441px;
      height: 100%;
      object-fit: cover;
      margin-bottom: 52px;
    }
  }
`;

const Section1 = styled("section")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px 0px;
  .bg1 {
    max-width: 1680px;
    width: 100%;
    background-image: url("/img/section1-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    .text-grop1 {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      .section1-t {
        max-width: 387px;
        object-fit: contain;
      }
      .section1-d {
        max-width: 377px;
        object-fit: contain;
      }
      @media (max-width: 1400px) {
        width: 50%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }

    .section1-img {
      object-fit: contain;
      width: 60%;
      max-width: 720px;
      @media (max-width: 1400px) {
        width: 50%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;

const Section2 = styled("section")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px 0px;
  .bg2 {
    max-width: 1680px;
    width: 100%;
    background-image: url("/img/section3-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    .text-grop2 {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      .section3-t {
        width: 70%;
        max-width: 417px;
        object-fit: contain;
        margin-right: 55px;
      }
      @media (max-width: 1400px) {
        width: 50%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }

    .section3-img {
      object-fit: contain;
      width: 60%;
      max-width: 560px;
      margin-left: 6%;
      @media (max-width: 1400px) {
        width: 60%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;

const Section3 = styled("section")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px 0px;
  .bg3 {
    max-width: 1680px;
    width: 100%;
    background-image: url("/img/section1-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    .text-grop3 {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      .section3-t {
        width: 70%;
        max-width: 351px;
        object-fit: contain;
      }
      @media (max-width: 1400px) {
        width: 50%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }

    .section3-img {
      object-fit: contain;
      width: 60%;
      max-width: 640px;
      @media (max-width: 1400px) {
        width: 50%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;

const Section4 = styled("section")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px 0px;
  .bg4 {
    max-width: 1680px;
    width: 100%;
    background-image: url("/img/s4-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 450px 0;
    .text-grop4 {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      .section4-t {
        width: 70%;
        max-width: 468px;
        object-fit: contain;
      }
      @media (max-width: 1400px) {
        width: 50%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }

    .section4-img {
      object-fit: contain;
      width: 60%;
      max-width: 560px;
      margin-left: 6%;
      @media (max-width: 1400px) {
        width: 50%;
        transform: scale(0.7);
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;

export default function ServicePc() {
  const router = useRouter();
  useEffect(() => {
    sal();
  }, []);

  const [swiper, setSwiper] = useState<SwiperCore>();

  function handleSwiperSlideTo() {
    if (swiper) {
      swiper.slideTo(0);
    }
  }

  return (
    <>
      <IntroduceHeader>
        <div className="margin-header"></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            maxHeight: "21px",
            marginLeft: "40px",
            cursor: "pointer",
          }}
          onClick={handleSwiperSlideTo}
        >
          <img
            src="/img/pc-header-logo.png"
            alt="logo"
            style={{
              all: "unset",
              width: "auto",
              height: "21px",
              objectFit: "contain",
            }}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
      </IntroduceHeader>
      <Swiper
        onSwiper={setSwiper}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/img/video-area.png"
            alt="video-area"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <MainSection>
            <>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </>
            <div className="main-section">
              <img
                src="/img/main-text.png"
                alt="logo"
                className="main-text"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-duration="1000"
              />
              <div
                className="logo"
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-duration="1000"
              >
                <img src="/img/main-shortz-logo.png" alt="logo" />
              </div>
              <img
                src="/img/mainphone.png"
                alt="mainphone"
                className="phone"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
              />
              <div>
                <img
                  src="/img/sign_illustauthor.png"
                  alt="sign_illustauthor"
                  style={{
                    width: "77.3px",
                    height: "20px",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    marginRight: "40px",
                    marginBottom: "18px",
                  }}
                />
              </div>
            </div>
          </MainSection>
        </SwiperSlide>

        <SwiperSlide>
          <Section1>
            <div className="bg1">
              <div
                className="text-grop1"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
              >
                <img
                  src="/img/section1-t.png"
                  alt="section1-t"
                  className="section1-t"
                />
                <img
                  src="/img/section1-d.png"
                  alt="section1-d"
                  className="section1-d"
                />
              </div>

              <img
                src="/img/section1-img.png"
                alt="section1-img"
                className="section1-img"
                data-sal="fade"
                data-sal-delay="400"
                data-sal-duration="1000"
              />
            </div>
          </Section1>
        </SwiperSlide>

        <SwiperSlide>
          <Section2>
            <div className="bg2">
              <img
                src="/img/section3-img.png"
                alt="section1-img"
                className="section3-img"
                data-sal="fade"
                data-sal-delay="400"
                data-sal-duration="1000"
              />
              <div
                className="text-grop2"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
              >
                <img
                  src="/img/section3-t.png"
                  alt="section1-t"
                  className="section3-t"
                />
              </div>
            </div>
          </Section2>
        </SwiperSlide>

        <SwiperSlide>
          <Section3>
            <div className="bg3">
              <div
                className="text-grop3"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
              >
                <img
                  src="/img/s3-t.png"
                  alt="section3-t"
                  className="section3-t"
                />
              </div>

              <img
                src="/img/s3-img.png"
                alt="section1-img"
                className="section3-img"
                data-sal="fade"
                data-sal-delay="400"
                data-sal-duration="1000"
              />
            </div>
          </Section3>
        </SwiperSlide>

        <SwiperSlide>
          <Section4>
            <div className="bg4">
              <img
                src="/img/s4-img.png"
                alt="section4-img"
                className="section4-img"
                data-sal="fade"
                data-sal-delay="400"
                data-sal-duration="1000"
              />
              <div
                className="text-grop4"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
              >
                <img
                  src="/img/s4-text.png"
                  alt="section4-t"
                  className="section4-t"
                />
              </div>
            </div>
          </Section4>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="/img/footer.png"
              alt="footer"
              style={{
                objectFit: "cover",
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "177px",
                backgroundColor: "#000",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open("https://www.jaedam.com/", "_blank");
              }}
            >
              <img
                src="/img/footer-logo.png"
                alt="footer-logo"
                style={{
                  objectFit: "contain",
                  width: "219px",
                  height: "37px",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
