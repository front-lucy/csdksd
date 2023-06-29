import { styled } from "@mui/system";
import { useCallback, Fragment } from "react";

export interface CustomTextProps {
  type:
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "H5"
    | "H6"
    | "P1"
    | "P2"
    | "P3"
    | "P4"
    | "P5"
    | "P6"
    | "Caption1"
    | "Caption2"
    | "Caption3";
  color?: string;
  pointMultiLine?: number;
  textAlign?: "left" | "center" | "right";
  children?: any;
  exceptionWeight?: "Light" | "Regular" | "Medium" | "Semibold" | "Bold";
  required?: boolean;
}

export default function CustomText(props: CustomTextProps) {
  const {
    type,
    color,
    pointMultiLine,
    textAlign,
    exceptionWeight,
    children,
    required,
  } = props;
  const fontSizes = {
    H1: { fontSize: 40, fontWeight: "bold" },
    H2: { fontSize: 36, fontWeight: "bold" },
    H3: { fontSize: 32, fontWeight: "bold" },
    H4: { fontSize: 28, fontWeight: "bold" },
    H5: { fontSize: 24, fontWeight: "bold" },
    H6: { fontSize: 20, fontWeight: "bold" },
    P1: { fontSize: 28, fontWeight: 500 },
    P2: { fontSize: 24, fontWeight: 500 },
    P3: { fontSize: 20, fontWeight: 500 },
    P4: { fontSize: 18, fontWeight: 500 },
    P5: { fontSize: 16, fontWeight: 500 },
    P6: { fontSize: 14, fontWeight: 500 },
    Caption1: { fontSize: 12, fontWeight: 500 },
    Caption2: { fontSize: 10, fontWeight: 500 },
    Caption3: { fontSize: 9, fontWeight: 500 },
  };

  const fncGetFontSize = useCallback(() => fontSizes[type], [type]);
  const fontWeight =
    exceptionWeight === "Bold"
      ? "bold"
      : exceptionWeight === "Semibold"
      ? 600
      : exceptionWeight === "Medium"
      ? 500
      : exceptionWeight === "Regular"
      ? 400
      : exceptionWeight === "Light"
      ? 300
      : fncGetFontSize().fontWeight;

  return (
    <SettingDiv
      textAlign={textAlign ?? "left"}
      pointMultiLine={pointMultiLine}
      color={color ?? "#ffffff"}
      fontWeight={fontWeight}
      fontSize={fncGetFontSize().fontSize}
    >
      {children}
    </SettingDiv>
  );
}

type SettingSectionProps = {
  textAlign: "left" | "center" | "right";
  pointMultiLine: number | undefined;
  color: string;
  fontWeight: number | string;
  fontSize: number;
};

const MainDiv = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  gap: 3,
});

const SettingDiv = styled("div")<SettingSectionProps>(
  ({ textAlign, pointMultiLine, color, fontWeight, fontSize }) => ({
    maxWidth: "100%",
    textAlign: textAlign,
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color ? color : "#000000",
    whiteSpace: pointMultiLine ? "unset" : "pre-wrap",
    overflow: pointMultiLine ? "hidden" : "visible",
    textOverflow: pointMultiLine ? "ellipsis" : "unset",
    lineHeight: "140%",
    display: "-webkit-box",
    WebkitLineClamp: pointMultiLine,
    WebkitBoxOrient: "vertical",
    fontFamily: "Pretendard, SB_Mac_Font",
  })
);
