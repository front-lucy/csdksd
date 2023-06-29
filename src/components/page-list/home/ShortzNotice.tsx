import { Fragment } from "react";
import { SwrDeviceInfo } from "src/common-swr/SwrDeviceInfo";
import { Modal, Button } from "@mui/material";
import CustomIcon from "src/components/atoms/CustomIcon";
import EventImage from "src/components/atoms/EventImage";
interface IShortzNoticeProps {
  status: boolean;
  closeEvent: Function;
}
export default function ShortzNotice(props: IShortzNoticeProps) {
  const { status, closeEvent } = props;
  const { SwrDeviceInfoValue } = SwrDeviceInfo();
  return (
    <Fragment>
      <Modal open={status}>
        <section
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <section
            style={{
              maxWidth: 840,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              position: "relative",
            }}
          >
            {SwrDeviceInfoValue.type === "PC" && (
              <EventImage
                type="noticeModalPc"
                image="/img/home/pc/img-shortz-notice-pc.png"
                areas={[
                  {
                    coords: "1590,38,1643,87",
                    clickEvent: () => {
                      closeEvent();
                    },
                  },
                ]}
              />
            )}
            {SwrDeviceInfoValue.type === "MOBILE" && (
              <EventImage
                type="noticeModalPc"
                image="/img/home/mobile/img-shortz-notice-mobile.png"
                areas={[
                  {
                    coords: "636,57,684,101",
                    clickEvent: () => {
                      closeEvent();
                    },
                  },
                ]}
              />
            )}
          </section>
        </section>
      </Modal>
    </Fragment>
  );
}
