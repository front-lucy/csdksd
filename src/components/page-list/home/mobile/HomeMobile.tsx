import { useState, useRef } from "react";
import { styled } from "@mui/system";
import HomeMobileHead from "./HomeMobileHead";
import EventImage from "src/components/atoms/EventImage";
import HomeMobileContentsSwiper from "./HomeMobileContentsSwiper";
import ShortzNotice from "../ShortzNotice";
import { useRouter } from "next/router";
import HomeMobileJudgingsSwiper from "./HomeMobileJudgingsSwiper";
import HomeMobileFaq from "./HomeMobileFaq";
import HomeNotice from "../HomeNotice";
import CustomText from "src/components/atoms/CustomText";
export default function HomeMobile() {
  const router = useRouter();
  const [noticeStatus, setNoticeStatus] = useState(false);
  const hwpRef = useRef<any>(null);
  const docsRef = useRef<any>(null);

  const imageList1 = [
    {
      type: "img-home-mobile1",
      image: "/img/home/mobile/img-home-mobile1.png",
      areas: [],
    },
    {
      type: "img-home-mobile2",
      image: "/img/home/mobile/img-home-mobile2.png",
      areas: [
        {
          coords: "822,2121,1400,2276",
          clickEvent: () => {
            setNoticeStatus(true);
          },
        },
        {
          coords: "720,2766,1400,2926",
          clickEvent: () => {
            router.push("/service-introduce");
          },
        },
      ],
    },
    {
      type: "img-home-mobile3",
      image: "/img/home/mobile/img-home-mobile3.png",
      areas: [],
    },
  ];
  const imageList2 = [
    {
      type: "img-home-mobile4",
      image: "/img/home/mobile/img-home-mobile4.png",
      areas: [],
    },
    {
      type: "img-home-mobile5",
      image: "/img/home/mobile/img-home-mobile5.png",
      areas: [],
    },
  ];
  const imageList3 = [
    {
      type: "img-home-mobile6",
      image: "/img/home/mobile/img-home-mobile6.png",
      areas: [],
    },
    {
      type: "img-home-mobile7",
      image: "/img/home/mobile/img-home-mobile7.png",
      areas: [
        {
          coords: "200,2161,808,2317",
          clickEvent: () => {
            fncFileDownload("hwp");
          },
        },
        {
          coords: "863,2161,1490,2317",
          clickEvent: () => {
            fncFileDownload("docx");
          },
        },
        {
          coords: "80,4036,1480,4842",
          clickEvent: () => {
            fncParticipate();
          },
        },
      ],
    },
  ];
  function fncFileDownload(type: "hwp" | "docx") {
    if (hwpRef && type === "hwp") {
      hwpRef.current.click();
    }
    if (docsRef && type === "docx") {
      docsRef.current.click();
    }
  }
  function fncParticipate() {
    const currentTime = new Date();
    const targetTime = new Date("2023-08-09T00:00:00");
    const finishTime = new Date("2023-09-09T19:05:59");
    if (currentTime < targetTime) {
      alert("웹툰런 접수기간이 아닙니다.\n8월9일부터 접수 가능합니다.");
    } else if (currentTime > finishTime) {
      alert("웹툰런 접수가 마감되었습니다.");
    } else {
      window.open("https://forms.gle/Qy6DtZy68ATjVbHx5");
    }
  }
  return (
    <MainArticle>
      <HomeMobileHead />
      <a ref={hwpRef} href="/download/쇼츠웹툰런_추천서_신청서.hwp" download />
      <a
        ref={docsRef}
        href="/download/쇼츠웹툰런_추천서_신청서.docx"
        download
      />
      {imageList1.map((dataList, index) => (
        <ComponentImageArea
          type={dataList.type}
          image={dataList.image}
          areas={dataList.areas}
          key={dataList + "_" + index}
        />
      ))}
      <HomeMobileContentsSwiper />

      {imageList2.map((dataList, index) => (
        <ComponentImageArea
          type={dataList.type}
          image={dataList.image}
          areas={dataList.areas}
          key={dataList + "_" + index}
        />
      ))}
      <HomeMobileJudgingsSwiper />
      <div
        style={{ paddingTop: 20, width: "100%", backgroundColor: "#FFF6F2" }}
      />
      {imageList3.map((dataList, index) => (
        <ComponentImageArea
          type={dataList.type}
          image={dataList.image}
          areas={dataList.areas}
          key={dataList + "_" + index}
        />
      ))}
      <HomeMobileFaq />
      <HomeNotice />
      <ComponentCopyRight />
      <ShortzNotice
        status={noticeStatus}
        closeEvent={() => {
          setNoticeStatus(false);
        }}
      />
    </MainArticle>
  );
}

interface IComponentImageAreaProps {
  type: string;
  image: string;
  areas: {
    coords: string;
    clickEvent: Function;
  }[];
}
function ComponentImageArea(props: IComponentImageAreaProps) {
  const { type, image, areas } = props;

  return (
    <div
      style={{
        width: "100%",
        //minHeight: pageStatus ? 0 : 1000,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        id={type}
        style={{
          width: 5,
          height: 5,
          backgroundColor: "pink",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <EventImage type={type} image={image} areas={areas} />
    </div>
  );
}
function ComponentCopyRight() {
  return (
    <section
      style={{
        width: "100%",
        padding: "25px 0px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        backgroundColor: "#0D233C",
      }}
    >
      <CustomText
        type="Caption1"
        exceptionWeight="Light"
        color="rgba(255,255,255,0.7)"
      >
        COPYRIGHT © SHORTZ WEBTOONRUN. ALL RIGHTS RESERVED.
      </CustomText>
      <img
        style={{ height: 12, objectFit: "contain" }}
        src="/img/img-jaedam-shortz-logo.png"
      />
    </section>
  );
}
const MainArticle = styled("article")({
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});
