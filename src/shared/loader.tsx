import TopBarProgress from "react-topbar-progress-indicator";
import { ISecondaryLoader } from "./types";
import { classNames } from "../components/className";

TopBarProgress.config({
  barColors: {
    0: "#a7f3d0",
    "1.0": "#6ee7b7",
  },
  shadowBlur: 5,
});

export function TopLoader() {
  return (
    <>
      <TopBarProgress />
    </>
  );
}

export function SecondaryLoader({ size, color, border }: ISecondaryLoader) {
  return (
    <>
      <div
        className={classNames(
          size,
          color,
          border,
          " border-dashed rounded-full animate-spin "
        )}
      ></div>
    </>
  );
}
