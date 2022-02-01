import { ApplicationDetails } from "../typed";

export interface CardDetailsComponentProp {
  details: ApplicationDetails;
  onAccept: () => void;
  onReject: () => void;
}
