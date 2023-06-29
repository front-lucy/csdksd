import CustomText from "src/components/atoms/CustomText";
import { globalMaxWidth } from "src/util/code";
import { styled } from "@mui/system";
import { useState } from "react";
import CustomIcon from "src/components/atoms/CustomIcon";
import { Button, Drawer } from "@mui/material";
export default function HomeMobileHead() {
  const category = [
    { type: "웹툰런이란?", id: "img-home-mobile2", clickEvent: () => {} },
    { type: "진행일정", id: "img-home-mobile3", clickEvent: () => {} },
    { type: "수상 및 심사 기준", id: "img-home-mobile5", clickEvent: () => {} },
    {
      type: "모집요강 및 접수 방법",
      id: "img-home-mobile7",
      clickEvent: () => {},
    },
    { type: "FAQ", id: "img-home-mobile1", clickEvent: () => {} },
  ];
  const [modalStatus, setModalStatus] = useState(false);
  function fncTransCategory(id: string) {
    setModalStatus(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 54,
        behavior: "smooth",
      });
    }
  }

  return (
    <MainArticle>
      <section
        style={{
          width: "100%",
          padding: "15px 20px",
          maxWidth: globalMaxWidth,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: 30,
        }}
      >
        <img
          style={{
            width: 145,
            height: 20,
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
        <div style={{ flexGrow: 1 }} />
        <Button
          style={{ padding: 0, margin: 0, minWidth: 0 }}
          onClick={() => {
            setModalStatus(true);
          }}
        >
          <CustomIcon url="/icon-menu" />
        </Button>
      </section>
      <Drawer
        anchor="right"
        open={modalStatus}
        onClose={() => {
          setModalStatus(false);
        }}
      >
        <article
          style={{
            width: "100vw",
            height: "100%",
            backgroundColor: "#FF4300",
            padding: "0px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              display: "flex",
              padding: "15px 0px",
            }}
          >
            <Button
              style={{ padding: 0, margin: 0, minWidth: 0 }}
              onClick={() => {
                setModalStatus(false);
              }}
            >
              <CustomIcon url="/icon-x-24" />
            </Button>
          </div>
          <section
            style={{
              marginTop: 48,
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              flexDirection: "column",
              gap: 33,
            }}
          >
            {category.map((dataList, index) => (
              <Button
                style={{ padding: 0, margin: 0, minWidth: 0 }}
                onClick={() => {
                  fncTransCategory(dataList.id);
                }}
                key={index}
              >
                <CustomText type="P4">{dataList.type}</CustomText>
              </Button>
            ))}
          </section>
        </article>
      </Drawer>
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
