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

export function SecondaryLoader({ size, color }: ISecondaryLoader) {
  return (
    <>
      <div
        className={classNames(
          size,
          color,
          "w-16 h-16 border-4 border-dashed rounded-full animate-spin border-lime-600"
        )}
      ></div>
    </>
  );
}
