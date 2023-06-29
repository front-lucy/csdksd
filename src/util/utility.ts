import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import crypto from "crypto";
export function changeSha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}
export function globalSetCookie(key: string, value: string) {
  setCookie(key, value, { path: "/" });
}
export function globalGetCookie(key: string): any {
  return getCookie(key, { path: "/" });
}
export function globalRemoveCookie(key: string) {
  deleteCookie(key, { path: "/" });
}

export function extractNumbers(input: string) {
  const numberRegex = /\d+/g;
  const numbers = input.match(numberRegex);
  return numbers ? numbers.join("") : "";
}
export function formataAmount(paramAmount: string | number): string {
  return paramAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
