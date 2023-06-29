import CustomIcon from "src/components/atoms/CustomIcon";
import CustomText from "src/components/atoms/CustomText";
import { Fragment, ReactNode, useState } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { SwrDeviceInfo } from "src/common-swr/SwrDeviceInfo";
interface IHomeFaqItemProps {
  question: string | ReactNode;
  answer: string | ReactNode;
}
export default function HomeFaqItem(props: IHomeFaqItemProps) {
  const { question, answer } = props;
  const [status, setStatus] = useState(false);
  const { SwrDeviceInfoValue } = SwrDeviceInfo();
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 10,
        padding: `${SwrDeviceInfoValue.type === "PC" ? "20" : "12"}px ${
          SwrDeviceInfoValue.type === "PC" ? "14" : "12"
        }px`,
        backgroundColor: status ? "#FFE3D7" : "#FFF6F2",
        transition: "all 0.4s",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: 0,
          padding: 0,
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          gap: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          setStatus(!status);
        }}
      >
        <CustomIcon url="/icon-Q" />
        <div style={{ flexGrow: 1 }}>
          <CustomText
            type={SwrDeviceInfoValue.type === "PC" ? "P5" : "P6"}
            color={status ? "#FF4300" : "#0D233C"}
          >
            {question}
          </CustomText>
        </div>
        <CustomIcon
          url={status ? "/icon-arrow_top-12-1.5" : "/icon-arrow_bottom-12-1.5"}
          color="#000000"
        />
      </div>
      <Collapse in={status}>
        <div style={{ marginTop: 18, padding: "0px 30px" }}>
          {typeof answer === "string" ? (
            <CustomText
              type={SwrDeviceInfoValue.type === "PC" ? "P5" : "P6"}
              color="#4F4F4F"
            >
              {answer}
            </CustomText>
          ) : (
            answer
          )}
        </div>
      </Collapse>
    </div>
  );
}
