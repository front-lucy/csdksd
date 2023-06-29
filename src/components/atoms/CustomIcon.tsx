export interface CustomIconProps {
  url: string;
  color?: string;
}
import React, { useState, useEffect } from "react";
export default function CustomIcon(props: CustomIconProps) {
  const { color } = props;
  return color ? <ColorIcon {...props} /> : <DefaultIcon {...props} />;
}
function ColorIcon(props: CustomIconProps) {
  const { url, color = "white" } = props;
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch("/icons" + url + ".svg");
        const svgText = await response.text();
        const coloredSvgText = svgText
          .replace(/fill="(.*?)"/g, (match, p1) =>
            p1 === "none" ? match : `fill="${color}"`
          )
          .replace(/stroke="(.*?)"/g, (match, p1) =>
            p1 === "none" ? match : `stroke="${color}"`
          );
        setSvgContent(coloredSvgText);
      } catch (error) {}
    };

    fetchSvg();
  }, [url, color]);

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
      dangerouslySetInnerHTML={{
        __html: svgContent || "",
      }}
    />
  );
}

function DefaultIcon(props: CustomIconProps) {
  const { url } = props;
  return (
    <img
      src={"/icons" + url + ".svg"}
      style={
        {
          //objectFit: "contain",
        }
      }
    />
  );
}
