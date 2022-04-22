import { ApplicationDetails } from "../typed";

export interface CardDetailsComponentProp {
  details: any;
  onAccept: () => void;
  onReject: () => void;
}
