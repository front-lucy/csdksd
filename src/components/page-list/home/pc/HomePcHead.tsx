import CustomText from "src/components/atoms/CustomText";
import { globalMaxWidth } from "src/util/code";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import HomeFaqItem from "../HomeFaqItem";
import CustomLottie from "src/components/atoms/CustomLottie";
import { SwrHomeCategoryMove, SwrHomeCategoryObserver } from "../SwrHomeData";
export default function HomePcHead() {
  const { setSwrHomeCategoryMove } = SwrHomeCategoryMove();
  const category = [
    {
      type: "웹툰런이란?",
    },
    {
      type: "진행일정",
    },
    {
      type: "수상 및 심사 기준",
    },
    {
      type: "모집요강 및 접수 방법",
    },
    {
      type: "FAQ",
    },
  ];

  function fncSetCategory(type: number) {
    setSwrHomeCategoryMove(type + 1);
  }
  const { SwrHomeCategoryObserverValue } = SwrHomeCategoryObserver();

  return (
    <MainArticle>
      <section
        style={{
          width: "100%",
          padding: "20px 80px",
          maxWidth: globalMaxWidth,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: 30,
        }}
      >
        <img
          style={{
            width: 202,
            height: 28,
            objectFit: "contain",
            cursor: "pointer",
          }}
          src="/img/img-webtoonrun-logo.png"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        {/*<CustomLottie url="lottie-test" /> */}
        <div style={{ flexGrow: 1 }} />
        {category.map((dataList, index) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              fncSetCategory(index);
            }}
            key={index}
          >
            <CustomText
              type="P5"
              color={
                SwrHomeCategoryObserverValue === index ? "#0D233C" : "#FFFFFF"
              }
            >
              {dataList.type}
            </CustomText>
          </div>
        ))}
      </section>
    </MainArticle>
  );
}

const MainArticle = styled("article")({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  boxShadow: "0px 4px 12px 0px #00000026",
  position: "sticky",
  top: 0,
  backgroundColor: "#FF4300",
  zIndex: 1,
});
