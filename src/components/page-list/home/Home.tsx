import "src/styled/page-list/home/home.css";
import { styled } from "@mui/system";
import { SwrDeviceInfo } from "src/common-swr/SwrDeviceInfo";
import HomePc from "./pc/HomePc";
import HomeMobile from "./mobile/HomeMobile";
export default function Home() {
  const { SwrDeviceInfoValue, setSwrDeviceInfo } = SwrDeviceInfo();
  return (
    <MainArticle>
      {SwrDeviceInfoValue.type === "PC" && <HomePc />}
      {SwrDeviceInfoValue.type === "MOBILE" && <HomeMobile />}
    </MainArticle>
  );
}
const MainArticle = styled("article")({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  backgroundColor: "#FF4300",
});
