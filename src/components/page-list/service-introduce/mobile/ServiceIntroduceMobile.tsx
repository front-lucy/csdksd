import React, { use, useEffect, useState } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

import sal from "sal.js";
import "sal.js/dist/sal.css";

export default function ServiceMobile() {
  const router = useRouter();
  const scrollToTop = () => {
    const topElement = document.getElementsByClassName("top")[0];
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log("scrolled");
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      sal();
    });
  }, options);

  useEffect(() => {
    const section1Image = document.querySelector(".section1-image");
    if (section1Image) {
      observer.observe(section1Image);
    }
  }, []);

  return (
    <Wrapper>
      <Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "16px",
          }}
        >
          <img
            src="/img/top-logo2.png"
            alt="logo"
            style={{
              height: "16px",
              marginLeft: "15px",
              marginRight: "12px",
            }}
            onClick={scrollToTop}
          />
          <img
            src="/img/top-logo1.png"
            alt="logo"
            style={{
              height: "16px",
            }}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
      </Header>
      <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          marginTop: "45px",
        }}
        className="top"
      >
        <img
          src="/img/video.png"
          alt="logo"
          style={{
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>

      <Section1>
        <img
          src="/img/ms1t.png"
          alt="logo"
          style={{
            maxWidth: "293px",
            maxHeight: "208px",
            objectFit: "cover",
            marginBottom: "40px",
          }}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1200"
        />
        <img
          src="/img/ms1i.png"
          alt="logo"
          style={{
            maxWidth: "331px",
            maxHeight: "306px",
            objectFit: "cover",
          }}
          data-sal="fade"
          data-sal-delay="400"
          data-sal-duration="1200"
        />
      </Section1>

      <Section2>
        <img
          src="/img/ms2t.png"
          alt="logo"
          style={{
            maxWidth: "308px",
            maxHeight: "252px",
            objectFit: "cover",
            marginBottom: "0px",
          }}
          className="section1-image"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1200"
        />
        <img
          src="/img/ms2i.png"
          alt="logo"
          style={{
            maxWidth: "287px",
            maxHeight: "348px",
            objectFit: "cover",
          }}
          data-sal="fade"
          data-sal-delay="400"
          data-sal-duration="1200"
        />
      </Section2>

      <Section1>
        <img
          src="/img/ms3t.png"
          alt="logo"
          style={{
            maxWidth: "274px",
            maxHeight: "252px",
            objectFit: "cover",
            marginBottom: "16px",
          }}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1200"
        />
        <img
          src="/img/ms3i.png"
          alt="logo"
          style={{
            maxWidth: "290px",
            maxHeight: "312px",
            objectFit: "cover",
          }}
          data-sal="fade"
          data-sal-delay="400"
          data-sal-duration="1200"
        />
      </Section1>

      <Section2>
        <img
          src="/img/ms4i.png"
          alt="logo"
          style={{
            maxWidth: "274px",
            maxHeight: "252px",
            objectFit: "cover",
            marginBottom: "24px",
          }}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1200"
        />
        <img
          src="/img/ms4t.png"
          alt="logo"
          style={{
            maxWidth: "294px",
            maxHeight: "252px",
            objectFit: "cover",
          }}
          data-sal="fade"
          data-sal-delay="400"
          data-sal-duration="1200"
        />
      </Section2>

      <MFooter />

      <div
        style={{
          width: "100%",
          minHeight: "140px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#131313",
        }}
        onClick={() => {
          window.open("https://www.jaedam.com/", "_blank");
        }}
      >
        <img
          src="/img/ms5t.png"
          alt="logo"
          style={{
            width: "219px",
            height: "37px",
          }}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled("section")({
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  overflow: "scroll",
});

const Header = styled("header")({
  width: "100%",
  height: "45px",
  alignItems: "center",
  justifyContent: "flex-start",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  position: "fixed",
  top: 0,
  zIndex: 100,
});

const Section1 = styled("div")({
  minWidth: "358px",
  minHeight: "674px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  backgroundImage: "url(/img/cut-02.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  padding: "auto",
  marginTop: "112px",
  marginBottom: "58px",
});
const Section2 = styled("div")({
  minWidth: "358px",
  minHeight: "674px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  backgroundImage: "url(/img/cut-01.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  padding: "auto",
  marginTop: "112px",
  marginBottom: "58px",
});

const MFooter = styled("footer")({
  width: "100%",
  minHeight: "660px",
  backgroundImage: "url(/img/ms5f.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
});
