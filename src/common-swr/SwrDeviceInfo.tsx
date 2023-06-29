import { useEffect, useState } from "react";
import useSwr from "swr";
export function SwrDeviceInfo() {
  const { data = { type: "" }, mutate } = useSwr("/SwrDeviceInfo");
  return {
    SwrDeviceInfoValue: data,
    setSwrDeviceInfo: mutate,
  };
}
