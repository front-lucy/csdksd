import { Fragment } from "react";
import { SwrDeviceInfo } from "src/common-swr/SwrDeviceInfo";

import ServiceMobile from "./mobile/ServiceIntroduceMobile";
import ServiceIntroducePc from "./pc/ServiceIntroducePc";

export default function ServiceIntroduce() {
  const { SwrDeviceInfoValue, setSwrDeviceInfo } = SwrDeviceInfo();
  return (
    <Fragment>
      {SwrDeviceInfoValue.type === "PC" && <ServiceIntroducePc />}
      {SwrDeviceInfoValue.type === "MOBILE" && <ServiceMobile />}
    </Fragment>
  );
}
