import "src/styled/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Button, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { SwrDeviceInfo } from "src/common-swr/SwrDeviceInfo";
import CustomText from "src/components/atoms/CustomText";
import CustomIcon from "src/components/atoms/CustomIcon";

declare global {
  interface Window {
    customConfirm: Function;
    customLoadingOpen: Function;
    customLoadingClose: Function;
    Kakao: any;
    naver_id_login: any;
    customLogin: Function;
    toast: Function;
    fbAsyncInit: Function;
    FB: any;
    customRouterBack: Function;
  }
}
interface confirmMessageProps {
  status: boolean;
  titleMessage: string;
  descriptionMessage: string;
  clickEvent: Function;
}

interface toastMessageProps {
  status: boolean;
  message: string;
}
export default function App({ Component, pageProps }: AppProps) {
  const confirmMessageDefaultValue = {
    status: false,
    titleMessage: "",
    descriptionMessage: "",
    clickEvent: () => {},
  };
  const router = useRouter();

  const [alertMessage, setAlertMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState<confirmMessageProps>(
    confirmMessageDefaultValue
  );
  const [toastMessage, setToastMessage] = useState({
    status: false,
    message: "",
  });
  const [loadingStatus, setLoadingStatus] = useState(false);
  const deviceMinRenderCheck = useMediaQuery("(min-width:1px)");
  const device768Check = useMediaQuery("(max-width:768px)");
  const [customLoginStatus, setCustomLoginStatus] = useState(false);
  const { SwrDeviceInfoValue, setSwrDeviceInfo } = SwrDeviceInfo();

  useEffect(() => {
    if (deviceMinRenderCheck) {
      if (device768Check) {
        setSwrDeviceInfo({ ...SwrDeviceInfoValue, type: "MOBILE" });
      } else {
        setSwrDeviceInfo({ ...SwrDeviceInfoValue, type: "PC" });
      }
    }
  }, [deviceMinRenderCheck, device768Check, setSwrDeviceInfo]);

  //onLoad
  useEffect(() => {
    let firstVh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${firstVh}px`);
    //모바일환경에서의 height 100%처리위한 코드
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    //커스텀얼랏
    window.alert = (popupMessage: string) => {
      setAlertMessage(popupMessage);
    };
    //커스텀컨펌
    window.customConfirm = (confirmPopupMessage: confirmMessageProps) => {
      setConfirmMessage(confirmPopupMessage);
    };
    //전체화면 스피너 처리
    window.customLoadingOpen = () => {
      setLoadingStatus(true);
    };
    window.customLoadingClose = () => {
      setLoadingStatus(false);
    };
    window.customLogin = () => {
      //setSwrRouterPathInfo(router);
      setCustomLoginStatus(true);
    };
    window.toast = (toastMessageProps: toastMessageProps) => {
      setToastMessage(toastMessageProps);
    };
  }, []);

  return (
    <article
      style={{
        width: "100%",
        height: `calc(var(--vh, 1vh) * 100)`,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {/* <Head title="쇼츠" description="기본 메타내용" /> */}
      <article
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          display: "flex",
          width: "100%",
          height: "100%",
          //maxWidth: globalMaxWidth,
        }}
      >
        <Component {...pageProps} />
      </article>
      <Modal
        open={alertMessage.length > 0}
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <section
          style={{
            maxWidth: 300,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            border: "1px solid #6C6C6C",
            boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <CustomIcon url="/icon-alert" />
          <CustomText type="P6" color="#6C6C6C" textAlign="center">
            {alertMessage}
          </CustomText>
          <div
            style={{
              marginTop: 10,
              width: "100%",
              flex: 1,
              backgroundColor: "#FF4300",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: 66,
              padding: "10px 14px",
              cursor: "pointer",
            }}
            onClick={() => {
              setAlertMessage("");
            }}
          >
            <CustomText type="P6" exceptionWeight="Medium">
              확인
            </CustomText>
          </div>
        </section>
      </Modal>
    </article>
  );
}
